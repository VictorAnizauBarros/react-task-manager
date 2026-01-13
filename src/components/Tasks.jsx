import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks({ tasks, onClickChangeTaskStatus, onClickDeleteTask }) {
  return (
    <div className="bg-slate-200 p-6 rounded ">
      <ul className="flex flex-col space-y-5">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              className={`p-2 rounded shadow w-full flex text-start cursor-pointer ${
                task.isCompleted ? "line-through bg-amber-200" : "bg-amber-300"
              }`}
              onClick={() => {
                onClickChangeTaskStatus(task.id);
              }}
            >
              {task.title}
            </button>

            <button
              className={` p-2 cursor-pointer ${
                task.isCompleted ? "bg-amber-200" : "bg-amber-300"
              }`}
            >
              <ChevronRightIcon />
            </button>
            <button
              className={` p-2 cursor-pointer ${
                task.isCompleted ? "bg-amber-200" : "bg-amber-300"
              }`}
              onClick={() => {
                onClickDeleteTask(task.id);
              }}
            >
              <TrashIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
