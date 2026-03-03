import styles from './TodoListItem.module.css'

export default function TodoListItem({
    _id,
    text,
    isCompleted,
    onStatusChange
}) {
    const todoClass = [styles.todo];
    if (isCompleted) {
        todoClass.push(styles['is-completed'])
    }
    return (
        <tr className={todoClass.join(' ')}>
            <td>{text}</td>
            <td>{isCompleted ? 'Complete' : 'Incomplete'}</td>
            <td className="todo-action">
                <button onClick={()=> onStatusChange(_id)} className="btn todo-btn">Change status</button>
            </td>
        </tr>
    );
}