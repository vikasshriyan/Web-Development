var app = angular.module("filter", [])

app.controller("FilterController", function ($scope) {
    var vikas = {
        firstName: "Vikas",
        lastName: "Shriyan",
        gender: "Male",
        major: "Computer Science",
        university: "Northeastern University"
    };

    var shakti = {
        firstName: "Shakti",
        lastName: "Patro",
        gender: "Male",
        major: "Computer Science",
        university: "Boston University"
    };

    var pankaj = {
        firstName: "Pankaj",
        lastName: "Tripathi",
        gender: "Male",
        major: "Computer Science",
        university: "Northeastern University"
    };

    var vikas1 = {
        firstName: "Vikas",
        lastName: "Rao",
        gender: "Male",
        major: "Information Assurance",
        university: "Harvard University"
    };

    var abhishek = {
        firstName: "Abhishek",
        lastName: "Kumar",
        gender: "Male",
        major: "Computer Engineering",
        university: "MIT"
    };

    var ankita = {
        firstName: "Ankita",
        lastName: "Shetty",
        gender: "Female",
        major: "Health Science",
        university: "Northeastern University"
    };

    var karthik = {
        firstName: "Karthik",
        lastName: "Mahaley",
        gender: "Male",
        major: "Information Science",
        university: "Harvard University"
    };

    var madura = {
        firstName: "Madura",
        lastName: "Puri",
        gender: "Female",
        major: "Information Science",
        university: "Northeastern University"
    };

    var students = [vikas, shakti, pankaj, vikas1, abhishek, ankita, karthik, madura];
    console.log("Here");
    $scope.students = students;

    $scope.fnameSearch = function () {
        var FilterStudents = [];
        for (i = 0; i < students.length ; i++) {
            var matchname = students[i].firstName.substring(0, $scope.searchFirstName.length);
            if (matchname.toLowerCase() == $scope.searchFirstName.toLowerCase()) {
                FilterStudents.push(students[i]);
            }
        }
        $scope.students = FilterStudents;
    }
    $scope.lnameSearch = function () {
        var FilterStudents = [];
        for (i = 0; i < students.length ; i++) {
            var matchname = students[i].lastName.substring(0, $scope.searchLastName.length);
            if (matchname.toLowerCase() == $scope.searchLastName.toLowerCase()) {
                FilterStudents.push(students[i]);
            }
        }
        $scope.students = FilterStudents;
    }

    $scope.genderSearch = function () {
        var FilterStudents = [];
        for (i = 0; i < students.length ; i++) {
            var matchname = students[i].gender.substring(0, $scope.searchGender.length);
            if (matchname.toLowerCase() == $scope.searchGender.toLowerCase()) {
                FilterStudents.push(students[i]);
            }
        }
        $scope.students = FilterStudents;
    }

    $scope.majorSearch = function () {
        var FilterStudents = [];
        for (i = 0; i < students.length ; i++) {
            var matchname = students[i].major.substring(0, $scope.searchMajor.length);
            if (matchname.toLowerCase() == $scope.searchMajor.toLowerCase()) {
                FilterStudents.push(students[i]);
            }
        }
        $scope.students = FilterStudents;
    }

    $scope.univSearch = function () {
        var FilterStudents = [];
        for (i = 0; i < students.length ; i++) {
            var matchname = students[i].university.substring(0, $scope.searchUniversity.length);
            if (matchname.toLowerCase() == $scope.searchUniversity.toLowerCase()) {
                FilterStudents.push(students[i]);
            }
        }
        $scope.students = FilterStudents;
    }
});