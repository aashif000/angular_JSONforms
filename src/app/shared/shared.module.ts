import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormSwitcherComponent } from './ui/form-switcher/form-switcher.component';

@NgModule({
  declarations: [
    FormSwitcherComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormSwitcherComponent
  ]
})
export class SharedModule { }
