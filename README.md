# React Integration Test Example

A comparison between [Cypress](https://www.cypress.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for implementing integration tests for React.

## Integration tests

The integration tests has been added for the complete workflow opf the TODO app where composite components interacts with beach other.

![integration-flow]](./flow.png)

Same integration test is implemented using both - Cypress has React-Testing-Library. While both the libraries are effective, i feel cypress has a little edge over RTL because of below aspects -

-   Cypress simulates the test ina real browser, so developers can visualize the real-time interactions better.
-   Cypress provides fluent chained queries to make the page action easy.
-   Cypress retries each assertions and interactions out of the box
-   [Cypress-React-Selector](https://github.com/abhinaba-ghosh/cypress-react-selector) plugin makes the job easy to fetch elements using native react properties - component, props and states.
-   Cypress provides real-time react dev-tools support to observe react properties.

## Commands

-   The RTL integration tests can be found [here](./src/test/rtl)
-   The Cypress integration test can be found [here](./src/test/cypress)

```ssh
// run RTL test
npm run test-rtl

// run cypress test
npm run test-cy
```
