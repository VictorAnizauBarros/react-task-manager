import { useEffect, useState } from "react";
import { v4 } from "uuid";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onClickChangeTaskStatus(taskId) {
    const newTask = tasks.map((task) => {
      if (taskId === task.id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTask);
  }

  function onClickDeleteTask(taskId) {
    const newTask = tasks.filter((task) => task.id !== taskId);
    setTasks(newTask);
  }

  function onClickAddTask(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center">
      <div className="w-125 flex flex-col space-y-4">
        <h1 className="font-bold text-3xl text-white text-center">
          Task Manager
        </h1>
        <AddTask onClickAddTask={onClickAddTask} />
        <Tasks
          tasks={tasks}
          onClickChangeTaskStatus={onClickChangeTaskStatus}
          onClickDeleteTask={onClickDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
