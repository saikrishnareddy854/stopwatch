// acess the elements//
// accessed the dispaly timer using dom
let Display=document.querySelector('.DisplayTimer')
//initialize the value to zero
let[hours,minutes,seconds,milliseonds]=[0,0,0,0]
let int=null
//start 
//let start=document.getElementById('startBtn') we can weite like this also
document.getElementById('startBtn').addEventListener('click',()=>{
    if(int!==null){
        clearInterval(int)
    }
    int=setInterval(DisplayTimer,10)

}) 
//stop
//let stop=document.getElementById('stopBtn')
document.getElementById('stopBtn').addEventListener('click',()=>{
  clearInterval(int)
    })
    

//reset
//let reset=document.getElementById('resetBtn')
document.getElementById('resetBtn').addEventListener('click',()=>{
        clearInterval(int)
        let [hours,minutes,seconds,milliseonds]=[0,0,0,0]
        Display.innerHTML=`00:00:00:00`

    })

    //display timer functions
     function DisplayTimer(){
        milliseonds++
        if(milliseonds==1000){
            milliseonds=0
            seconds++
            if(seconds==60){
                seconds=0
                minutes++
                if(minutes==60){
                    minutes=0
                    hours++
                }
            }
        }
        let h=hours<10? '0'+hours:hours
        let m=minutes<10? '0'+minutes:minutes
        let s=seconds<10? '0'+seconds:seconds
       let ms=milliseonds<10? '00'+milliseonds:milliseonds <100? '0' +milliseonds:milliseonds
       Display.innerHTML=`${h}:${m}:${s}:${ms}`
     }