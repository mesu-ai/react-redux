import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../services/action/Action';

const Todos = () => {
    const { todos, isLoading, error } = useSelector(state => state.todosR);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos())

    }, [dispatch])

    return (
        <div>
            
            {isLoading ?
                <p>Loading...</p> :

                <div>
                    {todos.map((todo,index) =>
                        <li key={index}>{todo.title}</li>

                    )}
                </div>

            }

        </div>
    );
};

export default Todos;