import { useState } from "react";
import ThemeButton from "./ThemeButton";
import { Weather } from "./Weather";

function App() {
  const weatherKey = process.env.REACT_APP_WEATHER_KEY;
  const [theme, setTheme] = useState("light");
  const [status, setStatus] = useState("Enter City")
  const [data, setData] = useState({});

  const handleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  }

  const getWeather = (city) => {
    setStatus("Fetching");
    fetch(`https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${city}&aqi=no`)
      .then((response) => response.json())
      .then((json) => {
        try {
          setStatus(`${json.location.name}, ${json.location.country}`);
          setData(json);
          console.log(json);
          document.getElementById("status").classList.add("moving");
        }
        catch {
          setStatus("Unknown Place");
        }
      });
  }

  return (
    <div className={`content ${theme}`} style={{ width: "100vw", height: "100vh", marginLeft: '-8px' }}>
      <header>
        <ThemeButton onClick={handleTheme} theme={theme} />
        <h1>Weather App</h1>
      </header>
      <Weather theme={theme} onSend={getWeather} data={data} status={status} />
      <h3 style={{ float: 'right', paddingRight: '25px' }}>Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a></h3>
    </div>
  );
}

export default App;
