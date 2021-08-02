function startTime() {
    const today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    minute = changeClockFormat(minute);
    second = changeClockFormat(second);
    document.querySelector('#clock').innerHTML = hour + ":" + minute + ":" + second;
    setTimeout(startTime, 1000);
  }

  function changeClockFormat(time) {
    if (time < 10) {time = "0" + time};
    return time;
  }

  window.onload = function() {
    startTime();
}