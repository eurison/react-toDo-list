import { ChevronLeftIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
import Title from "../components/Title"

export default function TaskPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const title = searchParams.get("title")
  const description = searchParams.get("description")

  return (
    <>
      <div className="w-screen h-screen bg-slate-800 flex justify-center p-6">
        <div className="w-[500px] mx-auto space-y-4">
          <div className="flex justify-center relative mb-6">
            <button
              onClick={() => navigate(-1)}
              className="absolute left-0 top-0 bottom-0 text-slate-100"
            >
              <ChevronLeftIcon size={42} />
            </button>
            <Title>Details the Task</Title>
          </div>

          <div className="bg-slate-300 p-6 rounded-md">
            <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
            <p className="text-slate-500">{description}</p>
          </div>
        </div>
      </div>
      <div></div>
    </>
  )
}
