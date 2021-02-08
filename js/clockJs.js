// console.log("this is clock mini project");

setInterval(() => {
let a = new Date();
let date = a.toLocaleDateString();
let time = a.toLocaleTimeString();


document.getElementById('time').innerHTML= time +" on "+date;
}, 1000);

// alarm set 
let alarmSubmit = document.getElementById("alarmSubmit");

alarmSubmit.addEventListener('click',setAlarm);
const audio = new Audio('alarm_audio.mp3');

function ringBell() {
    audio.play();  
}

function setAlarm(e) {
    e.preventDefault();
    // console.log("setting alarm");

    const alarm = document.getElementById('alarm');
    if(alarm.value != ""){
    
    alarmDate = new Date(alarm.value);
    // console.log(`setting Alarm ${alarmDate} ...`); 
    now = new Date();
    alarm.value="";
    let timeToAlarm = alarmDate - now;
    // console.log(alarmDate - now);
        alert(`Your Alarm Set on ${alarmDate} is Sucessfully... `)
    if(timeToAlarm=>0){
        setTimeout(() => {
            ringBell();
        }, timeToAlarm);
    }
}else{
    alert("Sorry, Input is invalid!!! Try Again...");
}
}
