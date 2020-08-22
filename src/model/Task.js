export default class TaskModel {
  title;
  createdAt;
  datetime;
  construct (task) {
    this.title = task.title
    this.createdAt = task.createdAt
    this.datetime = task.datetime
  }

  get task () {
    return {
      title: this.title,
      created_at: this.created_at,
      datetime: this.datetime
    }
  }

  set task (value) {
    this.title = value.title
    this.created_at = value.created_at
    this.datetime = value.datetime
  }
}
