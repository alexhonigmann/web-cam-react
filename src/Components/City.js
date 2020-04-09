import React, { Component } from 'react';
import "./city.css"
import citydata from "./citydata.js"
import NewsUsa from "./NewsUsa"
import NewsGermany from './NewsGermany';
import NewsGB from './NewsGB';
import NewsFrance from './NewsFrance';
import "./news.css"

class City extends Component {
    state = {
        data: citydata,
        description: "",
        selectedCity: "",
        isChecked: false,
        selectedNews: "",
        display: true,
    }

    // handleClick = (city) => {
    //     this.setState({ description: citydata[city].description });
    //     this.setState({ selectedCity: city });

    handleClick = (city) => {
        this.setState({ description: citydata[city].description });
        this.setState({ selectedCity: citydata[city].name });
        this.setState({ isChecked: true });
        this.setState({ selectedNews: citydata[city].fetch });
        this.setState({ display: false });

    }

    handleBack = () => {
        this.setState({ description: "" });
        this.setState({ selectedCity: "" });
        this.setState({ isChecked: false });
        this.setState({ display: true });

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
                <div className={this.state.display ? "none" : "news"} >
                    <NewsUsa />

                </div>
                <div className={this.state.display ? "none" : "news"} >
                    <NewsGB />
                </div>
                <div className={this.state.display ? "none" : "news"} >
                    <NewsFrance />
                </div>
                <div className={this.state.display ? "none" : "news"} >
                    <NewsGermany />
                </div>

            </div >
        );
    }
}

export default City;


