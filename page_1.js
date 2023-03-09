let checkBtn = document.getElementById("check-btn")

let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
let amPm = document.getElementById("am-pm")

function mouseMove() {
    document.addEventListener('mousemove', (e) => {
        console.log(`Mouse X: ${e.clientX}, Mouse Y: ${e.clientY}`);
    });
}


function check() { 
    let now = new Date()
    // let my = new Date('December 17, 1995 22:05:05')

    htime = now.getHours()
    mtime = now.getMinutes()
    stime = now.getSeconds()

    if (htime >= 12) {
            // AM/PM
        if (htime >= 12) {
            amPm.textContent = " PM"
        }
        else {
            amPm.textContent = " AM"
        }
        htime = htime - 12
        if (htime < 10) {
            hours.textContent = "0" + htime
        }
        else {
            hours.textContent = htime
        }
    }
    else {
        if (htime < 10) {
            hours.textContent = "0" + htime
        }
        else {
            hours.textContent = htime
        }
    }

    // mtime 
    if (mtime < 10) {
        minutes.textContent = "0" + mtime
    }
    else {
        minutes.textContent = mtime
    }
    // stime
    if (stime < 10) {
        seconds.textContent = "0"  + stime
    }
    else {
        seconds.textContent = stime
    } 



    // console.log(now)
    // console.log(now.getDate())
    // console.log(now.getMonth())
    // console.log(now.getTime())
}

setInterval(check,1000)