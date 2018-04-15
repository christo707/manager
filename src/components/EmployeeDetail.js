import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class EmployeeDetail extends Component {

  render() {
    return (
      <View>
        <Text> Employee Detail</Text>
        <Text> Employee Detail</Text>
        <Text> Employee Detail</Text>
        <Text> Employee Detail</Text>
        <Text> Employee Detail</Text>
        <Text> Employee Detail</Text>
        <Text> Employee Detail</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
   user: state.user,
 });

export default connect(mapStateToProps)(EmployeeDetail);
