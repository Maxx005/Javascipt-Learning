const checkBtn = document.getElementById("check-btn");
const todayBtn = document.getElementById("today-btn");

let days = document.getElementById("days")
let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")

// console.log(days)
// console.log(hours)
// console.log(minutes)
// console.log(seconds)

// let today = new Date();

// checkBtn.addEventListener("click",function() {
//     console.log("Check working!!")
// })

// todayBtn.addEventListener("click", function () {
//     let tme = today.getTime();
//     console.log(tme)
//     console.log("Today working!!")

// })
function today() { 
    let now = new Date();
    // let target = new Date(2050, 12, 10);
    // let value = copy.setTime(target.getTime());
    htime = now.getHours();
    mtime = now.getMinutes();
    stime = now.getSeconds();

    
    hours.textContent = htime
    
    if (mtime < 10) {
        minutes.textContent = "0" + mtime
    }
    else { 
        minutes.textContent = mtime
    }
    seconds.textContent = stime 
    if (stime < 10) {
        seconds.textContent = "0" + stime
    }
    else { 
        seconds.textContent = stime
    }
    
    let countDownDate = new Date("Jan 1,2024 00:00:00")
    // console.log(countDownDate.getTime())

    let diffDate = countDownDate - today
    }
    
    // console.log(htime)
    // console.log(mtime)
    // console.log(stime)

setInterval(today,1000)


