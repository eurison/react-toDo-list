import { useState } from "react"
import Input from "./Input"

export default function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  // console.log(title, description)

  return (
    <div className="space-y-3 bg-slate-500 p-6 rounded-md shadow flex flex-col">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Digite sua tarefa"
      />
      <Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Digite a descrição da tarefa"
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim())
            return alert("digite algo na tarefa")

          onAddTaskSubmit(title, description)
          setTitle("")
          setDescription("")
        }}
        className="bg-zinc-700 p-2 rounded-md text-white py-2 px-4 font-medium "
      >
        Adicionar
      </button>
    </div>
  )
}
