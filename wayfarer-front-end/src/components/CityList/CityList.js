import React from 'react';
import {Link} from 'react-router-dom';

const CityList = (props) => {
    // let counter = 0;
    let cityList = props.cities.map(function(city, index) {
        return (<Link className="item" to={{
            pathname:`/cities/${city.name.replace(/\s+/g,'-').toLowerCase()}`
        }}
        // onClick={() => {
        //     // props.changeCity(index);
        //     // redirect

        // }}
        >
                <img className="ui avatar image" src={city.photo}/>
                <div className="content">
                <div className="header">{city.name}</div>
                </div>
            </Link>)})
    return(
        <div className="ui middle aligned selection list">
            {cityList}
        </div>
    );
}

export default CityList;