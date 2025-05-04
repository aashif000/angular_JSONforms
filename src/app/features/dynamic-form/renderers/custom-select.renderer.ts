import { Component, OnInit } from '@angular/core';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import { 
  RankedTester, 
  rankWith, 
  isEnumControl, 
  EnumCellProps,
  Actions
} from '@jsonforms/core';

@Component({
  selector: 'app-custom-select',
  template: `
    <div [ngClass]="{'mb-6': !hidden}">
      <label 
        [for]="id" 
        class="block text-sm font-medium text-gray-700 mb-1"
        *ngIf="!hidden">
        {{ label }}
        <span class="text-red-500" *ngIf="required">*</span>
      </label>
      
      <select 
        [id]="id"
        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        [ngClass]="{'border-red-500': !valid && !pristine}"
        [value]="data"
        (change)="onChange($event)"
        (focus)="onFocus()"
        (blur)="onBlur()"
        [disabled]="disabled"
        [required]="required"
        *ngIf="!hidden">
        <option value="" [selected]="!data">Select...</option>
        <option 
          *ngFor="let option of options" 
          [value]="option.value" 
          [selected]="data === option.value">
          {{ option.label }}
        </option>
      </select>
      
      <p class="mt-1 text-sm text-red-600" *ngIf="!valid && !pristine">
        {{ error }}
      </p>
      
      <p class="mt-1 text-xs text-gray-500" *ngIf="description && !error && !hidden">
        {{ description }}
      </p>
    </div>
  `
})
export class CustomSelectRenderer extends JsonFormsControl {
  options: { value: any, label: string }[] = [];

  constructor(jsonformsService: JsonFormsAngularService) {
    super(jsonformsService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.initOptions();
  }

  private initOptions(): void {
    if (this.scopedSchema.enum) {
      this.options = this.scopedSchema.enum.map((value: any) => ({
        value: value,
        label: this.getLabel(value)
      }));
    } else if (this.scopedSchema.oneOf) {
      this.options = this.scopedSchema.oneOf.map((option: any) => ({
        value: option.const,
        label: option.title || option.const
      }));
    }
  }

  private getLabel(value: any): string {
    // Try to get label from schema options
    const oneOfOption = this.scopedSchema.oneOf?.find((opt: any) => opt.const === value);
    if (oneOfOption && oneOfOption.title) {
      return oneOfOption.title;
    }
    
    return String(value);
  }

  onChange(event: any): void {
    const value = event.target.value;
    // For string enums with empty values, map empty string to undefined (optional fields)
    const mappedValue = value === '' ? undefined : value;
    this.jsonFormsService.updateCore(
      Actions.update(this.path, () => mappedValue)
    );
  }
}

/**
 * Tester for custom select renderer
 */
export const customSelectTester: RankedTester = rankWith(
  3, 
  isEnumControl
);
