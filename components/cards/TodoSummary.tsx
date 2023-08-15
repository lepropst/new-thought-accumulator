
import {localGet} from "@/utilities/localUtilities/localGet";
import TodoThought from '@/models';
export default function TodoSummary() {
    const todos: Response = localGet("api/todos")
    return <div className="grid grid-cols-1 grid-row-auto gap-2">
        {todos.map((e:TodoThought)=>e.title)}
    </div>

}