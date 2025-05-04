# Angular JSONForms Dynamic Form Generation

This project demonstrates the implementation of a dynamic form generation system using Angular 14 and JSONForms.io library. The application showcases how to create, validate, and submit forms based on JSON schemas with custom renderers and Tailwind CSS styling.

## Features

- **Dynamic Form Generation**: Forms are created from JSON schemas and UI schemas
- **Multiple Form Types**: Includes Personal Information and Product forms
- **Custom Form Renderers**: Enhanced input, select, and group renderers
- **Real-time Validation**: Form validation based on JSON schema definitions
- **Responsive Design**: Mobile and desktop friendly UI with Tailwind CSS
- **Form State Management**: Persistence of form data and validation state

## Project Structure

The project follows a feature-based architecture:

```
src/
├── app/
│   ├── core/              # Core services and utilities
│   │   └── services/      # Form services, schema management
│   ├── features/          # Feature modules
│   │   ├── dynamic-form/  # JSONForms implementation
│   │   │   └── renderers/ # Custom renderers
│   │   └── simple-form/   # Alternative simplified form approach
│   └── shared/            # Shared components and directives
├── assets/                # Static assets and JSON schemas
└── environments/          # Environment configuration
```

## JSON Schema Structure

The application uses two types of JSON schemas:

1. **Personal Information Form**

```json
{
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "email": { "type": "string", "format": "email" },
    "age": { "type": "integer", "minimum": 18 },
    "address": {
      "type": "object",
      "properties": {
        "street": { "type": "string" },
        "city": { "type": "string" },
        "zipCode": { "type": "string" }
      }
    }
  },
  "required": ["name", "email"]
}
```

2. **Product Form**

```json
{
  "type": "object",
  "properties": {
    "productName": { "type": "string" },
    "price": { "type": "number", "minimum": 0 },
    "category": { 
      "type": "string", 
      "enum": ["Electronics", "Clothing", "Food", "Other"] 
    },
    "inStock": { "type": "boolean" },
    "description": { "type": "string" }
  },
  "required": ["productName", "price", "category"]
}
```

## Custom Renderers

The project implements custom renderers to enhance the default JSONForms components:

- **Custom Input Renderer**: Enhanced text inputs with improved styling and error handling
- **Custom Select Renderer**: Customized dropdown with Tailwind styling
- **Custom Group Renderer**: Organized grouping of form elements

## Setup and Installation

1. Clone the repository
2. Install dependencies with `npm install --legacy-peer-deps`
3. Run the development server with `ng serve`
4. Access the application at `http://localhost:4200`

## Technologies Used

- Angular 14
- JSONForms.io library (v3.0.0)
- Tailwind CSS
- Angular Material

## Assumptions Made

- The application uses Angular 14 instead of Angular 15 due to compatibility issues with JSONForms
- Tailwind CSS is included via CDN to avoid build conflicts
- Custom renderers are simplified to focus on core functionality
- Form state is managed in-memory; in a production app, this would connect to a backend

## Assignment Requirements Completion

- ✅ **Project Setup**: Angular project with JSONForms.io and Tailwind CSS
- ✅ **Implement JSON Forms**: Dynamic form generation with multiple form layouts
- ✅ **Custom Renderers**: Custom renderers for input fields, selects, and groups
- ✅ **Responsive Design**: Mobile and desktop responsive with Tailwind CSS
- ✅ **Form Validations**: Real-time validation with error messages
- ✅ **Interactive Elements**: Form switching and field dependencies

## Future Enhancements

- Add more form types and complex field interactions
- Implement form builder interface for dynamic schema creation
- Add form data persistence with backend integration
- Improve accessibility features
