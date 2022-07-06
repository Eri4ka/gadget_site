function timer() {
    //timer
    const deadline = '2022-10-31';

    function getRemainTime(endtime) {
        let t =  Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / 1000) % 60);
    
        return {
            'endtime': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    
    function getZero(time) {
        if (time >= 0 && time < 10) {
            return '0' + time;
        } else {
            return time;
        }
    }
    
    function setRemainTime(endtime) {
        let htmlDays = document.querySelector('#days'),
            htmlHours = document.querySelector('#hours'),
            htmlMinutes = document.querySelector('#minutes'),
            htmlSeconds = document.querySelector('#seconds'),
            timeInterval = setInterval(insertRemainTime, 1000);
    
            insertRemainTime();
    
        function insertRemainTime() {
            const t = getRemainTime(endtime);
            htmlDays.textContent = getZero(t.days);
            htmlHours.textContent = getZero(t.hours);
            htmlMinutes.textContent = getZero(t.minutes);
            htmlSeconds.textContent = getZero(t.seconds);
    
            if (t.endtime <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setRemainTime(deadline);
}

export default timer;
