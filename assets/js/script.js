setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]"); //* how to select via attribute
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");


function setClock(){
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60; //? 60 seconds in a minute (percentage of a minute: 0.5 = 30s; o.2 = 12s)
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60; //? slow flow between minutes (or it'll jump entire minutes)
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12; //? slow flow between hours (or it'll jump entire hours)

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);

}

function setRotation(element, rotationRatio){
    element.style.setProperty("--rotation", rotationRatio * 360); //* accessing the css variable we created
    //* (*360 are the degrees of a complete rotation)
}

setClock();