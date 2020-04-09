import React, { Component } from 'react';
import "./city.css"
import citydata from "./citydata.js"

class City extends Component {
    state = {
        description: "",
        selectedCity: "",
        isChecked: false,
        video: ""
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

    componentDidMount() {
        fetch('https://api.windy.com/api/webcams/v2/list/country=DE?key=0g3HlpB7OECc0g5zoQU70Pc5SktXe8Kj')
            .then((response) => {
                return response.json();
            })

            .then((data) => {
                console.log(data);
                //  this.setState({ news: newArray });
            })
    };

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


