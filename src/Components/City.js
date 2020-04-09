import React, { Component } from 'react';
import "./city.css"
import citydata from "./citydata.js"

class City extends Component {
    state = {
        description: "",
        selectedCity: "",
        isChecked: false,
        video: "",
        youtube: false
    }


    handleClick = (city) => {
        this.setState({ description: citydata[city].description });
        this.setState({ selectedCity: citydata[city].name });
        this.setState({ isChecked: true });
        this.setState({ youtube: true });
        this.setState({ video: citydata[city].youtube })
    }

    handleBack = () => {
        this.setState({ description: "" });
        this.setState({ selectedCity: "" });
        this.setState({ isChecked: false });
        this.setState({ youtube: false });
        this.setState({ video: "" })

    }

    render() {

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

                <div className="youtube">
                    <iframe width="560" height="430" src={this.state.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div >


        );
    }
}

export default City;


