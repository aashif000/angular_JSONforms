#!/bin/bash

# This script builds and deploys the Angular app to GitHub Pages

echo "🏗️ Building Angular application for GitHub Pages..."

# Set your GitHub username and repository name
read -p "Enter your GitHub username: " username
read -p "Enter your repository name: " repo_name

# Build with the correct base URL
echo "📦 Building with base-href: https://$username.github.io/$repo_name/"
ng build --base-href="https://$username.github.io/$repo_name/"

# Install angular-cli-ghpages if not installed
if ! command -v ngh &> /dev/null
then
    echo "📥 Installing angular-cli-ghpages..."
    npm install -g angular-cli-ghpages --legacy-peer-deps
fi

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
npx ngh --dir=dist/angular-json-form

echo "✅ Deployment complete!"
echo "🌐 Your app should be available at: https://$username.github.io/$repo_name/"