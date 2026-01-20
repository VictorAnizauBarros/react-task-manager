import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onClickChangeTaskStatus, onClickDeleteTask }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);

    navigate(`/tasks?${query.toString()}`);
  }
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
              onClick={() => {
                onSeeDetailsClick(task);
              }}
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
