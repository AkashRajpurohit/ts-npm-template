<h1 align="center" style="border-bottom: none;">🫡 @akashrajpurohit/ts-npm-template</h1>
<h3 align="center">A project template to bootstrap NPM package with Typescript</h3>
<br />
<p align="center">
  <a href="https://github.com/AkashRajpurohit/ts-npm-template/actions/workflows/test-and-release.yml">
    <img alt="Build states" src="https://github.com/AkashRajpurohit/ts-npm-template/actions/workflows/test-and-release.yml/badge.svg?branch=main">
  </a>
  <a href="https://www.npmjs.com/package/@akashrajpurohit/ts-npm-template">
    <img alt="npm latest version" src="https://img.shields.io/npm/v/@akashrajpurohit/ts-npm-template/latest.svg">
  </a>
  <a href="https://www.npmjs.com/package/@akashrajpurohit/ts-npm-template">
    <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/@akashrajpurohit/ts-npm-template">
  </a>
  <img alt="Visitors count" src="https://visitor-badge.laobi.icu/badge?page_id=@akashrajpurohit~ts-npm-template.visitor-badge&style=flat-square&color=0088cc">
  <a href="https://github.com/AkashRajpurohit/ts-npm-template/actions">
    <img alt="Coverage" src="https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/AkashRajpurohit/275fdb9d0c3b23cafa916535c807ce6a/raw/ts-npm-template-coverage.json">
  </a>
  <a href="https://www.npmjs.com/package/@akashrajpurohit/ts-npm-template">
    <img alt="NPM license" src="https://img.shields.io/npm/l/@akashrajpurohit/ts-npm-template">
  </a>
  <a href="https://twitter.com/akashwhocodes">
    <img alt="follow on twitter" src="https://img.shields.io/twitter/follow/akashwhocodes.svg?style=social&label=@akashwhocodes">
  </a>

  <p align="center">
    <a href="https://github.com/AkashRajpurohit/ts-npm-template/issues/new?template=bug_report.md">Bug report</a>
    ·
    <a href="https://github.com/AkashRajpurohit/ts-npm-template/issues/new?template=feature_request.md">Feature request</a>
  </p>
</p>
<br />
<hr />

`@akashrajpurohit/ts-npm-template` is a opinionated bootstrap template to create NPM packages.

## Usage 💻

Click on the **"Use this template"** button from the options to create a new repository using this template.

That is pretty much it, follow the steps for creating a new repository and its done 🎉

> Refer to [Sample README](./README.sample.md) file to setup docs and instructions for your package.

## Configurations ⚙️

### Release to NPM

Few configurations are required for making the publishing and releasing to NPM automated.

First thing is to generate a NPM token. Automation tokens are recommended since they can be used for an automated workflow, even when your account is configured to use the [auth-and-writes level of 2FA](https://docs.npmjs.com/about-two-factor-authentication#authorization-and-writes).

Save this token as `NPM_TOKEN`.

### Code coverage badge

If you want to generate a code coverage badge for your package, you need to follow the steps and configure the gist mentioned by [dynamic-badges-action](https://github.com/Schneegans/dynamic-badges-action).

Once you have followed the steps above and created a gist, uncomment these lines in the [workflow file](./.github/workflows/test-and-release.yml)

```
- name: Get Coverage for badge 🔢
  run: |
    COVERAGE="$(cat coverage/coverage-summary.json | jq -r '.total.lines.pct')"
    echo "COVERAGE=$(echo ${COVERAGE})" >> $GITHUB_ENV

- name: Create coverage badge ✍🏽
  uses: schneegans/dynamic-badges-action@v1.6.0
  with:
    auth: ${{ secrets.GIST_SECRET }}
    gistID: 275fdb9d0c3b23cafa916535c807ce6a
    filename: ts-npm-template-coverage.json
    label: Code Coverage
    message: ${{ env.COVERAGE }}
    color: green
    namedLogo: vitest
```

## Technology Stack 🚀

- 🙏🏾 [Typescript](https://www.typescriptlang.org/) with [tsup](https://tsup.egoist.dev/) build tool.
- ⚡️ [Vitest](https://vitest.dev/) - Unit Test Framework
- 📦 [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) - Fully automated version management and package publishing.
- 🔀 [Github Actions](https://github.com/features/actions) - CI pipelines
- 💪 [PNPM](https://pnpm.io/) - Package manager

## Bugs or Requests 🐛

If you encounter any problems feel free to open an [issue](https://github.com/AkashRajpurohit/ts-npm-template/issues/new?template=bug_report.md). If you feel the project is missing a feature, please raise a [ticket](https://github.com/AkashRajpurohit/ts-npm-template/issues/new?template=feature_request.md) on GitHub and I'll look into it. Pull requests are also welcome.

## Where to find me? 👀

[![Website Badge](https://img.shields.io/badge/-akashrajpurohit.com-3b5998?logo=google-chrome&logoColor=white)](https://akashrajpurohit.com/)
[![Twitter Badge](https://img.shields.io/badge/-@akashwhocodes-00acee?logo=Twitter&logoColor=white)](https://twitter.com/AkashWhoCodes)
[![Linkedin Badge](https://img.shields.io/badge/-@AkashRajpurohit-0e76a8?logo=Linkedin&logoColor=white)](https://linkedin.com/in/AkashRajpurohit)
[![Instagram Badge](https://img.shields.io/badge/-@akashwho.codes-e4405f?logo=Instagram&logoColor=white)](https://instagram.com/akashwho.codes/)
[![Telegram Badge](https://img.shields.io/badge/-@AkashRajpurohit-0088cc?logo=Telegram&logoColor=white)](https://t.me/AkashRajpurohit)
