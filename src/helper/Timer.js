class Timer {
  constructor(time = 10 * 1000, countInterval = 1000) {
    this.default = time;
    this.curTime = time;
    this.intervalId = null;
    this.countInterval = countInterval;
    this.terminated = false;
  }
  
  tick(callback, auto=false) {
    let {curTime, countInterval, intervalId, resetTime} = this;
    callback.every();
    if (curTime > 0) {
      this.curTime -= countInterval
    } else if (!auto) {
      clearInterval(intervalId)
      callback.complete();
    } else {
      resetTime.call(this);
      callback.complete();
    }
  }

  /**
   * @param {Function} callback.complete
   * @param {Function} callback.every
   */
  countDown(callback={every:()=>{}, complete:()=>{}}, auto=false) {
    let {tick} = this;
    this.intervalId = setInterval(tick.bind(this, callback, auto), this.countInterval);
  }
  
  resetTime() {this.curTime = this.default}

  terminate() {clearInterval(this.intervalId); this.terminated=true}
}

export default Timer;