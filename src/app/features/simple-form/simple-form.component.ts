import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {
  @Input() formType: 'personal' | 'product' = 'personal';
  @Output() formSubmit = new EventEmitter<any>();
  
  form: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }
  
  ngOnInit(): void {
    this.initForm();
  }
  
  initForm(): void {
    if (this.formType === 'personal') {
      this.form = this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
        lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.pattern('^[0-9\\-\\+\\s\\(\\)]+$')]],
        gender: ['prefer_not_to_say'],
        address: this.fb.group({
          street: ['', Validators.required],
          city: ['', Validators.required],
          state: [''],
          zipCode: [''],
          country: ['USA', Validators.required]
        }),
        preferences: this.fb.group({
          newsletter: [false],
          contactMethod: ['email']
        })
      });
    } else {
      this.form = this.fb.group({
        productName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        sku: ['', Validators.required],
        category: ['electronics', Validators.required],
        price: [0, [Validators.required, Validators.min(0)]],
        discount: [0, [Validators.min(0), Validators.max(100)]],
        inStock: [true],
        stockQuantity: [0, Validators.min(0)],
        description: [''],
        specifications: this.fb.group({
          weight: [0, Validators.min(0)],
          dimensions: this.fb.group({
            length: [0, Validators.min(0)],
            width: [0, Validators.min(0)],
            height: [0, Validators.min(0)]
          }),
          color: ['']
        })
      });
    }
  }
  
  onSubmit(): void {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    } else {
      // Mark all fields as touched to trigger validation display
      this.markFormGroupTouched(this.form);
    }
  }
  
  // Helper method to mark all controls in a form group as touched
  markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  
  // Getters for easier template access
  get formControls() {
    return this.form.controls;
  }
  
  get addressControls() {
    return (this.form.get('address') as FormGroup)?.controls;
  }
  
  get preferencesControls() {
    return (this.form.get('preferences') as FormGroup)?.controls;
  }
  
  get specificationsControls() {
    return (this.form.get('specifications') as FormGroup)?.controls;
  }
  
  get dimensionsControls() {
    return (this.form.get('specifications.dimensions') as FormGroup)?.controls;
  }
}