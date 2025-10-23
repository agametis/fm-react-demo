# Bidirectional communication between FileMaker and React in WebViewer

![User interface of the demo file](demo_UI.jpg)

## Why this demo

With the package [fm-gofer](https://github.com/jwillinghalpern/fm-gofer) we have a module for communication with FileMaker from within the WebViewer. There is no standardized way to communicate from FileMaker to the WebViewer.

This demo shows bidirectional communication for a React project built with Vite.

## How to use it

Clone the repository:

```bash
git clone https://github.com/agametis/fm-react-demo.git
```

Go into the folder `fm-react-demo` and run `npm install` to install dependencies:

```bash
cd fm-react-demo
npm install
```

> [!NOTE]
> If you are using `yarn`, adjust the script calls in `package.json` accordingly.

Start the development server:

```bash
npm run dev
```

Using the included FileMaker file `fmReactDemo.fmp12`, you can access the running server (dev = 1) or use the built version of the project from the FileMaker field "start::HTML" (dev = 0).

> [!NOTE]
> Username and password for the file: `admin`

## Build for production

Build the project for production use:

```bash
npm run build
```

This creates a single HTML file in the `dist` folder using Vite with the following plugins:
- `@vitejs/plugin-react` - React support
- `vite-plugin-singlefile` - Bundles everything into a single HTML file
- `vite-plugin-minify` - Minifies the output

## Using in FileMaker

### Manually

The result of the build script can be used directly in FileMaker. The content of the resulting HTML file in the `dist` folder can be copied into the field `start::HTML` in FileMaker.

### Automated

For automated deployment, the script `deploy-to-fm` can be used. To make this work, the parameters in the `config.js` file in the `tooling` folder must be properly configured.
