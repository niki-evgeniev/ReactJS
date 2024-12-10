import { useEffect, useState } from "react";
import TableItem from "./TableItem";

export default function Main() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then(res => res.json())
            .then(result => {
                const data = Object.values(result);
                setTodos(data);
            });
    }, []);

    return (
        <main className="main">
            <section className="todo-list-container">
                <h1>Todo List</h1>
                <div className="add-btn-container">
                    <button className="btn">+ Add new Todo</button>
                </div>
                <div className="table-wrapper">
                    {/* spinner */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="table-header-task">Task</th>
                                <th className="table-header-status">Status</th>
                                <th className="table-header-action">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos
                                .map
                                (todo => <TableItem
                                    key={todo._id}
                                    text={todo.text}
                                    isCompleted={todo.isCompleted} />)}
                            <TableItem />
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
}