import { Injectable } from '@angular/core';
import { FormConfig } from '../models/form-config.model';
import { personalInfoFormConfig } from '../../features/dynamic-form/configs/personal-info-form.config';
import { productFormConfig } from '../../features/dynamic-form/configs/product-form.config';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private formConfigs: FormConfig[] = [
    personalInfoFormConfig,
    productFormConfig
  ];

  constructor() { }

  /**
   * Get all available form configurations
   */
  getAvailableForms(): FormConfig[] {
    return this.formConfigs;
  }

  /**
   * Get a specific form configuration by ID
   */
  getFormById(id: string): FormConfig | null {
    const form = this.formConfigs.find(config => config.id === id);
    return form || null;
  }
}
