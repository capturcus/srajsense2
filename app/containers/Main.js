import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native'
import AddDataPoint from './AddDataPoint'
import ChooseMeasurement from './ChooseMeasurement'

class Main extends Component {
    render() {
      if (this.props.location === "main") {
        return <ChooseMeasurement />;
      } else {
        return <AddDataPoint />;
      }
    }
  }

const mapStateToProps = function(state) {
  return {location: state.location};
}

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)