import { createStore } from 'redux';
import rootReduces from '../../src/reducers';
import { addTodo, toggleTodo } from '../../src/actions';

describe('Redux store integration tests', () => {
    let store;

    beforeEach(() => {
        store = createStore(rootReduces);
    });

    it('should add 1 Todo', () => {
        store.dispatch(addTodo('buy milk'));
        const todo = store.getState().todos.find((x) => x.text == 'buy milk');
        expect(todo.text).toEqual('buy milk');
        expect(todo.completed).toEqual(false);
    });

    it('should toggle 1 Todo', () => {
        store.dispatch(addTodo('go shopping'));
        store.dispatch(toggleTodo(1));
        const todo = store
            .getState()
            .todos.find((x) => x.text == 'go shopping');
        expect(todo.completed).toEqual(true);
    });
});
