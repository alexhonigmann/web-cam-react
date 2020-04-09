import React, { Component } from 'react';
import "./city.css"
import citydata from "./citydata.js"

class City extends Component {
    state = {
        description: "",
        selectedCity: "",
        isChecked: false
    }

    // handleClick = (city) => {
    //     this.setState({ description: citydata[city].description });
    //     this.setState({ selectedCity: city });

    handleClick = (city) => {
        this.setState({ description: citydata[city].description });
        this.setState({ selectedCity: citydata[city].name });
        this.setState({ isChecked: true });
    }

    handleBack = () => {
        this.setState({ description: "" });
        this.setState({ selectedCity: "" });
        this.setState({ isChecked: false });
    }


    render() {
        // return ( 
        //     <div className="city-container">
        //     <ul>

        //         <li onClick={() => this.handleClick(0)}>New York</li>
        //         <li onClick={() => this.handleClick(1)}>London</li>
        //         <li onClick={() => this.handleClick(2)}>Paris</li>
        //         <li onClick={() => this.handleClick(3)}>Berlin</li>
        //         {/* <CityItem />
        //         <CityItem />
        //         <CityItem />
        //         <CityItem /> */}
        //     </ul>
        //     <div>
        //         {this.state.description}
        //     </div>
        //     </div>
        //  );


        return (
            <div className="city-container">
                <ul style={{ display: this.state.isChecked ? 'none' : 'block' }} >
                    <li onClick={() => this.handleClick(0)}>New York</li>
                    <li onClick={() => this.handleClick(1)}>London</li>
                    <li onClick={() => this.handleClick(2)}>Paris</li>
                    <li onClick={() => this.handleClick(3)}>Berlin</li>
                </ul>
                <div>
                    <button style={{ display: !this.state.isChecked ? 'none' : 'block' }} onClick={this.handleBack}>back</button>
                    {this.state.selectedCity}
                    {this.state.description}
                </div>
            </div >
        );
    }
}

export default City;


