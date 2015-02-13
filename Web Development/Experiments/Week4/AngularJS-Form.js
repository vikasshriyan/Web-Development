var app = angular.module("form", [])

app.controller("StudentRecordController", function ($scope) {
    var student1 = {
        firstname: "Vikas",
        lastname: "Shriyan",
        course1: "Programming Design Paradigm",
        course2: "Network Security",
    };
    var student2 = {
        firstname: "Pankaj",
        lastname: "Tripathi",
        course1: "Programming Design Paradigm",
        course2: "Database",
    };

    var student3 = {
        firstname: "Shakti",
        lastname: "Patro",
        course1: "Programming Design Paradigm",
        course2: "Artificial Intelligence",
    };
    var student4 = {
        firstname: "Karthik",
        lastname: "Mahaley",
        course1: "Programming Design Paradigm",
        course2: "Web Development",
    };

    var students = [student1, student2, student3, student4];
    $scope.students = students;

    $scope.edit = function (student) {
        console.log(student);
        $scope.newStudent = student;
    }

    $scope.delete = function (student) {
        var index = $scope.students.indexOf(student);
        $scope.students.splice(index, 1);
    }
    $scope.add = function () {
        console.log($scope.newStudent);
        var student = {
            firstname: $scope.newStudent.firstname,
            lastname: $scope.newStudent.lastname,
            course1: $scope.newStudent.course1,
            course2: $scope.newStudent.course2,
        };
        $scope.students.push(student);
    }
});