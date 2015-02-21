app.factory("CourseService", function () {
    var courses = [

        { title: "PDP" },
        { title: "Network Security" },
        { title: "Artificial Intelligence" },
        { title: "Web Development" },
        { title: "Algorithms" },
        { title: "Information Retrieval" },
         { title: "Database" },
         { title: "Computer Systems" }
    ];

    var addCourse = function (course) {
        courses.push(course);
    }

    var getCourseByIndex = function (index) {
        return courses[index];
    }

    var getCourseByIndices = function (indices) {
        var responseCourses = [];
        for (var i in indices) {
            var course = courses[indices[i]];
            responseCourses.push(course);
        }
        return responseCourses;
    }

    return {
        addCourse: addCourse,
        getCourseByIndex: getCourseByIndex,
        getCourseByIndices: getCourseByIndices
    }
});