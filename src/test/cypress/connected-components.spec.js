import { mount } from '@cypress/react';
import 'cypress-react-selector';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../../components/App';
import rootReducer from '../../reducers';

const store = createStore(rootReducer);

// Cypress has react selector plugin that can be used to fetch element using native react properties - component, props and states
// get more details here - https://github.com/abhinaba-ghosh/cypress-react-selector
describe('connected component integration tests using cypress-react-selector', () => {
    it('should add todo item using fireEvent', () => {
        mount(
            <Provider store={store}>
                <App />
            </Provider>
        );

        cy.waitForReact();

        cy.react('AddTodo').find('input').type('buy milk');
        cy.react('AddTodo').find('button').click();
        cy.getReact('Todo').getProps('text').should('eq', 'buy milk');
    });
});
