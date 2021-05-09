import {createModel} from "hox";
import {useState} from "react";
import {fetchTaskList, Task} from "../api/task";

const TaskModel = () => {
    const [tasks,setTasks] = useState<Task[]>([])
    const refresh = async () => {
        const resp = await fetchTaskList()
        setTasks(resp.tasks)
    }
    return {
        tasks,refresh
    }
}
const useTaskModel = createModel(TaskModel)
export default useTaskModel
