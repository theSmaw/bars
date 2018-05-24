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
allows independent versioning. Means I can make changes to central dependencies and run CI against all consumers of that
dependency at once.

### Conventional commits

Used in conjunctions with Lerna to allow semantic versions of packages to be derived from commit messages. Allow
generation of useful changelogs.

### Styled components

Although I much prefer the separation of concerns of CSS in .css files, in programming I prefer consistency above all
other things. Styled Components allows the same solution for styling to be used within both the web and mobile projects.

### Webpack

Allows simple(ish) bundling of JavaScript and static assets. Allows easily managed-by-environment optimisation through
tree-shaking and minification, source-maps, and automatic compilation on changes. Also allows app to be built
offline-first as a Progressive Web App, using Service Workers.

### Yarn

A faster (better caching and optimisation) alternative to npm for dependency package management.

### Yarn workspaces

Allows for easy and optimised installation of dependencies across

## Caveats

- Development environment has only been tested on OSX.