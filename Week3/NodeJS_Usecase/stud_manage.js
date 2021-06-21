class Students_manage {
  constructor() {
    this.students = [];
  }

  add(student) {
    return this.students[student.id - 1] == null
      ? (this.students[student.id - 1] = student)
      : null;
  }

  showAll() {
    let filtered = this.students.filter((student) => {
      return student != null;
    });
    return filtered;
  }

  get(id) {
    return this.students[id - 1] != null ? this.students[id - 1] : null;
  }

  update(student) {
    this.students[student.id - 1] != null
      ? (this.students[student.id - 1] = student)
      : null;
  }

  delete(id) {
    this.students.splice(id - 1, 1);
  }
}

module.exports = Students_manage;
