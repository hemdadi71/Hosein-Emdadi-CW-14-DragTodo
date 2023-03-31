import axios from 'axios'
const url = `http://localhost:3000`
const endpoint = `task`
export async function PostData(data) {
  const response = await axios.post(url + '/' + endpoint, data)
  return response
}
export async function GetData() {
  const response = await axios(url + '/' + endpoint)
  return response
}
export async function DeleteData(id) {
  const response = await axios.delete(`${url}/${endpoint}/${id}`)
  return response
}
