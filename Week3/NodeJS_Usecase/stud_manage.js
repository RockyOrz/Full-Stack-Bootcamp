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
    let studentList = this.students;
    let filtered = studentList.filter((student) => {
      return student != null;
    });
    return filtered;
  }

  getByID(id) {
    return this.students[id - 1] != null ? this.students[id - 1] : null;
  }

  getBySection(section) { 
    let studentList = this.students;
    let filterd = studentList.filter((student) => {
      return student != null && parseInt(student.section) === section;
    });
    return filterd != null? filterd : null;
    
  }

  update(student) {
    return this.students[parseInt(student.id) - 1] != null
      ? (this.students[student.id - 1] = student)
      : null;
  }

  delete(id) {
    this.students.splice(id - 1, 1);
  }
}

module.exports = Students_manage;
