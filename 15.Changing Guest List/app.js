var guest_list = ["aziz", "hamza", "rox", "asad"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam " + guest_list[i] + ",\nWe invted you on dinner tomorrow.\n");
}
var not_present = "asad";
var new_guest = "shahid afridi";
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam " + guest_list[i] + ",\nWe invted you on dinner tomorrow.\n");
}
console.log("Mr. ".concat(not_present, " will not coming tomorrow. "));
