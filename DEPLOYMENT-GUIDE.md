# Angular JSONForms Deployment Guide

This guide will help you deploy your Angular JSONForms application and resolve common issues.

## Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- Git

## Setup and Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies
   ```bash
   npm install --legacy-peer-deps
   ```

3. Fix Angular compiler version issues
   ```bash
   npm install @angular/compiler-cli@14.2.0 --legacy-peer-deps
   npm install @angular/compiler@14.2.0 --legacy-peer-deps
   ```

   Alternatively, you can run the provided script:
   ```bash
   # Make the script executable
   chmod +x fix-dependencies.sh
   # Run the script
   ./fix-dependencies.sh
   ```

4. Verify the application runs locally
   ```bash
   ng serve
   ```
   Then open your browser at http://localhost:4200

## Deployment to GitHub Pages

1. Build the application for production
   ```bash
   ng build --base-href="https://aashif000.github.io/angular_JSONforms/"
   ```

2. Install gh-pages package (if not already installed)
   ```bash
   npm install -g angular-cli-ghpages --legacy-peer-deps
   ```

3. Deploy to GitHub Pages
   ```bash
   npx ngh --dir=dist/angular-json-forms
   ```

   Alternatively, use the provided script:
   ```bash
   # Make the script executable
   chmod +x deploy-github-pages.sh
   # Run the script
   ./deploy-github-pages.sh
   ```

4. Your application should now be accessible at:
   `https://your-username.github.io/your-repo/`

## Troubleshooting Common Issues

### Dependency Conflicts

If you encounter dependency conflicts, try these solutions:

1. Use `--legacy-peer-deps` flag when installing packages:
   ```bash
   npm install package-name --legacy-peer-deps
   ```

2. Fix specific version mismatches:
   ```bash
   npm install @angular/compiler-cli@14.2.0 @angular/compiler@14.2.0 --legacy-peer-deps
   ```

### GitHub Pages 404 Errors

If you get 404 errors after deploying to GitHub Pages:

1. Ensure your base-href is set correctly during build:
   ```bash
   ng build --base-href="https://your-username.github.io/your-repo/"
   ```

2. Check if GitHub Pages is enabled in your repository settings

3. Make sure the build artifacts are in the correct branch (usually `gh-pages`)

### Git Large File Issues

If you see warnings about large files:

1. Add `node_modules/` to your `.gitignore` file (already done)

2. Consider using Git LFS for large files:
   ```bash
   # Install Git LFS
   git lfs install
   # Track large files
   git lfs track "*.pack"
   ```

## Resources

