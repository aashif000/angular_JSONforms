import { Component } from '@angular/core';
import { JsonFormsAngularService } from '@jsonforms/angular';
import { JsonFormsAngularLayoutRenderer } from '@jsonforms/angular';
import { GroupLayout, RankedTester, rankWith, isLayout, uiTypeIs } from '@jsonforms/core';

@Component({
  selector: 'app-custom-group',
  template: `
    <fieldset 
      class="border border-gray-300 p-4 rounded-md mb-4"
      [ngClass]="{'hidden': hidden}">
      <legend 
        *ngIf="layout.label" 
        class="text-md font-medium text-gray-700 px-2">
        {{ layout.label }}
      </legend>
      
      <div class="flex flex-col space-y-4">
        <div *ngFor="let element of layout.elements">
          <jsonforms-outlet 
            [renderProps]="getProps(element)"
            [path]="path"
            [schema]="schema">
          </jsonforms-outlet>
        </div>
      </div>
    </fieldset>
  `
})
export class CustomGroupRenderer extends JsonFormsAngularLayoutRenderer<GroupLayout> {
  constructor(jsonFormsService: JsonFormsAngularService) {
    super(jsonFormsService);
  }

  getProps(element: any): any {
    return {
      ...this.renderProps,
      uischema: element
    };
  }
}

/**
 * Tester for custom group renderer
 */
export const customGroupTester: RankedTester = rankWith(
  3, 
  uiTypeIs('Group')
);
