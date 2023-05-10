const time = document.querySelector(".Time");
const body = document.querySelector("body");

function showTime() {
  let todate = new Date();
  let h = todate.getHours();
  let m = todate.getMinutes();
  let s = todate.getSeconds();
  let ms = todate.getMilliseconds();

  h = h > 12 ? h - 12 : h;
  session = h > 12 ? "PM" : "AM";
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  ms = ms < 10 ? "00" + ms : ms;
  time.innerText = h + ":" + m + ":" + s + ":" + session;
  setTimeout(showTime, 1000);

  //   styling the clock
  time.style.backgroundColor = "blue";
  time.style.color = "wheat";
  time.style.textAlign = "center";
  time.style.font = "center";
  time.style.fontSize = "5rem";
  time.style.width = "50rem";
  time.style.borderRadius = "1rem";
  time.style.marginLeft = "3rem";
  time.style.marginTop = "3rem";
  time.style.float = "bottom";
  time.style.fontFamily = "digital-7 mono";
  body.style.backgroundColor = "black";
}
showTime();
