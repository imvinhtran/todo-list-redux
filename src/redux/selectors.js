import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList

export const filtersStatusSelector = (state) => state.filters.status

export const searchTextSelector = (state) => state.filters.search;

export const todoRemainingSelector = createSelector(
    todoListSelector,
    filtersStatusSelector,
    searchTextSelector,
    (todoList, status, searchText) => {
        return todoList.filter((todo) => {
            if (status === 'All') {
                return todo.name.includes(searchText)
            }
            return (
             todo.name.includes(searchText) &&
            (status === 'Completed' ? todo.completed : !todo.completed)
            )
            
        })
    }
)
