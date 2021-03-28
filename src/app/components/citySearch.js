import * as React from 'react';
import { Component } from 'react';
import {getWeather} from "../actions";
import {connect} from 'react-redux'


class CitySearch extends Component {
    constructor(props) {
    super(props);
    this.state = {
        alertState:false
    };
}

render() {
    const {townFound} = this.props;
    const {alertState} = this.state;

    return (
        <span>
            <input id='townName'/>
            <button onClick={()=>{this.props.getWeather(document.getElementById('townName').value); this.setState({alertState: true})}}>Search</button>
            <label style={{
                display:!alertState?"none":townFound?"none":"block"
            }}>City not found</label>
        </span>
    );
}
}

const mapStateToProps  = (state) => ({townFound:state.townFound})

export default connect(mapStateToProps, {getWeather})(CitySearch)

