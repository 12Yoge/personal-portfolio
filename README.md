# Personal-portfolio

Personal Portfolio

## Development Setup

- Clone Repository: `git clone HTTPS/SSH Url`
- Move to root directory: `cd personal-portfolio`
- Install dependency: npm install
- Starting Project: npm start
- Open link in browser: http://localhost:3000/

## Folder Structure

    personal-portfolio
    │
    │
    └───assets
    |   └───images (Directory to store all image files)
    |
    └───components (Parent directory for app components)
    │   └───resource folder (Resource folder for each specific component with CSS properties)
    |
    └───constants (Parent directory for constant data)
    │   └───resource folder (Resource folder to store mock-data, data which can be used in            components )
    |
    └───containers (Parent directory for react pages)
    |   └───resource folder (Resource folder for each specific page)
    |
    └───styles (Directory to wrap all style dependencies of the application)
    | └───common.scss (Parent style sheet where application level common styles are mentioned)
    | └───variables.scss (all variables and mixins are mentioned here)
    |
    └───utils (Directory to common resource files)
      └───resource files (to list common functions)

## Testing Link

[Testing Link](https://personal-portfolio-coral-pi.vercel.app/)

## Developer Best Practice

- Maintain proper nameSpacing for folders, files, variable and function declarations.
- Always create feature or bug branches and then merge with stable master branch.
- Provide proper commit messages & split commits meaningfully.
