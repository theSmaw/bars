## Getting started

```
npm install -g yarn
yarn install
```

## Build

```
yarn build
```

## Running integration tests

Only available within /web currently.

```
./node_modules/.bin/cypress open
```

## Technology choices

### Lerna

Allows management of separate releasable packages within the same repository. Provides linkage across packages, and
allows independent versioning. Means I can make changes to central dependencies and run CI against all consumers of that
dependency at once.

### Conventional commits

Used in conjunctions with Lerna to allow semantic versions of packages to be derived from commit messages. Allow
generation of useful changelogs.

### React

A fantastic solution for UI development. Declarative rendering greatly lower complexity than imperative approach.
Encourages sensible componentisation and UI reuse.

### Styled components

Although I much prefer the separation of concerns of CSS in .css files, in programming I prefer consistency above all
other things. Styled Components allows the same solution for styling to be used within both the web and mobile projects.

### Stylelint

To avoid errors and ensure consistency within CSS code.

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
- Mobile app only tested on iOS.

## TODO

- A fair bit of configuration (e.g. jest.config) is duplicated across packages. This could be moved into shared
configuration, or better we can look at creating a /scripts package for common tooling scripts (e.g. yarn run
scripts/test)
- Store feature test reports in /reports
