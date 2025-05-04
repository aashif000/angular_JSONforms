import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import { Actions, JsonFormsState, createAjv } from '@jsonforms/core';
import { 
  customInputTester, 
  customSelectTester, 
  customGroupTester,
  CustomInputRenderer, 
  CustomSelectRenderer, 
  CustomGroupRenderer 
} from './renderers';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input() schema: any;
  @Input() uischema: any;
  @Input() data: any = {};
  @Output() dataChange = new EventEmitter<any>();
  @Output() formSubmit = new EventEmitter<any>();

  public renderers = [
    { tester: customInputTester, renderer: CustomInputRenderer },
    { tester: customSelectTester, renderer: CustomSelectRenderer },
    { tester: customGroupTester, renderer: CustomGroupRenderer }
  ];

  private ajv = createAjv();

  constructor(private jsonFormsService: JsonFormsAngularService) {}

  ngOnInit(): void {
    this.initJsonForms();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.schema || changes.uischema || changes.data) {
      this.initJsonForms();
    }
  }

  /**
   * Initialize or update the JSON Forms configuration
   */
  private initJsonForms(): void {
    if (!this.schema || !this.uischema) {
      return;
    }

    this.jsonFormsService.init(
      this.data || {},
      this.schema,
      this.uischema,
      {
        renderers: this.renderers,
        ajv: this.ajv
      }
    );

    this.jsonFormsService.updateState$.subscribe((state: JsonFormsState) => {
      const formData = state.data;
      this.dataChange.emit(formData);
    });
  }

  handleSubmit(): void {
    // Check if the form is valid
    const state = this.jsonFormsService.getState() as JsonFormsState;
    const isValid = state.errors && state.errors.length === 0;
    
    if (isValid) {
      this.formSubmit.emit(this.data);
    } else {
      console.error('Form has validation errors:', state.errors);
      alert('Please fix the validation errors before submitting');
    }
  }
}
