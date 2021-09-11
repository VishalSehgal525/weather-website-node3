const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=017ce9fabbd1b34f76ffdf6def5fb209&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to locate weather services!", undefined);
    } else if (body.error) {
      callback("Unable to find location!", undefined);
    } else {
      callback(
        undefined,
        `${body.current.temperature}` + String.fromCharCode(176) + "C",
        body.current.weather_descriptions[0],
        "Humidity: " + body.current.humidity,
        "Wind Speed: " + body.current.wind_speed + "km/h"
      );
    }
  });
};

module.exports = forecast;
