import React from 'react';

const CityList = (props) => {
    let cityList = props.cities.map(city => {
        return (<div className="item">
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