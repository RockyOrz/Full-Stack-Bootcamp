function GPA_cal(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        let gradeValue = 0;
        if (grades[i] == "A") {
            gradeValue = 100;
        } else if (grades[i] == "B") {
            gradeValue = 80;
        } else if (grades[i] == "C") {
            gradeValue = 70;
        }

        sum += gradeValue;
    }

    let gpa = sum / grades.length;

    let alphaGPA = "";
    gpa == 100
        ? (alphaGPA = "A")
        : gpa >= 80
            ? (alphaGPA = "B")
            : gpa >= 70
                ? (alphaGPA = "C")
                : (alphaGPA = "fail");

    return alphaGPA;
    
}

function showGPA() {
    let result = GPA_cal(["A", "A", "A"]);
    document.write(`Your grade is ${result}`);
}


