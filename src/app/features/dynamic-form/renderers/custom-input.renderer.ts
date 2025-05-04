import { Component } from '@angular/core';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import { 
  isControl, 
  RankedTester, 
  rankWith, 
  or,
  isStringControl,
  isNumberControl,
  isIntegerControl,
  isDateControl,
  ControlProps,
  Actions
} from '@jsonforms/core';

@Component({
  selector: 'app-custom-input',
  template: `
    <div [ngClass]="{'mb-6': !hidden}">
      <label 
        [for]="id" 
        class="block text-sm font-medium text-gray-700 mb-1"
        *ngIf="!hidden">
        {{ label }}
        <span class="text-red-500" *ngIf="required">*</span>
      </label>
      
      <input 
        [type]="getInputType()" 
        [id]="id"
        class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border"
        [ngClass]="{'border-red-500': !valid && !pristine}"
        [value]="data"
        (input)="onChange($event)"
        (focus)="onFocus()"
        (blur)="onBlur()"
        [disabled]="disabled"
        [attr.min]="min"
        [attr.max]="max"
        [attr.step]="step"
        [attr.pattern]="pattern"
        [required]="required"
        [placeholder]="description || ''"
        *ngIf="!hidden">
      
      <p class="mt-1 text-sm text-red-600" *ngIf="!valid && !pristine">
        {{ error }}
      </p>
      
      <p class="mt-1 text-xs text-gray-500" *ngIf="description && !error && !hidden">
        {{ description }}
      </p>
    </div>
  `
})
export class CustomInputRenderer extends JsonFormsControl {
  get min(): number | undefined {
    return this.scopedSchema.minimum;
  }

  get max(): number | undefined {
    return this.scopedSchema.maximum;
  }

  get step(): number | undefined {
    return this.scopedSchema.multipleOf || (this.isNumberType() ? 0.1 : 1);
  }

  get pattern(): string | undefined {
    return this.scopedSchema.pattern;
  }

  constructor(jsonformsService: JsonFormsAngularService) {
    super(jsonformsService);
  }

  getInputType(): string {
    const schemaType = this.scopedSchema.type;
    
    if (this.scopedSchema.format === 'date') {
      return 'date';
    } else if (this.scopedSchema.format === 'date-time') {
      return 'datetime-local';
    } else if (this.scopedSchema.format === 'email') {
      return 'email';
    } else if (this.scopedSchema.format === 'tel') {
      return 'tel';
    } else if (this.scopedSchema.format === 'password') {
      return 'password';
    } else if (schemaType === 'number' || schemaType === 'integer') {
      return 'number';
    }
    
    return 'text';
  }

  isNumberType(): boolean {
    return this.scopedSchema.type === 'number';
  }

  onChange(event: any): void {
    const value = event.target.value;
    
    // Handle conversion for number types
    if (this.isNumberType() && value !== '') {
      const numValue = parseFloat(value);
      this.jsonFormsService.updateCore(
        Actions.update(this.path, () => numValue)
      );
    } else if (this.scopedSchema.type === 'integer' && value !== '') {
      const intValue = parseInt(value, 10);
      this.jsonFormsService.updateCore(
        Actions.update(this.path, () => intValue)
      );
    } else {
      this.jsonFormsService.updateCore(
        Actions.update(this.path, () => value)
      );
    }
  }
}

/**
 * Tester for custom input renderer
 */
export const customInputTester: RankedTester = rankWith(
  3, 
  or(
    isStringControl,
    isNumberControl, 
    isIntegerControl,
    isDateControl
  )
);
