import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Form Generation Demo';
  currentFormType: 'personal' | 'product' = 'personal';
  formData: any = {};

  switchForm(formType: 'personal' | 'product'): void {
    this.currentFormType = formType;
    this.formData = {};
  }

  handleFormSubmit(data: any): void {
    this.formData = data;
    console.log('Form submitted:', data);
    
    // In a real application, this would send data to a server
    // this.http.post('/api/submit-form', data).subscribe(response => {
    //   console.log('Server response:', response);
    // });
  }
  
  hasFormData(): boolean {
    return this.formData && Object.keys(this.formData).length > 0;
  }
}