# Name

Template for new VueJS projects.

## Requirements

- NodeJS
- Yarn
- degit

## Get Started

First, install degit with `yarn global add degit` and then download the repo `degit https://github.com/abaldeweg/ui/ packages/@baldeweg/template_vue`.

## Env Vars

- VUE_APP_API - URL to the backend
- VUE_APP_BASE_URL - The Base URL, in case the app is installed in a subdirectory

## Architecture

All Code needs to be checked. For that Linter, CI-Tools, Unit-Tests and E2E-Tests should be in place. Security Alerts for dependencies should be active and Best Practices for coding needs to be followed. As framework was chosen VueJS because of the free license and wide spread. The resulting code should also be released under a free license.
