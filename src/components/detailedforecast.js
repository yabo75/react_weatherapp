import React from 'react';
import DayForecast from './dayforecast';
import NightForecast from './nightforecast';

// class DetailedForecast extends React.Component
const DetailedForecast = (props) => {
 // render() {
   return (
     <div className="details">
      <DayForecast />
      <NightForecast />
    </div>
   )
 // }
}
export default DetailedForecast;
