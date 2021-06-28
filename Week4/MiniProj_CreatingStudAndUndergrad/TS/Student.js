"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, age, nationality) {
        this.name = name;
        this.age = age;
        this.gender = "female";
        this.nationality = nationality;
    }
    Student.prototype.getNationality = function () {
        return this.nationality;
    };
    return Student;
}());
exports.Student = Student;
