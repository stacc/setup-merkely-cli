# `setup-merkely-cli`

> Sets up the Merkely CLI for GitHub Actions runners

## About

This action sets up the Merkely CLI, [`merkely`](https://github.com/merkely-development/cli), on GitHub's hosted Actions runners.

This action can be run on `ubuntu-latest`, `windows-latest`, and `macos-latest` GitHub Actions runners, and will install and expose a specified version of the `merkely` CLI on the runner environment.

## Usage

Setup the `merkely` CLI:

```yaml
steps:
- uses: stacc/setup-merkely-cli
```

A specific version of the `merkely` CLI can be installed:

```yaml
steps:
- uses: stacc/setup-merkely-cli
  with:
    version:
      0.6.0
```

## Inputs

The actions supports the following inputs:

- `version`: The version of `merkely` to install, defaulting to `1.5.1`

## License

[MIT](LICENSE).
