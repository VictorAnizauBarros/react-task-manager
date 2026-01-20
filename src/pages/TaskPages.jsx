import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen p-6 bg-slate-500">
      <div className="w-125 flex flex-col space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            className="absolute left-0 top-0 bottom-0 text-slate-100"
            onClick={() => navigate(-1)}
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="font-bold text-3xl text-white text-center">
            Detalhes da Tarefa
          </h1>
        </div>

        <div className="bg-slate-400 p-4 rounded-md">
          <h2 className="font-bold text-white text-xl">{title}</h2>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
