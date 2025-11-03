import { useState } from "react";

const TodoList = () => {    

    const [input, setInput] = useState('');
    const [todos, setTodos] = useState<string[]>([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState<number | null>(null)

    const addTodo = () => {
        if (input.trim() === '') return;

        if (isEditing && editIndex !== null) {
            const updatedTodos = [...todos];
            updatedTodos[editIndex] = input;
            setTodos(updatedTodos);
            setIsEditing(false);
            setEditIndex(null);
            setInput('');
            return;
        }
        setTodos([...todos, input])
        setInput('');
    }

    const editTodo = (index: number) => {

        setIsEditing(true);
        setEditIndex(index);
        setInput(todos[index]);
    }

    const deleteTodo = (index: number) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos) 
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            console.log('Enter key pressed');
            addTodo();
        }
        setInput('')
    }

    return (
        <div>
            <h2>Todo List Component</h2>
            <input type="text"  onKeyDown={handleKeyDown} onChange={(e) => setInput(e.target.value)} />
            {/* Todo list implementation goes here */}

            <button onClick={addTodo}>{isEditing ? "Update" : "Add"}</button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => editTodo(index)}>Edit</button>
                        <button onClick={() => deleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;