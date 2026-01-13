import { useState } from "react";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Python",
      description: "Estudar a lingugagem mais utilizada em analise de dados.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Javascript",
      description: "Estudar a lingugagem mais utilizada na web.",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Java",
      description: "Estudar a lingugagem mais utilizada em sistemas robustos.",
      isCompleted: false,
    },
  ]);

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
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center">
      <div className="w-125">
        <h1 className="font-bold text-3xl text-white text-center">
          Task Manager
        </h1>
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
