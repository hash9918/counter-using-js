let start = document.querySelector("#start");
let reset = document.querySelector("#reset");
let pause = document.querySelector("#pause");
let sec = document.querySelector("#sec");
let min = document.querySelector("#min");
let hr = document.querySelector("#hr");
let ck = document.querySelector("#clock");
setInterval(() => {
  let time = new Date();
  let h = time.getHours();
  let s = time.getSeconds();
  let m = time.getMinutes();
  am_pm = "AM";
  if (h > 12) {
    h -= 12;
    am_pm = "PM";
  }
  if (h == 0) {
    h = 12;
    am_pm = "AM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let currentTime = h + ":" + m + ":" + s + ":" + am_pm;
  ck.textContent = currentTime;
});

let second = 0;
let minute = 0;
let hour = 0;
let startT;
start.addEventListener("click", () => {
  clearInterval(startT);
  startT = setInterval(() => {
    second++;
    if (second == 60) {
      second = 0;
      sec.textContent = second;
      minute++;
      if (minute == 60) {
        minute = 0;
        min.textContent = minute;
        hour++;
        if (hour == 60) {
          hour = 0;
          hr.textContent = hour;
        } else hr.textContent = hour;
      } else min.textContent = minute;
    } else sec.textContent = second;
  }, 1000);
});

reset.onclick = () => {
  clearInterval(startT);
  second = 0;
  minute = 0;
  hour = 0;
  sec.textContent = second;
  min.textContent = minute;
  hr.textContent = hour;
};

pause.addEventListener("click", () => {
  clearInterval(startT);
});
