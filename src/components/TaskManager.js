import React from "react";

class TaskManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            currentTask: ""
        };
    }

    componentDidMount() {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            this.setState({ tasks: JSON.parse(tasks) });
        }
    }

    componentDidUpdate() {
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }

    handleInputChange = (event) => {
        this.setState({ currentTask: event.target.value });
    }

    addTask = () => {
        this.setState(prevState => ({
            tasks: [...prevState.tasks, { id: Date.now(), text: this.state.currentTask, completed: false }],
            currentTask: ""
        }));
    }

    toggleCompletion = (id) => {
        const updatedTasks = this.state.tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        });
        this.setState({ tasks: updatedTasks });
    }

    deleteTask = (id) => {
        const filteredTasks = this.state.tasks.filter(task => task.id !== id);
        this.setState({ tasks: filteredTasks });
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.currentTask}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.addTask}>Add Task</button>
                <ul>
                    {this.state.tasks.map(task => (
                        <li key={task.id}>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => this.toggleCompletion(task.id)}
                            />
                            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                {task.text}
                            </span>
                            <button onClick={() => this.deleteTask(task.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TaskManager;
