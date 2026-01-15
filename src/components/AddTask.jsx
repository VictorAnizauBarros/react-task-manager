import { useState } from "react";

function AddTask({ onClickAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="bg-slate-200 p-6 rounded flex flex-col space-y-5  ">
      <input
        type="text"
        placeholder="Digite aqui o título da tarefa"
        className="bg-slate-100 p-2 rounded outline-none border-slate-300 "
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Digite aqui a descrição da tarefa"
        className="bg-slate-100 p-2 rounded outline-none border-slate-300 "
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />

      <button
        className="p-2 rounded shadow w-full flex cursor-pointer bg-amber-300 font-bold text-white justify-center"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha os campos corretamente.");
          }
          onClickAddTask(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
