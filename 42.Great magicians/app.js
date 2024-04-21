/*Great Magicians: Start with a copy of your program from Exercise 41.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.
*/
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var megician = magicians_1[_i];
        console.log(megician.charAt(0).toUpperCase() + megician.slice(1));
    }
}
////Exercise 42:
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[1] = magicians[i] + ' the great';
    }
}
var magicians2 = ["gabru", "ad", "bhai"];
make_great(magicians2);
show_magicians(magicians2);
