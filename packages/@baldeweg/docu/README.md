# @baldeweg/docu

Extract Vue.js component information and generate markdown documentation

## Installation

```bash
# Install using pnpm
pnpm install @baldeweg/docu

# Install using npm
npm install @baldeweg/docu

# Install using yarn
yarn add @baldeweg/docu
```

## Usage

Add the following to the scripts section of `package.json` to generate documentation:

```bash
"generate-docu": "docu"
```

### Options

- `-c, --componentsDir <path>`: Path to the directory containing Vue.js components. Default is `./src/components`.
- `-f, --filename <name>`: Output filename for the generated documentation. Default is `./components.md`.
