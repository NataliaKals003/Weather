import "./styles.css";

import dropLight from "../../assets/svg/drop_light.svg";
import windLight from "../../assets/svg/wind_light.svg";
import sunDimLight from "../../assets/svg/sun_dim_light.svg";
import cloudRainLight from "../../assets/svg/cloud_rain_light.svg";
import thermometerSimpleLight from "../../assets/svg/thermometer_simple_light.svg";

import { WeatherItem } from "../WeatherItem";
import { WeatherDetailsResponseProps } from "../../services/getWeatherByCity";

interface Props {
  data: WeatherDetailsResponseProps;
}

export function Details({ data }: Props) {
  return (
    <section className="weather-detail">
      <h1>Today's Weather Details</h1>

      <div className="weather-items">
        <WeatherItem
          icon={thermometerSimpleLight}
          title="Feels like"
          value={`${data.feels_like}ºc`}
        />

        <WeatherItem
          icon={cloudRainLight}
          title="Rain probability"
          value={`${data.probability}%`}
        />

        <WeatherItem
          icon={windLight}
          title="Wind speed"
          value={`${data.wind_speed} Km/h`}
        />

        <WeatherItem
          icon={dropLight}
          title="Air humidity"
          value={`${data.humidity}%`}
        />

        <WeatherItem
          icon={sunDimLight}
          title="Temperature variation"
          value={data.temp_kf.toString()}
        />
      </div>
    </section>
  );
}