- [Angular Documentation](https://angular.io/docs)
- [JSONForms Documentation](https://jsonforms.io/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Git LFS Documentation](https://git-lfs.github.com/)












Warning: PowerShell detected that you might be using a screen reader and has disabled PSReadLine for compatibility purposes. If you want to re-enable it, run 'Import-Module PSReadLine'.

(base) PS C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm> npm install @angular/compiler-cli@14.2.0 --legacy-peer-deps

removed 1 package, and audited 857 packages in 24s

129 packages are looking for funding
  run `npm fund` for details

5 vulnerabilities (3 moderate, 2 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
(base) PS C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm> npm install @angular/compiler@14.2.0 --legacy-peer-deps  

up to date, audited 857 packages in 5s

129 packages are looking for funding
  run `npm fund` for details

5 vulnerabilities (3 moderate, 2 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
(base) PS C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm> # Then try serving again
(base) PS C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm> ng serve
Warning: This is a simple server for use in testing or debugging Angular applications
locally. It hasn't been reviewed for security issues.

Binding this server to an open connection can result in compromising your application or
computer. Using a different host than the one passed to the "--host" flag might result in
websocket connection issues. You might need to use "--disable-host-check" if that's the
case.
    Tailwind CSS configuration file found (tailwind.config.js) but the 'tailwindcss' package is not installed. To enable Tailwind CSS, please install the 'tailwindcss' package.
⠸ Generating browser application bundles (phase: setup)...DeprecationWarning: 'getMutableClone' has been deprecated since v4.0.0. Use an appropriate `factory.update...` method instead, use `setCommentRange` or `setSourceMapRange`, and avoid setting `parent`.
✔ Browser application bundle generation complete.

Initial Chunk Files   | Names         |  Raw Size
vendor.js             | vendor        |   2.22 MB | 
polyfills.js          | polyfills     | 238.74 kB | 
styles.css, styles.js | styles        | 131.31 kB | 
main.js               | main          |  98.60 kB | 
runtime.js            | runtime       |   6.52 kB | 

                      | Initial Total |   2.68 MB

Build at: 2025-05-05T03:47:22.232Z - Hash: f2076f03866341e3 - Time: 13105ms

** Angular Live Development Server is listening on 0.0.0.0:5000, open your browser on http://localhost:5000/ **
                      | Initial Total |   2.68 MB

Build at: 2025-05-05T03:47:22.232Z - Hash: f2076f03866341e3 - Time: 13105ms

                      | Initial Total |   2.68 MB

Build at: 2025-05-05T03:47:22.232Z - Hash: f2076f03866341e3 - Time: 13105ms
                      | Initial Total |   2.68 MB

                      | Initial Total |   2.68 MB
                      | Initial Total |   2.68 MB
                      | Initial Total |   2.68 MB
                      | Initial Total |   2.68 MB
                      | Initial Total |   2.68 MB

Build at: 2025-05-05T03:47:22.232Z - Hash: f2076f03866341e3 - Time: 13105ms

** Angular Live Development Server is listening on 0.0.0.0:5000, open your browser on http://localhost:5000/ **


√ Compiled successfully.
✔ Browser application bundle generation complete.

5 unchanged chunks

Build at: 2025-05-05T03:47:23.630Z - Hash: f2076f03866341e3 - Time: 1175ms

√ Compiled successfully.
(base) PS C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm> npx ngh --dir=dist/angular-jsonforms --no-silent
404.html file created
.nojekyll file created
🚀 Uploading via git, please wait...
Cloning https://github.com/aashif000/angular_JSONforms.git into C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm\node_modules\.cache\gh-pages\https!github.com!aashif000!angular_JSONforms.git
❌ An error occurred when trying to deploy:
Cloning into 'C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm\node_modules\.cache\gh-pages\https!github.com!aashif000!angular_JSONforms.git'...      
error: unable to create file attached_assets/Pasted-Objective-The-goal-of-this-assignment-is-to-evaluate-your-understanding-of-Angular-preferably-Angu-1746380576528.txt: Filename too long
error: unable to create file attached_assets/Pasted-Objective-The-goal-of-this-assignment-is-to-evaluate-your-understanding-of-Angular-preferably-Angu-1746382186408.txt: Filename too long
fatal: cannot create directory at 'node_modules/@angular-devkit/build-angular/node_modules/rxjs/node_modules/tslib/test/validawarning: Clone succeeded, but checkout failed.
You can inspect what was checked out with 'git status'
and retry with 'git restore --source=HEAD :/'


(base) PS C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm>  npx ngh --dir=dist/angular_JSONforms
index.html could not be copied to 404.html. Proceeding without it.
Diagnostic info: ENOENT: no such file or directory, lstat 'C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm\dist\angular_JSONforms\index.html'
❌ An error occurred when trying to deploy:
.nojekyll file could not be created. ENOENT: no such file or directory, open 'C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm\dist\angular_JSONforms\.nojekyll'
(base) PS C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm> npx ngh --dir=dist/angular-json-form
index.html could not be copied to 404.html. Proceeding without it.
Diagnostic info: ENOENT: no such file or directory, lstat 'C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm\dist\angular-json-form\index.html'
❌ An error occurred when trying to deploy:
.nojekyll file could not be created. ENOENT: no such file or directory, open 'C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm\dist\angular-json-form\.nojekyll'
(base) PS C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm>  npx ngh --dir=dist/angular-json-forms
index.html could not be copied to 404.html. Proceeding without it.
Diagnostic info: ENOENT: no such file or directory, lstat 'C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm\dist\angular-json-forms\index.html'
❌ An error occurred when trying to deploy:
.nojekyll file could not be created. ENOENT: no such file or directory, open 'C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm\dist\angular-json-forms\.nojekyll'
(base) PS C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm> # Enable long paths in Git (Windows)
(base) PS C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm> git config --global core.longpaths true
(base) PS C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm>
(base) PS C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm> # Remove problematic long filenames (run from project root)
(base) PS C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm> rm attached_assets/Pasted-Objective-The-goal-of-this-assignment-is-to-evaluate-your-understanding-of-Angular-preferably-A
rm : Cannot find path 'C:\Users\HP\Downloads\AngularJsonForm (
1)\AngularJsonForm\attached_assets\Pasted-Objective-The-goal-o 
f-this-assignment-is-to-evaluate-your-understanding-of-Angular 
f-this-assignment-is-to-evaluate-your-understanding-of-Angular

-preferably-A' because it does not exist.
At line:1 char:1
+ rm attached_assets/Pasted-Objective-The-goal-of-thisctictive-The-goal-of-this-assignm
ent-is-to ...
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (C:\Users\HP\Do
   w...ar-preferably-A:String) [Remove-Item], ItemNotFoundEx
  ception
    + FullyQualifiedErrorId : PathNotFound,Microsoft.PowerShe
   ll.Commands.RemoveItemCommand

(base) PS C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm> # Build with correct output path             
(base) PS C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm> ng build --configuration production --base-href="https://aashif000.github.io/angular_JSONforms/"      
    Tailwind CSS configuration file found (tailwind.config.js) but the 'tailwindcss' package is not installed. To enable Tailwind CSS, please install the 'tailwindcss' package.
⠹ Generating browser application bundles (phase: setup)...DeprecationWarning: 'getMutableClone' has been deprecated since v4.0.0. Use an appropriate `factory.update...` method instead, use `setCommentRange` or `setSourceMapRange✔ Browser application bundle generation complete.        
✔ Copying assets complete.
✔ Index html generation complete.

Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.aa797ef473c6d46f.js      | main          | 249.73 kB |                61.97 kB
polyfills.9d8611f44cbd1413.js | polyfills     |  36.18 kB |                11.52 kB
runtime.e4d9853e8200cfe6.js   | runtime       |   1.07 kB |               603 bytes
styles.e556668d2c9b9bd1.css   | styles        | 480 bytes |               233 bytes

                              | Initial Total | 287.45 kB |                74.30 kB

Build at: 2025-05-05T04:11:43.064Z - Hash: 3ebfc3d06ae542a4 - Time: 8779ms
(base) PS C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm> npx ngh --dir=dist/angular_JSONforms --no-silent 
index.html could not be copied to 404.html. Proceeding without it.
Diagnostic info: ENOENT: no such file or directory, lstat 'C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm\dist\angular_JSONforms\index.html'
❌ An error occurred when trying to deploy:
.nojekyll file could not be created. ENOENT: no such file or directory, open 'C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm\dist\angular_JSONforms\.nojekyll'  
(base) PS C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm> npx ngh --dir=dist/angular-jsonforms --no-silent 
404.html file created
.nojekyll file created
🚀 Uploading via git, please wait...
Cloning https://github.com/aashif000/angular_JSONforms.git into C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm\node_modules\.cache\gh-pages\https!github.com!aashif000!angular_JSONforms.git
Cleaning
Fetching origin
Checking out origin/gh-pages 
Removing files
Copying files
Adding all
Committing
Pushing
🌟 Successfully published via angular-cli-ghpages! Have a nice day!
(base) PS C:\Users\HP\Downloads\AngularJsonForm (1)\AngularJsonForm>