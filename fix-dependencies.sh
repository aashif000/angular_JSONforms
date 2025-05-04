#!/bin/bash

# This script fixes Angular dependency issues for the JSONForms project

echo "🔧 Fixing Angular dependencies..."

# Install the correct compiler version
npm install @angular/compiler-cli@14.2.0 --legacy-peer-deps
npm install @angular/compiler@14.2.0 --legacy-peer-deps

echo "✅ Dependencies fixed successfully!"
echo "📝 Now you can run: ng serve"