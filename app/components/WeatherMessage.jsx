var React = require('react');

var WeatherMessage = ({city, temp}) => {
  return (
    <div>
      <h3 className="text-center">It is {temp} in {city}</h3>
    </div>
  );
}

module.exports = WeatherMessage;
