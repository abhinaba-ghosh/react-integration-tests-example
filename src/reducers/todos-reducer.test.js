import todos from './todos';

describe('Todos reducer unit tests', () => {
    it('should return an empty array when initial state and action is undefined', () => {
        expect(todos(undefined, {})).toEqual([]);
    });

    it('should update initial state by adding 1 Todo item in the list', () => {
        const action = {
            type: 'ADD_TODO',
            id: 1,
            text: 'buy milk',
        };

        expect(todos([], action)).toEqual([
            {
                completed: false,
                id: 1,
                text: 'buy milk',
            },
        ]);
    });

    it('should update initial state by adding the second Todo item in the list', () => {
        const initialState = [
            {
                id: 1,
                text: 'buy milk',
                completed: false,
            },
        ];

        const addTodoAction = {
            type: 'ADD_TODO',
            id: 2,
            text: 'go shopping',
        };

        expect(todos(initialState, addTodoAction)).toEqual([
            {
                completed: false,
                id: 1,
                text: 'buy milk',
            },
            {
                completed: false,
                id: 2,
                text: 'go shopping',
            },
        ]);
    });
});
