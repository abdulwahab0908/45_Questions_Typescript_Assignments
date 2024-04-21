/* Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.
8*/

function show_magicians(magicians: string[]): void{
    for (const megician of magicians) {
        console.log(megician.charAt(0).toUpperCase() + megician.slice(1));
    }
} 

 const megician : string[] = ["gabru","ad","bhai"]
 show_magicians(megician);