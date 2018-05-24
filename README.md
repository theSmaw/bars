## Getting started

```
npm install -g yarn
yarn install
```

## Build

```
yarn build
```

## Technology choices

### Lerna

Allows management of separate releasable packages within the same repository. Provides linkage across packages, and
allows independent versioning.

### Conventional commits

Used in conjunctions with Lerna to allow semantic versions of packages to be derived from commit messages.

### Webpack

Allows simple(ish) bundling of JavaScript and static assets. Allows easily managed-by-environment optimisation through
tree-shaking and minification, source-maps, and automatic compilation on changes.

### Yarn

A faster (better caching and optimisation) alternative to npm for dependency package management.

### Yarn workspaces

Allows for easy and optimised installation of dependencies across

## Caveats

- Development environment has only been tested on OSX.