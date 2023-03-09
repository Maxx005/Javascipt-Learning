
/* 
// Since month is zero based, birthday will be January 10, 1995
const birthday = new Date(1980, 12, 10);
const copy = new Date();
const value = copy.setTime(birthday.getTime());
console.log(value);

// Gettime Functions
*/


/*

setInterval(() => {
    //  console.log("Shivam is a good Boy")
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

*/
const now = new Date();
console.log(now)

// console.log(now.getUTCDate())
console.log("Year is: ",now.getFullYear())
console.log("Time is: ",now.getTime()) // milliseconds
console.log("Days is: ",now.getDay())
console.log("Month is: ",now.getMonth())
console.log("Month is: ",now.getHours())
console.log("Minutes is: ",now.getMinutes())
console.log("Seconds is: ",now.getSeconds())
console.log("Miliseconds is: ",now.getMilliseconds())
