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
        video: "",
        youtube: false,
        selectedNews: "",
        display0: true,
        display1: true,
        display2: true,
        display3: true,
        video: ""
    }


    handleClick = (city) => {
        this.setState({ description: citydata[city].description });
        this.setState({ selectedCity: citydata[city].name });
        this.setState({ isChecked: true });
        this.setState({ youtube: true });
        this.setState({ video: citydata[city].youtube })
        this.setState({ selectedNews: citydata[city].fetch });
        if (city === 0) {
            this.setState({ display0: !this.state.display0 });
        } else if (city === 1) {
            this.setState({ display1: !this.state.display1 });
        } else if (city === 2) {
            this.setState({ display2: !this.state.display2 });
        } else if (city === 3) {
            this.setState({ display3: !this.state.display3 });
        }

        console.log(city)

    }

    handleBack = () => {
        this.setState({ description: "" });
        this.setState({ selectedCity: "" });
        this.setState({ isChecked: false });
        this.setState({ youtube: false });
        this.setState({ video: "" })
        this.setState({ display0: true });
        this.setState({ display1: true });
        this.setState({ display2: true });
        this.setState({ display3: true });

    }

    componentDidMount() {
        fetch('https://api.windy.com/api/webcams/v2/list/country=DE?key=0g3HlpB7OECc0g5zoQU70Pc5SktXe8Kj')
            .then((response) => {
                return response.json();
            })

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
                <div className={this.state.display0 ? "none" : "news0"} >
                    <NewsUsa />

                </div>
                <div className={this.state.display1 ? "none" : "news1"} >
                    <NewsGB />
                </div>
                <div className={this.state.display2 ? "none" : "news2"} >
                    <NewsFrance />
                </div>
                <div className={this.state.display3 ? "none" : "news3"} >
                    <NewsGermany />
                </div>

            </div >


        );
    }
}

export default City;


