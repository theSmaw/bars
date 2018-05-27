For the simple use-case, the code and tooling are vastly over-engineered. The codebase is intended to demonstrate an
architecture, tooling and pipeline that are readily scalable in terms of both application complexity, and number of
developers.

Applications are created for web (React) and mobile (React Native), with as much code as possible shared between
applications.

For web, I've followed trunk based development, with unit and feature tests allowing continuous deployment - commits
pushed to master are auto-deployed to Heroku -
[https://pedro-the-sealion.herokuapp.com/](https://pedro-the-sealion.herokuapp.com)

For mobile, I've not yet taken delivery beyond the iOS simulator on my MacBook. I've also limited scope for this
iteration to just showing the bar values - no ability for the user to change the bar values yet.

## Caveats

- Web only tested on latest Chrome - likely need to implement polyfills (Promise, etc) elsewhere
- Development environment has only been tested on OSX.
- Mobile app only tested on iOS.

## TODO

- A fair bit of configuration (e.g. jest.config) is duplicated across packages. This could be moved into shared
configuration, or better I can look at creating a /scripts package for common tooling scripts (e.g. yarn run
scripts/test)
- Store feature test reports in /reports
- Continuous Deployment for web is pretty rudimentary and the entire repo is copied to Heroku. Rather, I could create a
 Docker image containing only our deployable web application and move this over
- Feature tests for mobile
- Continuous Delivery for mobile
- Dependency hoisting. React Native and Jest don't currently play well together if dependencies are hoisted :-(
https://github.com/facebook/react-native/issues/17469
- Memoization of selectors using a library such as reselect will improve performance
- Error handling - currently I don't handle anything going wrong with the network requests
- Show a spinner when the data is loading from the network
- Fix mobile to be landscape only
- Server-side rendering
- Style `<select>` and `<button>` on Web
- Add ability to change bar values to mobile
- Rethink some of the variable and property names - I don't like that I have a `bars.bars` in the code
- Refactor some of the repetition out of the feature tests

## Workflow

For each unit of functionality:

Unit-test -> Code -> Feature test -> Refactor -> Commit & push

## Pipeline

Git -> CircleCI -> Heroku

Build: https://circleci.com/gh/theSmaw/bars/tree/master

## Getting started

```
npm install -g yarn
yarn install
```

## Run

### Web

```
cd packages/web
yarn start
```

### Mobile

Install XCode :(

```
yarn global add react-native react-native-cli
react-native run-ios
```

## Build

```
yarn build
```

## Test and lint

```
yarn validate
```

## Running integration tests interactively

Only available within /web currently.

```
cd packages/web
yarn start
```

```
./node_modules/.bin/cypress open
```

## Architecture

### Components

Web and Mobile contain largely dumb views, which are described by React components. These components have no knowledge
of the application around them - they receive data and callbacks through props. Ideally they are dumb enough to not
contain any logic that needs to be tested.

### Containers

Smarter React components. These are responsible for gluing views to the application. They connect to Redux to be
able to broadcast events to the application, and access data from the application store. Provide data and callbacks to
components through props.

### Redux

Actions, reducers and selectors. Reach out to the API, dispatch events,  manipulate state based on events, and provide
windows on state to containers. This is where business-logic takes place - pure functions to manipulate state based on
input make this logic easy to test.

### API

Architecture agnostic network calls.

## Technology choices

### Lerna

Allows management of separate releasable packages within the same repository. Provides linkage across packages, and
allows independent versioning. Means I can make changes to central dependencies and run CI against all consumers of that
dependency at once.

### CircleCI

Easy to configure CI with an interface that doesn't look like Jenkins :D

### Conventional commits

Used in conjunctions with Lerna to allow semantic versions of packages to be derived from commit messages. Allow
generation of useful changelogs.

### Cypress.io

UI testing that uses Chromium rather than Selenium so much less flaky!

### Eslint

For consistent JavaScript coding style. Also a nice first warning on syntactic errors.

### Jest

De-facto unit-testing library for React and React Native codebases.

### Heroku

Simple and free place to spin up a server. Easy to deploy to.

### React

A fantastic solution for UI development. Declarative rendering means greatly lower complexity than imperative approach.
Encourages sensible componentisation and UI reuse.

### Redux

Unnecessary for a project of this size - network calls and state management could easily have been kept within a React
component. However, scales very well as the complexity of a project grows - separating concerns vertically and
horizontally, and managing state globally and predictably.

### Redux Thunk

To allow asynchronous dispatch of actions.

### Styled components

Although I much prefer the separation of concerns of CSS in .css files, in programming I prefer consistency above all
other things. Styled Components allows the same solution for styling to be used within both the web and mobile projects.
Having trialled this on this project, I remain concerned that logic can be pushed into styling where it is much harder
to test.

### Stylelint

To avoid errors and ensure consistency within CSS code.

### Webpack

Allows simple(ish) bundling of JavaScript and static assets. Allows easily managed-by-environment optimisation through
tree-shaking and minification, source-maps, and automatic compilation on changes.

### Yarn

A faster (better caching and optimisation) alternative to npm for dependency package management.

### Yarn workspaces

Allows for easy and optimised installation of dependencies across
