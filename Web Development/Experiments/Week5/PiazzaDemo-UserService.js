app.factory("UserService", function () {
    var currentUser = null;
    var users = [
        { username: "vikas", password: "vikas", role: "admin" },
        { username: "shakti", password: "shakti", role: "faculty", authoring: [1, 2, 3], teaching: [3, 4, 6] },
        { username: "karthik", password: "karthik", role: "student", registered: [2, 3, 4] }
    ];

    var logout = function () {
        currentUser = null;
    }
    var login = function (username, password) {
        for (var u in users) {
            if (users[u].username == username && users[u].password == password) {
                currentUser = users[u];
                return users[u];
            }
        }
        return null;
    };

    var getCurrentUser = function () {
        return currentUser;
    }

    return {
        login: login,
        logout: logout,
        getCurrentUser: getCurrentUser
    }
});

