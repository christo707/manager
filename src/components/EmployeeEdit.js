import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Keyboard } from 'react-native';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button, Confirm } from './common';
import { employeeUpdate, employeeEdit, employeeDelete } from '../actions';

class EmployeeEdit extends Component {

  state = { showModal: false };

  componentDidMount() {
    _.each(this.props.employee, (value, prop) => {
        this.props.employeeUpdate({ prop, value });
    });
  }

onButtonPress() {
  Keyboard.dismiss();
  const { name, phone, shift } = this.props;
  this.props.employeeEdit({ name, phone, shift, uid: this.props.employee.uid });
}

onTextButtonPress() {
  const { name, phone, shift } = this.props;
  Communications.text(phone, `Hey ${name} your upcoming Shift is on ${shift}`);
}

onFireButtonPress() {
  this.setState({ showModal: !this.state.showModal });
}

onAccept() {
  this.props.employeeDelete({ uid: this.props.employee.uid });
}

onDecline() {
  this.setState({ showModal: false });
}

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
            <Button onPress={this.onButtonPress.bind(this)} > Save Changes </Button>
        </CardSection>
        <CardSection>
            <Button onPress={this.onTextButtonPress.bind(this)} > Text Employee </Button>
        </CardSection>
        <CardSection>
            <Button onPress={this.onFireButtonPress.bind(this)} > Fire Employee </Button>
        </CardSection>
        <Confirm
        visible={this.state.showModal}
        onAccept={this.onAccept.bind(this)}
        onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to fire {this.props.name}
        </Confirm>
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

export default connect(mapStateToProps, { employeeUpdate, employeeEdit, employeeDelete })(EmployeeEdit);
