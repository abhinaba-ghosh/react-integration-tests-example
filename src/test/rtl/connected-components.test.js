import 'jsdom-global/register';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';
import rootReducer from '../../reducers';
import { render, fireEvent } from '@testing-library/react';

const store = createStore(rootReducer);

describe('Connected component full app integration tests', () => {
    it('should add todo item using fireEvent', () => {
        const { container, getByTestId, getByText } = render(
            <Provider store={store}>
                <div>
                    <AddTodo />
                    <VisibleTodoList />
                </div>
            </Provider>
        );

        let inputElement = getByTestId('add-todo-input');

        fireEvent.change(inputElement, { target: { value: 'buy milk' } });
        fireEvent.click(getByText('Add Todo'));

        const liElement = container.querySelector('li');
        expect(liElement.textContent).toEqual('buy milk');
    });
});
