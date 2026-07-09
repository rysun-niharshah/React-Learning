import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [show, setShow] = useState(false);

    // todo task start
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState<string[]>([]);

    // Add Task
    const addTask = () => {
        if (task.trim() === "") return;

        setTodos((prevTodos) => [...prevTodos, task]);
        setTask("");
    };

    // Remove Task
    const removeTask = (index: number) => {
        setTodos((prevTodos) =>
            prevTodos.filter((_, i) => i !== index)
        );
    };
    // todo task end

    return (
        <>
            <h2 className="text-2xl font-bold">Count display: {count}</h2>
            <button onClick={() => setCount(count + 1)} className="mr-2 px-4 py-2 bg-blue-500 text-white rounded">
                + Increase value
            </button>
            <button onClick={() => setCount(count - 1)} className="px-4 py-2 bg-red-500 text-white rounded">
                - Decrease value
            </button>


            <div className="mt-4">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-4 p-2 border border-gray-300 rounded"
                />
                <h2>Hello {name}</h2>
                <button onClick={() => setShow(!show)} className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
                    {show ? "Hide" : "Show"}
                </button>
                {show && (
                    <div className="mt-4 p-2 bg-gray-100 rounded">
                        <p>This is some additional content that is only shown when the button is clicked.</p>
                    </div>
                )}
            </div>


            <div className="mt-4 p-2 bg-gray-100 rounded">
                <h2>Todo App</h2>

                <input
                    type="text"
                    placeholder="Enter task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="mt-4 p-2 border border-gray-300 rounded"
                />

                <button onClick={addTask} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                    +
                </button>

                <ul>
                    {todos.map((todo, index) => (
                        <li key={index} className="mt-2 p-2 bg-gray-100 rounded">
                            {todo}

                            <button
                                onClick={() => removeTask(index)}
                                className="ml-4 px-4 py-2 bg-red-500 text-white rounded"
                            >
                                -
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Counter;