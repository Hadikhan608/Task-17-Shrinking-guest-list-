"use strict";
//Task 17: Shrinking guest list, start from program of task 16 saying that
//you can invite only 2 guest for dinner.
//Remove guest name one at a time until two names remain in guest list,
//Each time you pop a name from guest list print a msg that i am sorry you can't invite him for dinner
//Print a msg to remaining two guest that they are still invited.
//Remove last two names from the list so you have an empty list.
//Print your list to make sure you have an empty list at the end of your program.
let guestlist = ["Kumail", "Shahid", "Tahami", "Qadir"];
let message = ("As dinner tabe didn't arrive on time i can invite only two guest");
console.log(message);
//now remove two guests
let newguestlist = guestlist.pop();
console.log(`Sorry Mr. ${newguestlist} you are not invited`);
let newguestlist1 = guestlist.pop();
console.log(`Sorry Mr. ${newguestlist1} you are not invited`);
for (let i = 0; i < guestlist.length; i++) {
    console.log(`Mr.${guestlist[i]} you are still invited`);
}
;
guestlist.pop();
guestlist.pop();
console.log(guestlist);
