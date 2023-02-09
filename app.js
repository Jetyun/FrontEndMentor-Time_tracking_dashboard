async function start(){
    const response = await fetch("./data.json")
    const data= await response.json()

const daily= document.getElementById("Daily")
const weekly=document.getElementById("Weekly")
const monthly=document.getElementById("Monthly")
const workCurr=document.getElementById("work_current")
const workPrev=document.getElementById("work_previous")
const playCurr=document.getElementById("play_current")
const playPrev=document.getElementById("play_previous")
const studyCurr=document.getElementById("study_current")
const studyPrev=document.getElementById("study_previous")
const exerciseCurr=document.getElementById("exercise_current")
const exercisePrev=document.getElementById("exercise_previous")
const socialCurr=document.getElementById("social_current")
const socialPrev=document.getElementById("social_previous")
const selfCurr=document.getElementById("self_current")
const selfPrev=document.getElementById("self_previous")

daily.addEventListener('click', ()=>{
    workCurr.innerHTML=`${data[0].timeframes.daily.current}hrs`;
    workPrev.innerHTML=`Last Week-${data[0].timeframes.daily.previous}hrs`;
    playCurr.innerHTML=`${data[1].timeframes.daily.current}hr`;
    playPrev.innerHTML=`Last Week-${data[1].timeframes.daily.previous}hrs`;
    studyCurr.innerHTML=`${data[2].timeframes.daily.current}hrs`;
    studyPrev.innerHTML=`Last Week-${data[2].timeframes.daily.previous}hr`;
    exerciseCurr.innerHTML=`${data[3].timeframes.daily.current}hr`;
    exercisePrev.innerHTML=`Last Week-${data[3].timeframes.daily.previous}hr`;
    socialCurr.innerHTML=`${data[4].timeframes.daily.current}hr`;
    socialPrev.innerHTML=`Last Week-${data[4].timeframes.daily.previous}hrs`;
    selfCurr.innerHTML=`${data[5].timeframes.daily.current}hrs`;
    selfPrev.innerHTML=`Last Week-${data[5].timeframes.daily.previous}hr`;
})
weekly.addEventListener('click',()=>{
    workCurr.innerHTML=`${data[0].timeframes.weekly.current}hrs`;
    workPrev.innerHTML=`Last Week-${data[0].timeframes.weekly.previous}hrs`;
    playCurr.innerHTML=`${data[1].timeframes.weekly.current}hrs`;
    playPrev.innerHTML=`Last Week-${data[1].timeframes.weekly.previous}hrs`;
    studyCurr.innerHTML=`${data[2].timeframes.weekly.current}hrs`;
    studyPrev.innerHTML=`Last Week-${data[2].timeframes.weekly.previous}hrs`;
    exerciseCurr.innerHTML=`${data[3].timeframes.weekly.current}hrs`;
    exercisePrev.innerHTML=`Last Week-${data[3].timeframes.weekly.previous}hrs`;
    socialCurr.innerHTML=`${data[4].timeframes.weekly.current}hrs`;
    socialPrev.innerHTML=`Last Week-${data[4].timeframes.weekly.previous}hrs`;
    selfCurr.innerHTML=`${data[5].timeframes.weekly.current}hrs`;
    selfPrev.innerHTML=`Last Week-${data[5].timeframes.weekly.previous}hrs`;
})
monthly.addEventListener('click',()=>{
    workCurr.innerHTML=`${data[0].timeframes.monthly.current}hrs`;
    workPrev.innerHTML=`Last Week-${data[0].timeframes.monthly.previous}hrs`;
    playCurr.innerHTML=`${data[1].timeframes.monthly.current}hrs`;
    playPrev.innerHTML=`Last Week-${data[1].timeframes.monthly.previous}hrs`;
    studyCurr.innerHTML=`${data[2].timeframes.monthly.current}hrs`;
    studyPrev.innerHTML=`Last Week-${data[2].timeframes.monthly.previous}hrs`;
    exerciseCurr.innerHTML=`${data[3].timeframes.monthly.current}hrs`;
    exercisePrev.innerHTML=`Last Week-${data[3].timeframes.monthly.previous}hrs`;
    socialCurr.innerHTML=`${data[4].timeframes.monthly.current}hrs`;
    socialPrev.innerHTML=`Last Week-${data[4].timeframes.monthly.previous}hrs`;
    selfCurr.innerHTML=`${data[5].timeframes.monthly.current}hrs`;
    selfPrev.innerHTML=`Last Week-${data[5].timeframes.monthly.previous}hrs`;
})
}

start()