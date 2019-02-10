import React, { Component } from 'react';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {temp: 0, city: '', listitem: [], displayc: ''};
    }

    fetchWeather = (e) => {
        e.preventDefault();
        fetch ('http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+'&units=Metric&APPID=f3139d9f8a64cc9cf04a4b6425aaa543')
        .then(response => response.json())
        .then(responseData => {
            this.setState ({
                temp: responseData.main.temp,
                displayc: this.state.city,
            })
        })
        .catch(err => console.error(err));
       
    }
    handleChange = (e) => {
        this.setState({
            city: e.target.value
        });
    }
    addListitem = (e) => {
        e.preventDefault();
        const object = {displayc: this.state.displayc, temp: this.state.temp}
        this.setState({
            listitem: [...this.state.listitem, object]
        });
    }

    render() {
        return (
            <div>
                <h2>Search for city</h2>
                <input type="text" onChange={this.handleChange} />
                <input type ="submit" onClick={this.fetchWeather} value="Search" />
                <div>Temperature of {this.state.displayc} {this.state.temp}&#8451;</div>
                <h2>Save searched cities</h2>
                <input type ="submit" onClick={this.addListitem} value="Save"/>

                <table className="table">
                <thead>
                    <tr>
                        <td>City</td>
                        <td>Temperature</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.listitem.map((item,index) =>
                        <tr key ={index}>
                        <td>{item.displayc}</td>
                        <td>{item.temp}&#8451;</td>
                        </tr>
                        )}
                </tbody>
                </table>

            </div>
        );
    }
}

export default Weather;