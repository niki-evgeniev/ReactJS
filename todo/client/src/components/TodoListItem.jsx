
export default function TodoListItem({
    text,
    isCompleted
}) {
    return (
        <tr className="todo is-completed">
            <td>{text}</td>
            <td>{isCompleted ? 'Complete' : 'Incomplete'}</td>
            <td className="todo-action">
                <button className="btn todo-btn">Change status</button>
            </td>
        </tr>
    );
}