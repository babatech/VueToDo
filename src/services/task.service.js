import axios from 'axios'
const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export default {
  addTask (task) {
    return api.post('/tasks', task).then((res) => { return res })
  },
  updateTask (id, task) {
    return api.patch('/tasks/' + id, task).then((res) => { return res })
  },
  getTask (id) {
    return api.get('/tasks/' + id).then((res) => { return res })
  },
  deleteTask (id) {
    return api.delete('/tasks/' + id).then((res) => { return res })
  },
  getAllTasks (queryParam) {
    if (!queryParam._sort) {
      queryParam._sort = 'datetime'
    }
    return api.get('/tasks', { params: queryParam }).then((res) => { return res })
  }
}
