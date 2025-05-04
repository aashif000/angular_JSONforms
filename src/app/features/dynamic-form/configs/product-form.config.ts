import { FormConfig } from '../../../core/models/form-config.model';

/**
 * Product Form Configuration
 */
export const productFormConfig: FormConfig = {
  id: 'product-form',
  name: 'Product Form',
  description: 'A form for adding or editing product information',
  schema: {
    type: 'object',
    properties: {
      productName: {
        type: 'string',
        minLength: 3,
        maxLength: 100,
        description: 'Name of the product'
      },
      sku: {
        type: 'string',
        description: 'Stock Keeping Unit (unique identifier)'
      },
      category: {
        type: 'string',
        enum: ['electronics', 'clothing', 'food', 'books', 'home', 'other'],
        description: 'Product category'
      },
      price: {
        type: 'number',
        minimum: 0,
        multipleOf: 0.01,
        description: 'Product price'
      },
      discount: {
        type: 'number',
        minimum: 0,
        maximum: 100,
        description: 'Discount percentage'
      },
      inStock: {
        type: 'boolean',
        default: true,
        description: 'Is the product in stock?'
      },
      stockQuantity: {
        type: 'integer',
        minimum: 0,
        description: 'Available quantity in stock'
      },
      description: {
        type: 'string',
        description: 'Product description'
      },
      releaseDate: {
        type: 'string',
        format: 'date',
        description: 'Product release date'
      },
      specifications: {
        type: 'object',
        properties: {
          weight: {
            type: 'number',
            minimum: 0,
            description: 'Weight in kg'
          },
          dimensions: {
            type: 'object',
            properties: {
              length: {
                type: 'number',
                minimum: 0,
                description: 'Length in cm'
              },
              width: {
                type: 'number',
                minimum: 0,
                description: 'Width in cm'
              },
              height: {
                type: 'number',
                minimum: 0,
                description: 'Height in cm'
              }
            }
          },
          color: {
            type: 'string',
            description: 'Product color'
          }
        }
      },
      availability: {
        type: 'string',
        enum: ['in_stock', 'out_of_stock', 'pre_order', 'discontinued'],
        description: 'Product availability status'
      }
    },
    required: ['productName', 'sku', 'price', 'category'],
    dependencies: {
      inStock: {
        oneOf: [
          {
            properties: {
              inStock: { enum: [true] },
              stockQuantity: { type: 'integer', minimum: 1 }
            },
            required: ['stockQuantity']
          },
          {
            properties: {
              inStock: { enum: [false] },
              availability: { enum: ['out_of_stock', 'pre_order', 'discontinued'] }
            },
            required: ['availability']
          }
        ]
      }
    }
  },
  uischema: {
    type: 'VerticalLayout',
    elements: [
      {
        type: 'Group',
        label: 'Basic Information',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/productName'
          },
          {
            type: 'Control',
            scope: '#/properties/sku'
          },
          {
            type: 'Control',
            scope: '#/properties/category'
          },
          {
            type: 'HorizontalLayout',
            elements: [
              {
                type: 'Control',
                scope: '#/properties/price',
                options: {
                  prefix: '$'
                }
              },
              {
                type: 'Control',
                scope: '#/properties/discount',
                options: {
                  suffix: '%'
                }
              }
            ]
          },
          {
            type: 'Control',
            scope: '#/properties/releaseDate'
          },
          {
            type: 'Control',
            scope: '#/properties/description',
            options: {
              multi: true
            }
          }
        ]
      },
      {
        type: 'Group',
        label: 'Inventory Information',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/inStock'
          },
          {
            type: 'Control',
            scope: '#/properties/stockQuantity',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/inStock',
                schema: { const: true }
              }
            }
          },
          {
            type: 'Control',
            scope: '#/properties/availability',
            rule: {
              effect: 'SHOW',
              condition: {
                scope: '#/properties/inStock',
                schema: { const: false }
              }
            }
          }
        ]
      },
      {
        type: 'Group',
        label: 'Physical Specifications',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/specifications/properties/weight',
            options: {
              suffix: 'kg'
            }
          },
          {
            type: 'Control',
            scope: '#/properties/specifications/properties/color'
          },
          {
            type: 'Group',
            label: 'Dimensions',
            elements: [
              {
                type: 'HorizontalLayout',
                elements: [
                  {
                    type: 'Control',
                    scope: '#/properties/specifications/properties/dimensions/properties/length',
                    options: {
                      suffix: 'cm'
                    }
                  },
                  {
                    type: 'Control',
                    scope: '#/properties/specifications/properties/dimensions/properties/width',
                    options: {
                      suffix: 'cm'
                    }
                  },
                  {
                    type: 'Control',
                    scope: '#/properties/specifications/properties/dimensions/properties/height',
                    options: {
                      suffix: 'cm'
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
