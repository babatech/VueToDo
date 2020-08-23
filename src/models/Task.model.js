export default class TaskModel {
  title = '';
  createdAt = '';
  updateAt = '';
  description = '';
  datetime = '';
  construct (task) {
    this.title = task.title
    this.description = task.description
    this.createdAt = task.createdAt
    this.updateAt = task.updateAt
    this.datetime = task.datetime
  }

  get task () {
    return {
      title: this.title,
      description: this.description,
      createdAt: this.createdAt,
      updateAt: this.updateAt,
      datetime: this.datetime
    }
  }

  set task (value) {
    this.title = value.title
    this.description = value.description
    this.createdAt = value.createdAt
    this.updateAt = value.updateAt
    this.datetime = value.datetime
  }
}
