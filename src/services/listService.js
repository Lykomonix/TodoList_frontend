import axios from 'axios'

const BASEURL = "http://localhost:3000"

export async function getAllList() {
    const { data } = await axios.get(BASEURL + "/list");
    return data
}

export async function createList(name) {
    const { data } = await axios.post(BASEURL + "/list", {
        name: name 
    })
    return data
}

export async function updateList(id, name) {
    const { data } = await axios.patch(BASEURL + `/list/${id}`, {
        name: name
    })
    return data
}

export async function deleteList(id) {
    const { data } = await axios.delete(BASEURL + `/list/${id}`)
    return data
}