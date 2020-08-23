import axios from 'axios'
const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export default {
  addTask (task) {
    return axios.post('/tasks', task).then((res) => { return res })
  },
  getTask (id) {
    return axios.get('/tasks/' + id).then((res) => { return res })
  },
  getAllTasks () {
    return api.get('/tasks').then((res) => { return res })
  }
}
