class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = document.querySelector(selector);
        this.targetDate = targetDate;
        this.days = this.selector.querySelector('[data-value="days"]');
        this.hours = this.selector.querySelector('[data-value="hours"]');
        this.mins = this.selector.querySelector('[data-value="mins"]');
        this.secs = this.selector.querySelector('[data-value="secs"]');
    };
    countDown() {
    setInterval(() => {
      let time = this.targetDate - Date.now();
      const expireTime = this.getClockFace(time);
      this.updateClockFace(expireTime);
    }, 1000)
  };
    getClockFace(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
    };
    updateClockFace({ days, hours, mins, secs }) {
    this.days.textContent = days;
    this.hours.textContent = hours;
    this.mins.textContent = mins;
    this.secs.textContent = secs;
    };
    pad(value) {
    return String(value).padStart(2, '0');
  };
};

const countToNewYear = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2021'),
});

countToNewYear.countDown();