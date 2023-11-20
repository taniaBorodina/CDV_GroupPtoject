function legenda() {
  let x = document.getElementById("santaLegend");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function countDownFun() {
  let countDate = new Date("December 24, 2023 00:00:00").getTime();
  let curTime = new Date().getTime();
  let dif = countDate - curTime;
  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let txtDay = Math.floor(dif / day);
  let txtHour = Math.floor((dif % day) / hour);
  let txtMinute = Math.floor((dif % hour) / minute);
  let txtsecond = Math.floor((dif % minute) / second);

  document.querySelector(".day").innerText = txtDay;
  document.querySelector(".hours").innerText = txtHour;
  document.querySelector(".minute").innerText = txtMinute;
  document.querySelector(".sec").innerText = txtsecond;
}

setInterval(countDownFun, 1000);
