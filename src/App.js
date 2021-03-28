import React from 'react';
import './App.css';
import CitySearch from './app/components/citySearch'
import ChartComponent from './app/components/chartComponent'
import {connect} from "react-redux";

function App() {
    return (
        <div className="App">
            <CitySearch/>
            <ChartComponent/>
        </div>
    );
}
const mapStateToProps = (state) => ({townFound: state.townFound});

export default connect(mapStateToProps)(App)
