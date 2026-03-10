import axios from 'axios'
const BASEURL = 'https://todolistbackend-production-611d.up.railway.app'//import.meta.env.VITE_BASE_URL

export async function getAllList() {
    const { data } = await axios.get(BASEURL + "/list");
    console.log(data)
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