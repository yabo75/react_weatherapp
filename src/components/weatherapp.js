import React from 'react';
import Days from './days';
import DetailedForecast from './detailedforecast';
import '../css/weather-app.css';
class WeatherApp extends React.Component {
  today() {
    return new Date().toLocaleDateString('en-US',
       {
    	     weekday: 'long',
          month: 'short',
          day: 'numeric'
       });
 }
 render() {
    return (
       <main>
         <Days cityState={this.props.match.params.weatherId} />
          <DetailedForecast />

     </main>
   )
 }
}
export default WeatherApp;
