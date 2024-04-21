var current_users = ["admin", "Eric", "Ali", "Hamza", "fatima"];
var new_users = ["admin", "fatima", "Aliza", "Haseeb", "Noor"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log("Sorry ${new_user}, that name is taken");
    }
    else {
        console.log("Yes $(new_user), is still in available list");
    }
}
