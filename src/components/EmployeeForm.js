import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
      <CardSection>
        <Input
        placeholder='Jane Doe'
        label='Name:'
         value={this.props.name}
         onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
        />
      </CardSection>
      <CardSection>
        <Input
        placeholder='+555-5555'
        label='Phone:'
         value={this.props.phone}
        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
        />
      </CardSection>
      <CardSection style={{ height: 55, alignItems: 'center' }}>
        <Text style={styles.pickerLabelStyle}> Shift: </Text>
        <Picker
          style={{ flex: 2 }}
          selectedValue={this.props.shift}
          onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
        >
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Thursday" value="Thursday" />
          <Picker.Item label="Friday" value="Friday" />
          <Picker.Item label="Saturday" value="Saturday" />
          <Picker.Item label="Sunday" value="Sunday" />
        </Picker>
      </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 20,
    paddingLeft: 5,
    color: '#000',
    flex: 1
  }
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return ({
    name,
    phone,
    shift
  });
 };

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
