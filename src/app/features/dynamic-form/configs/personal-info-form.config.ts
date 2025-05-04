import { FormConfig } from '../../../core/models/form-config.model';

/**
 * Personal Information Form Configuration
 */
export const personalInfoFormConfig: FormConfig = {
  id: 'personal-info',
  name: 'Personal Information Form',
  description: 'A form for collecting personal information',
  schema: {
    type: 'object',
    properties: {
      firstName: {
        type: 'string',
        minLength: 2,
        maxLength: 50,
        description: 'Your legal first name'
      },
      lastName: {
        type: 'string',
        minLength: 2,
        maxLength: 50,
        description: 'Your legal last name'
      },
      email: {
        type: 'string',
        format: 'email',
        description: 'Your email address'
      },
      dateOfBirth: {
        type: 'string',
        format: 'date',
        description: 'Your date of birth'
      },
      phone: {
        type: 'string',
        pattern: '^[0-9\\-\\+\\s\\(\\)]+$',
        description: 'Your phone number'
      },
      gender: {
        type: 'string',
        enum: ['male', 'female', 'other', 'prefer_not_to_say'],
        default: 'prefer_not_to_say',
        description: 'Your gender'
      },
      address: {
        type: 'object',
        properties: {
          street: {
            type: 'string',
            description: 'Street address'
          },
          city: {
            type: 'string',
            description: 'City'
          },
          state: {
            type: 'string',
            description: 'State or province'
          },
          zipCode: {
            type: 'string',
            description: 'ZIP or postal code'
          },
          country: {
            type: 'string',
            enum: ['USA', 'Canada', 'Mexico', 'Other'],
            description: 'Country'
          }
        },
        required: ['street', 'city', 'country']
      },
      preferences: {
        type: 'object',
        properties: {
          newsletter: {
            type: 'boolean',
            description: 'Subscribe to our newsletter'
          },
          contactMethod: {
            type: 'string',
            enum: ['email', 'phone', 'mail'],
            description: 'Preferred contact method'
          }
        },
        dependencies: {
          newsletter: {
            oneOf: [
              {
                properties: {
                  newsletter: { enum: [true] },
                  contactMethod: { enum: ['email', 'phone', 'mail'] }
                },
                required: ['contactMethod']
              },
              {
                properties: {
                  newsletter: { enum: [false] }
                }
              }
            ]
          }
        }
      }
    },
    required: ['firstName', 'lastName', 'email']
  },
  uischema: {
    type: 'VerticalLayout',
    elements: [
      {
        type: 'Group',
        label: 'Basic Information',
        elements: [
          {
            type: 'HorizontalLayout',
            elements: [
              {
                type: 'Control',
                scope: '#/properties/firstName'
              },
              {
                type: 'Control',
                scope: '#/properties/lastName'
              }
            ]
          },
          {
            type: 'Control',
            scope: '#/properties/email'
          },
          {
            type: 'Control',
            scope: '#/properties/dateOfBirth'
          },
          {
            type: 'Control',
            scope: '#/properties/phone'
          },
          {
            type: 'Control',
            scope: '#/properties/gender',
            options: {
              format: 'radio',
              labelMap: {
                'male': 'Male',
                'female': 'Female',
                'other': 'Other',
                'prefer_not_to_say': 'Prefer not to say'
              }
            }
          }
        ]
      },
      {
        type: 'Group',
        label: 'Address',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/address/properties/street'
          },
          {
            type: 'HorizontalLayout',
            elements: [
              {
                type: 'Control',
                scope: '#/properties/address/properties/city'
              },
              {
                type: 'Control',
                scope: '#/properties/address/properties/state'
              },
              {
                type: 'Control',
                scope: '#/properties/address/properties/zipCode'
              }
            ]
          },
          {
            type: 'Control',
            scope: '#/properties/address/properties/country'
          }
        ]
      },
      {
        type: 'Group',
        label: 'Preferences',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/preferences/properties/newsletter'
          },
          {
            type: 'Control',
            scope: '#/properties/preferences/properties/contactMethod',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/preferences/properties/newsletter',
                schema: { const: true }
              }
            }
          }
        ]
      }
    ]
  }
};
