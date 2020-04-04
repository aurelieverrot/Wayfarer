import React from 'react';
import CityList from '../../components/CityList/CityList';
import City from '../../components/City/City';

class CityContainer extends React.Component {

    state = {
        cityList: [
            {
                name: "San Francisco",
                country: "United States of America",
                photo: "https://sfchamber.com/wp-content/uploads/2017/11/merlin_136702122_448a1ddc-b5e9-4303-bc0d-701c9addf3f3-superJumbo.jpg",
              },
              {
                name: "New York City",
                country: "United States of America",
                photo: "https://blog-www.pods.com/wp-content/uploads/2019/04/MG_1_1_New_York_City-1.jpg",
              },
              {
                name: "Lyon",
                country: "France",
                photo: "https://www.radiologyintl.com/_webedit/cached-images/547-820-547-0-0-820-547.jpg",
              },
              {
                name: "Sacramento",
                country: "United States of America",
                photo: "https://cdngeneral.rentcafe.com/dmslivecafe/3/20424/Sacramento%20River%20with%20yellow%20bridge.jpg?crop=(0,70,300,200)&cropxunits=300&cropyunits=200&quality=85&scale=both&",
              },
        ],
        cityIndex: 0
    }

  componentDidMount() {
        // fetch the cities from database (city index)

        // set state, res.data.cities => this.state.cityList
    }

  render() {

    return(
        <div className="cityContainer">
            <CityList cities={this.state.cityList}/>
            <City city={this.state.cityList[this.state.cityIndex]}/>
        </div>
    )
  }
}

export default CityContainer;