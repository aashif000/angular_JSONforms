import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormConfig } from '../../../core/models/form-config.model';

@Component({
  selector: 'app-form-switcher',
  templateUrl: './form-switcher.component.html'
})
export class FormSwitcherComponent {
  @Input() forms: FormConfig[] = [];
  @Input() currentFormId: string | undefined;
  @Output() formSelected = new EventEmitter<string>();

  selectForm(formId: string): void {
    if (formId !== this.currentFormId) {
      this.formSelected.emit(formId);
    }
  }
}
