const key = `ea6674bff7f42d5709e131d72b7ef06e`;

const IDtoData = (id, data) => {
  document.getElementById(id).innerHTML = data
}

const Transmission = (obj) => {
IDtoData("city", obj["name"]);
IDtoData("weather-descr", obj["weather"][0]["description"]);
IDtoData("temp", obj["main"]["temp"]);
IDtoData("feel-like", obj["main"]["feels_like"]);
IDtoData("temp-max", obj["main"]["temp_max"]);
IDtoData("temp-min", obj["main"]["temp_min"]);
IDtoData("humidity", obj["main"]["humidity"]);
IDtoData("windspeed", obj["wind"]["speed"]);
IDtoData("sunrise", new Date(obj["sys"]["sunrise"]*1000).toLocaleString("en-US", { hour: '2-digit', minute: '2-digit', second:`2-digit`}));
IDtoData("sunset", new Date(obj["sys"]["sunset"]*1000).toLocaleString("en-US", { hour: '2-digit', minute: '2-digit', second:`2-digit`}));
}

const GeoWeather = (lat, lon) => {
  let units = `metric`;
  let lang = `fa`;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`
  )
  .then( (resp) => resp.json())
  .then( (data) => Transmission(data))
  .catch(console.error())
}

const GetLocation = (city) => {
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`
  )
  .then( (resp) => resp.json())
  .then( (data) => {
    GeoWeather(data[0].lat, data[0].lon)
  })
  .catch(console.error())
}

const GetIcon = (city) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
  )
  .then( (resp) => resp.json())
  .then( (data) => console.log(data))
}


const Display = (element, displayProperty) => {
  const myElement = document.querySelector(element);
  const computedDisplay = window.getComputedStyle(myElement).display;
  (computedDisplay === "none") && (myElement.style.display = displayProperty);
}

const AppWeather = () => {
  let n = document.getElementById("input-city").value
  GetLocation(n)
  GetIcon(n)// for later update
  Display("main", "block")
}

