import React from 'react';

const CityList = (props) => {
    // let counter = 0;
    let cityList = props.cities.map(function(city, index) {
        return (<div className="item" onClick={() => {
            props.changeCity(index);
            // counter++;
        }}>
                <img className="ui avatar image" src={city.photo}/>
                <div className="content">
                <div className="header">{city.name}</div>
                </div>
            </div>)})
    return(
        <div className="ui middle aligned selection list">
            {cityList}
        </div>
    );
}

export default CityList;