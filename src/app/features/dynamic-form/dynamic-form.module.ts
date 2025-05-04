import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonFormsModule, JsonFormsAngularService } from '@jsonforms/angular';
import { JsonFormsAngularMaterialModule } from '@jsonforms/angular-material';

import { DynamicFormComponent } from './dynamic-form.component';
import { 
  CustomInputRenderer, 
  CustomSelectRenderer, 
  CustomGroupRenderer 
} from './renderers';

@NgModule({
  declarations: [
    DynamicFormComponent,
    CustomInputRenderer,
    CustomSelectRenderer,
    CustomGroupRenderer
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    JsonFormsModule,
    JsonFormsAngularMaterialModule
  ],
  exports: [
    DynamicFormComponent
  ],
  providers: [
    JsonFormsAngularService
  ]
})
export class DynamicFormModule { }
