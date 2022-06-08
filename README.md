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

## Environment variables

- MERKELY_API_TOKEN: set the Merkely API token.
- MERKELY_OWNER: set the Merkely Pipeline Owner.
- MERKELY_HOST: set the Merkely host.
- MERKELY_DRY_RUN: indicate whether or not Merkely CLI is running in Dry Run mode.
- MERKELY_MAX_API_RETRIES: set the maximum number of API calling retries when the API host is not reachable.
- MERKELY_CONFIG_FILE: set the path to Merkely config file where you can set your options.

## Example job

```yaml
jobs:
  login:
    runs-on: ubuntu-latest
    env:
      MERKELY_API_TOKEN: ${{ secrets.MY_MERKELY_API_TOKEN }}
      MERKELY_OWNER: my-org
    steps:
      - name: Setup merkely
        uses: stacc/setup-merkely-cli@v1
      - name: declare pipeline
        run: |
          merkely pipeline declare --pipeline my-pipeline -t pull-request,artifact,test
```

## License

[MIT](LICENSE).
