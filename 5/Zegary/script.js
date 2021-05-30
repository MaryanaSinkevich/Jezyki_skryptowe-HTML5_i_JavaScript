window.setInterval(function () {
    for (var i = 0; i < 5; i++){
            const date = new Date();
            const hours = document.querySelectorAll('.hours_1');
            const minutes = document.querySelectorAll('.minutes_1');
            const seconds = document.querySelectorAll('.seconds_1');

            hours[i].style.transform = `rotate(${date.getHours()-4 / 12 * 360}deg)`;
            minutes[i].style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
            seconds[i].style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;
    }
}, 1000);

window.setInterval(function () {
    for (var i = 0; i < 5; i++){
            const date = new Date();
            const hours = document.querySelectorAll('.hours_2');
            const minutes = document.querySelectorAll('.minutes_2');
            const seconds = document.querySelectorAll('.seconds_2');

            hours[i].style.transform = `rotate(${date.getHours()-3 / 12 * 360}deg)`;
            minutes[i].style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
            seconds[i].style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;
    }
}, 1000);

window.setInterval(function () {
    for (var i = 0; i < 5; i++){
            const date = new Date();
            const hours = document.querySelectorAll('.hours_3');
            const minutes = document.querySelectorAll('.minutes_3');
            const seconds = document.querySelectorAll('.seconds_3');

            hours[i].style.transform = `rotate(${date.getHours() / 12 * 360}deg)`;
            minutes[i].style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
            seconds[i].style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;
    }
}, 1000);

window.setInterval(function () {
    for (var i = 0; i < 5; i++){
            const date = new Date();
            const hours = document.querySelectorAll('.hours_4');
            const minutes = document.querySelectorAll('.minutes_4');
            const seconds = document.querySelectorAll('.seconds_4');

            hours[i].style.transform = `rotate(${date.getHours()+9 / 12 * 360}deg)`;
            minutes[i].style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
            seconds[i].style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;
    }
}, 1000);

window.setInterval(function () {
    for (var i = 0; i < 5; i++){
            const date = new Date();
            const hours = document.querySelectorAll('.hours_5');
            const minutes = document.querySelectorAll('.minutes_5');
            const seconds = document.querySelectorAll('.seconds_5');

            hours[i].style.transform = `rotate(${date.getHours()+10 / 12 * 360}deg)`;
            minutes[i].style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
            seconds[i].style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;
    }
}, 1000);
