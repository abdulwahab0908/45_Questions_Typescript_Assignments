/* Unchanged Magicians: Start with your work from Exercise 41. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name*/
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var megician = magicians_1[_i];
        console.log(megician.charAt(0).toUpperCase() + megician.slice(1));
    }
}
//////////////
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the great';
    }
}
var magicians2 = ["gabru", "ad", "bhai"];
make_great(magicians2);
show_magicians(magicians2);
/////////////////
function make_great2(magicians) {
    var greatMagicain = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicain.push(magicians[i] + 'the great');
    }
    return greatMagicain;
}
var magicians3 = ["gabru", "ad", "bhai"];
var greatMagicain2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicain2);
