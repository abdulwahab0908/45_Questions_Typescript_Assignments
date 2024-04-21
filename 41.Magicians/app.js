/* Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.
8*/
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var megician_1 = magicians_1[_i];
        console.log(megician_1.charAt(0).toUpperCase() + megician_1.slice(1));
    }
}
var megician = ["gabru", "ad", "bhai"];
show_magicians(megician);
