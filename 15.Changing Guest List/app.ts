let guest_list : string [] = [`aziz`,`hamza`,`rox`,`asad`];
for(let i=0; i<guest_list.length; i++){
    console.log(`Respected Sir/Madam ` + guest_list[i] + `,\nWe invted you on dinner tomorrow.\n`)
}
let not_present: string = `asad`;
let new_guest : string = `shahid afridi`;
guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log(`Respected Sir/Madam ` + guest_list[i] + `,\nWe invted you on dinner tomorrow.\n`)
}
console.log(`Mr. ${not_present} will not coming tomorrow. `)