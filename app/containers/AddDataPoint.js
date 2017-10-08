import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, TextInput } from 'react-native'

class Feature extends Component {
    constructor(props) {
        super(props);
        this.state = {options: []};
    }
    render() {
        return <View>
            <TextInput
                style={{height: 40}}
                placeholder="feature name"
            />
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                <TextInput
                    style={{height: 40, width: "50%"}}
                    placeholder="feature option"
                />
                <Button
                    title="add"
                />
                {this.state.options}
            </View>
        </View>;
    }
}

class AddDataPoint extends Component {
    constructor(props) {
        super(props);
        this.state = {features: [<Feature />]}
    }
    render() {
        //feature: name, type, [list of possibilities]
        var that = this;
        return <View>
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                <Button
                    title="back"
                    onPress={this.props.goToMain}
                />
                <Button
                    title="add data point"
                />
                <Button
                    title="add a feature"
                    onPress={function(){
                        var newFeatures = that.state.features.slice();
                        newFeatures.push(<Feature />);
                        that.setState({features: newFeatures})
                    }}
                />
            </View>
            {this.state.features}
        </View>;
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch) => ({
    goToMain: () => dispatch({type: "GO_TO_MAIN"})
})

export default connect(mapStateToProps, mapDispatchToProps)(AddDataPoint)