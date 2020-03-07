# Project Base

> Create a TypeScript project in seconds

## Installation:

```bash
$ cd <project-name>
$ git clone https://github.com/CitRUSprod/project-base.git . && rm -rf .git README.md && git init && yarn && yarn sync-project-name
```

## Usage

### Development build

```bash
$ yarn dev
$ yarn dev:watch
$ yarn dev:watch:nodemon
```

### Production build

```bash
$ yarn build
```

### Launch app (only after build)

```bash
$ yarn start # OR node .
```

### Create documentation

```bash
$ yarn docs
```

### Create new packages

```bash
$ yarn create-package <package-name> [<package-name> ...]
```

### Update project base

```bash
$ yarn update-project-base
```

### Sync project name with folder name (when changing the folder name)

```bash
$ yarn sync-project-name
```

### Testing

```bash
$ yarn test
```

### Create release

```bash
$ yarn release
```
