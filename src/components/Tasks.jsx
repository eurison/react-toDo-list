import { TrashIcon } from "lucide-react"
import { CheckIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Button from "./Button"
import { ChevronRightIcon } from "lucide-react"

export default function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate()

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams()
    query.set("title", task.title)
    query.set("description", task.description)
    navigate(`/Task?title=${task.title}&description=${task.description}`)
  }
  return (
    <ul className="space-y-2 p-6 bg-slate-600 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-300 w-full flex items-center gap-2 text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.isCompleted && <CheckIcon color="green" />}
            {task.title}
            {/* {task.isCompleted == true ? "✅" : "❌"} */}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  )
}
