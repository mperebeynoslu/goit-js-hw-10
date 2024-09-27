import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const startButton = document.querySelector('[data-start]');
const dateTimePicker = document.querySelector('#datetime-picker');
const timerFields = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]')
};

const style = document.createElement('style');
document.head.appendChild(style);



let userSelectedDate = null;
let intervalId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate <= new Date()) {
        iziToast.error({ title: "Error", message: "Please choose a date in the future" });
        startButton.disabled = true;
    } else {
        startButton.disabled = false;
    }
  },
};

flatpickr(dateTimePicker, options);


startButton.addEventListener('click', handlerClick);

function handlerClick() {
    if (intervalId) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(() => {
        const now = new Date();
        const timeDifference = userSelectedDate - now;

        if (timeDifference <= 0) {
            clearInterval(intervalId);
            updateTimerFields({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            iziToast.success({ title: "Success", message: "Countdown finished!" });
            dateTimePicker.disabled = false;
            return;
        }
        const timeComponents = convertMs(timeDifference);
        updateTimerFields(timeComponents);
    }, 1000);
    startButton.disabled = true;
    dateTimePicker.disabled = true;
}


function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function updateTimerFields({ days, hours, minutes, seconds }) {
    timerFields.days.textContent = addLeadingZero(days);
    timerFields.hours.textContent = addLeadingZero(hours);
    timerFields.minutes.textContent = addLeadingZero(minutes);
    timerFields.seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

