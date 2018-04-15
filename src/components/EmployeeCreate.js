import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Keyboard } from 'react-native';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button } from './common';
import { employeeCreate, employeeCreateStart } from '../actions';

class EmployeeCreate extends Component {

componentDidMount() {
  this.props.employeeCreateStart();
}

onButtonPress() {
  Keyboard.dismiss();
  const { name, phone, shift } = this.props;
  this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
}

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
            <Button onPress={this.onButtonPress.bind(this)} > Create </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return ({
    name,
    phone,
    shift
  });
 };

export default connect(mapStateToProps, { employeeCreate, employeeCreateStart })(EmployeeCreate);
