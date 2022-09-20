import { useState } from "react";
import axios from "axios";

function App() {
    const [list, setList] = useState([]);

    const [text, setText] = useState("");
    const [weatherObject, setweatherObject] = useState({});

    const key = "ea6674bff7f42d5709e131d72b7ef06e";
    let city = text;
    let units = `metric`;
    let lang = `en`;
      

    return (
        <div className="App">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input
                    type="text"
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                />
                <button
                    onClick={async () => {
                        const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`;
                        let geoData = await axios.get(geoURL);
                        //getting latitude and longitude for weather
                        let latitude = geoData.data[0].lat;
                        let longitude = geoData.data[0].lon;
                        // console.log(latitude, longitude)

                        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=${units}&lang=${lang}`;
                        let weatherData = await axios.get(weatherURL);

                        let {
                          name,
                          main: {
                              feels_like: feelsLike,
                              humidity,
                              pressure,
                              temp,
                              temp_max,
                              temp_min,
                          },
                          weather: {
                              0: { description, icon },
                          },
                          sys: {
                            sunrise,
                            sunset
                          },
                          wind: {
                            speed:windSpeed
                          }
                      } = weatherData.data;

                      const myWeather = {name, feelsLike, humidity, pressure, temp, temp_max, temp_min, description, iconURL:`http://openweathermap.org/img/wn/${icon}@2x.png`, sunrise, sunset, windSpeed}

                        setweatherObject(myWeather);
                        console.log(weatherData.data)

                        setList(weatherObject ? [...list, weatherObject] : list);
                        console.log(text);
                        console.log(list);
                    }}
                >
                    search
                </button>
            </form>
             {list.map((weatherObject, index) => {
                return (
                  
                  <div key={index}> 
                  {/* <div className="weatherTitle">
                    <p>دما</p> 
                    <p>حس</p> 
                    <p>بالا</p> 
                    <p>پایین</p> 
                    <p>رطوبت</p> 
                    <p>سرعت باد</p> 
                    <p>طلوع</p> 
                    <p>غروب</p> 
                    </div> */}
                    <div className="weatherResult">
<p>{weatherObject.feelsLike}</p>
<p>{weatherObject.humidity}</p>
<p>{weatherObject.pressure}</p>
<p>{weatherObject.temp}</p>
<p>{weatherObject.temp_max}</p>
<p>{weatherObject.temp_min}</p>
<p>{weatherObject.description}</p>
<img src={weatherObject.iconURL} alt="weatherICON" />
<p>{weatherObject.sunrise}</p>
<p>{weatherObject.sunset}</p>
<p>{weatherObject.windSpeed}</p>
<p>{weatherObject.name}</p>
                    </div>
                    </div>
                );
            })}

    </div>
    );
}

export default App;





// later on change ley from index to id
// fix empty list rendering
// make every 10sec GET
// optional lang and metric 



