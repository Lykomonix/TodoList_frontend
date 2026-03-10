import axios from 'axios'

const BASEURL = "http://localhost:3000"

export async function getAllTaskFromList(id) {
    const { data } = await axios.get(BASEURL + `/list/${id}/task`)
    return data
}

export async function createTask(listId, description) {
    const { data } = await axios.post(BASEURL + "/task", {
        list_id: listId, 
        task_description: description
    })
    return data
}

export async function updateTask(id, description, isChecked) {
    const { data } = await axios.patch(BASEURL + `/task/${id}`, {
        task_description: description,
        task_isChecked: isChecked ? 1 : 0
    })
    return data
}

export async function deleteTask(id) {
    const { data } = await axios.delete(BASEURL + `/task/${id}`)
    return data
}