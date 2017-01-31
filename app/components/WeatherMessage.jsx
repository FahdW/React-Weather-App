var React = require('react');

var WeatherMessage = ({city, temp}) => {
  return (
    <div>
      <h2>It is {temp} in {city}</h2>
    </div>
  );
};

module.exports = WeatherMessage;
