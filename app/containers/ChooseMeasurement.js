import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native'

class ChooseMeasurement extends Component {
    render() {
      return (
        <View>
            <Button
                onPress={this.props.goToAddDataPoint}
                title="add a data point"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Text>choose measurement</Text>
        </View>
      );
    }
  }

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    goToAddDataPoint: () => dispatch({type: "GO_TO_ADDDATAPOINT"})
})

export default connect(mapStateToProps, mapDispatchToProps)(ChooseMeasurement)