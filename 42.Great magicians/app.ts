/*Great Magicians: Start with a copy of your program from Exercise 41.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.
*/

function show_magicians(magicians: string[]): void {
    for (const megician of magicians) {
        console.log(megician.charAt(0).toUpperCase() + megician.slice(1));}}

     ////Exercise 42:
    
function make_great(magicians: string[]): void {
    for (let i = 0 ;i < magicians.length; i++){
        magicians[1] = magicians[i] + ' the great'
    
}
}
const magicians2 : string []= ["gabru","ad","bhai"]
make_great(magicians2)
show_magicians(magicians2)

    

