import * as React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";
import {getWeather} from "../actions";
import {BarChart, Bar, XAxis, YAxis} from 'recharts';

class ChartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const {weatherData,townFound} = this.props;
        const data = weatherData.map((item)=>{return {name:item.dt_txt.slice(5,10),temp:item.main.temp}});
        return (
            <span>
                {townFound?(<BarChart width={600} height={300} data={data}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Bar dataKey="temp" barSize={30} fill="#8884d8"/>
                </BarChart>):(null)}
            </span>
        );
    }
}

const mapStateToProps = (state) => ({weatherData: state.weatherData, townFound:state.townFound})

export default connect(mapStateToProps, {getWeather})(ChartComponent)
