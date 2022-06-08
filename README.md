<h1 align="center">Stress-free Testing with Vue 3, Cypress, and Vite</h1>

<p align="center">A pre-conference workshop for VueConf US 2022</p>

**🔗 Quick Links:** [Official Cypress Docs][cypress ct docs], [Vue Test Utils API for Vue 3][vtu docs], [Lachlan Miller's Vue Testing Handbook][lachlans handbook], [Interacting with Elements using Cy Commands][cypress events], [Cypress API][cypress api], [Chai Matchers][cypress chai matchers]

## Get Ready for the Day

Good morning! Either before or at the beginning of the workshop, make sure to set up your environment:

1. If you don't already have it... install Node >= 14.17.0 with [nvm][nvm install] and install [yarn][yarn install].
2. Clone either the [Stress Free Testing][javascript repo].
    ```sh
    gh repo clone JessicaSachs/stress-free-testing # Github CLI
    ```
3. Or the [Stress Free Testing TypeScript Repo][typescript repo]
    ```sh
    gh repo clone JessicaSachs/stress-free-testing-ts
    ```

3. Run `yarn install`.
4. Download the recommended Desktop Apps ([Miro][miro app downloads] + [Figma][figma app downloads]).
5. Install the recommended VSCode Extensions. You should see a small prompt pop up in the bottom-right corner of VSCode once you open the repository.
6. Sign up for Miro and open the board.
7. Open the Figma File and look through the mocks.

## Branches

The accompanying repository for the "Stress-free Testing with Vue 3 and Vite" workshop is located at [Stress Free Testing][javascript repo]. All parts of this workshop will be completed in this repo. If you get lost or need to reset your workspace to a known good state, you may refer to the map of branches below.

|              Section | Branch                  | Description                                                                 |
| -------------------: | :---------------------- | :-------------------------------------------------------------------------- |
|      🔰 The Beginning | `1-the-beginning`       | The "Hello World" Scaffold, great starting point for a template.            |
|      🐤  Simple Mount | `2-simple-mount`        | Working with Vue Test Utils' Syntax and JSX Syntax.                         |
| 🛠  Setup Environment | `3-setup-environment`   | How to keep your tests production-like.                                     |
|   💅 The Product Card | `4-the-product-card`    | Testing your first presentational component.                                |
| 🕵 Powerful Mock Data | `5-powerful-mock-data`  | Use [faker][faker docs] to generate realistic data and stress-test your UI. |
|     🔈 Emitted Events | `6-emitted-events`      | Assert custom and native events were invoked using `cy.spy()`.              |
|           🎰    Slots | `7-slots`               | Testing slots easily with JSX.                                              |
|    🎰 🎰  Scoped Slots | `8-scoped-slots`        | Testing scoped slots not-as-easily with JSX.                                |
|            🔗  Router | `9-router`              | Navigate throughout your application using [Vue Router v4][vue router v4].  |
| 📦 Stores and Plugins | `10-stores-and-plugins` | Learn how to test a [Pinia][pinia] store.                                   |

## App Downloads

- 📋 Miro is where the majority of the workshop will be held ([Desktop App Preferred][miro app downloads], [Workshop Board](https://miro.com/app/board/o9J_lhsag48=/?invite_link_id=974389854516)).
- 👩‍🎨 Figma contains the mocks for our App ([Desktop App][figma_downloads], [Mockups](https://www.figma.com/file/fvZhzUaVkQl3YoSquYlpL3/%F0%9F%9B%92-Ecommerce-Shopping-Template-(Community)?node-id=1%3A2559)).

## Tooling

### Ecosystem

- Vue 3 with the new [`<script setup>`][script setup] syntax.
- Vite for lightning-fast development.
- Component Testing with Cypress Component Testing.
- End-to-end Testing with Cypress E2E Testing.
- Headless UI for quick and easy dropdowns, tabs, and more.

### Styling

- <img src="https://next.windicss.org/assets/logo.svg" alt="Windi CSS Logo" height="16" width="16"/> [WindiCSS][windi css], a Tailwind-compatible Utility CSS Framework for use **within tests**.
- Iconify Icons to beautify the UI.

### VSCode Extensions

Please use VSCode with Recommended Extensions for the best Developer Experience. Other editors should work fine, however support for all language features used in this workshop has not been tested.

- Volar for Vue Syntax Highlighting.
- Chris Breiding's Test Utils for toggling `it.only` and `describe.only`
- Antfu's Iconify Visualizer to preview icons in your templates and script tags.
- ESLint with Prettier for formatting.

[cypress ct docs]: https://on.cypress.io/component
[windi css]: https://windicss.org
[miro app downloads]: https://miro.com/apps/
[figma app downloads]: https://www.figma.com/downloads/
[javascript repo]: https://github.com/JessicaSachs/stress-free-testing
[typescript repo]: https://github.com/JessicaSachs/stress-free-testing-ts
[nvm install]: https://github.com/nvm-sh/nvm#installing-and-updating
[yarn install]: https://yarnpkg.com
[cypress chai matchers]: https://docs.cypress.io/guides/references/assertions#Chai
[cypress events]: https://docs.cypress.io/guides/core-concepts/interacting-with-elements#Actionability
[lachlans handbook]: https://lmiller1990.github.io/vue-testing-handbook/
[pinia]: https://pinia.esm.dev/
[vue router v4]: https://next.router.vuejs.org/
[faker docs]: https://fakerjs.dev/
[cypress api]: https://docs.cypress.io/api/table-of-contents
[vtu docs]: https://next.vue-test-utils.vuejs.org/api
[script setup]: https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup