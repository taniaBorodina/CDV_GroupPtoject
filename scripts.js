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

function getWeather() {
  const weatherData = () => {
    fetch("https://danepubliczne.imgw.pl/api/data/synop/id/12330")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Brak odpowiedzi z serwera");
        }
        console.log("Dane z servera OK!");
        return response.json();
      })
      .then((data) => {
        const { stacja, data_pomiaru, suma_opadu, cisnienie, temperatura } =
          data;

        // Formatowanie daty na 'd.m.Y'
        const dataSformatowana = new Date(data_pomiaru);
        const dzien = dataSformatowana.getDate().toString().padStart(2, "0");
        const miesiac = (dataSformatowana.getMonth() + 1)
          .toString()
          .padStart(2, "0");
        const rok = dataSformatowana.getFullYear();
        // przypisywanie danych do span
        document.getElementById("city").textContent = `${stacja}`;
        document.getElementById("date").textContent = `${dzien}.${miesiac}.${rok} r.`;
        document.getElementById("rainfall").textContent = `Opady: ${suma_opadu} mm/h`;
        document.getElementById("pressure").textContent = `Ciśnienie: ${cisnienie} hPa`;
        document.getElementById("temperature").innerHTML = `Temp. ${temperatura} &#176;C`;
      })
      .catch((error) => {
        console.error("Błąd pobierania danych:", error);
      });
  };
  weatherData();
  setInterval(weatherData, 60000);
}
getWeather();
