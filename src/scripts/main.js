const redLight = document.querySelector('.red');
const yellowLight = document.querySelector('.yellow');
const greenLight = document.querySelector('.green');

const red = "red";
const yellow = "yellow";
const green = "green";
const black = "black";

let time = 0;

const turnOnLight = (light, color) => {
    light.style.backgroundColor = color;
    light.style.opacity = 1;
};

const turnOffLight = (light, color) => {
    light.style.backgroundColor = color;
    light.style.opacity = 1;
};


const lightLoop = () => {
    time++;
    if (time === 33) {
        time = 0
    }

    if ((time >= 0) && (time <= 20)) {
        if ((time > 0) && (time < 8)) {
            turnOnLight(redLight, red);
        } else {
            turnOffLight(redLight, black)
        }

        if ((time > 5) && (time < 9)) {
            turnOnLight(yellowLight, yellow);
        } else {
            turnOffLight(yellowLight, black);
        }

        if ((time > 8) && (time < 20)) {
            turnOnLight(greenLight, green);
        } else {
            turnOffLight(greenLight, black);
        }
    }

    if ((time >= 20) && (time <= 33)) {
        if ((time > 19) && (time < 23)) {
            turnOnLight(yellowLight, yellow);
        } else {
            turnOffLight(yellowLight, black);
        }

        if ((time > 22) && (time <= 33)) {
            turnOnLight(redLight, red);
        }
    }

    if ((time === 0)) {
        redLight.style.backgroundColor = red;
    }
};

setInterval(lightLoop,1000);




