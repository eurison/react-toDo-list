import { useState } from "react"
import "./App.css"
import AddTasks from "./components/AddTasks"
import Tasks from "./components/Tasks"
import { v4 } from "uuid"
import { useEffect } from "react"
import Title from "./components/Title"

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || [])
  )

  // const [tasks, setTasks] = useState([
  // {
  //   id: 1,
  //   title: "Learn React JS",
  //   description:
  //     "Estudar programação para se tornar um desenvolvedor Full Stack",
  //   isCompleted: false,
  // },
  // {
  //   id: 2,
  //   title: "Learn React Native",
  //   description:
  //     "Estudar programação para se tornar um desenvolvedor Full Stack",
  //   isCompleted: false,
  // },
  // {
  //   id: 3,
  //   title: "Learn React JS",
  //   description:
  //     "Estudar programação para se tornar um desenvolvedor Full Stack",
  //   isCompleted: false,
  // },
  //])

  useEffect(() => {
    // console.log("test de useEffect")
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    const fetchTasks = async () => {
      // chamar api
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_limit=10`,
        {
          method: "GET",
        }
      )
      const data = await response.json()
      // caso eu queira chamar os dados da api.
      // setTasks(data)

      console.log(data)
    }

    fetchTasks()

    // fechar os dados que a api vai retornar
  }, [])

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      return task
    })
    setTasks(newTasks)
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    }

    setTasks([...tasks, newTask])
  }

  return (
    <>
      <div className="w-screen h-screen bg-slate-800 flex justify-center p-6">
        <div className="w-[500px] space-y-4">
          <Title>New toDo</Title>

          <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
          <Tasks
            tasks={tasks}
            onTaskClick={onTaskClick}
            onDeleteTaskClick={onDeleteTaskClick}
          />
        </div>
      </div>
      <div></div>
    </>
  )
}

export default App
