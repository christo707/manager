import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import _ from 'lodash';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { employeesFetch, logout } from '../actions';
import ListItem from './ListItem';
import { LoaderBar, LogoutButton } from './common';

class EmployeeList extends Component {

  componentDidMount() {
    this.props.employeesFetch();
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.props.logout();
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    this.employeesList = nextProps.employees;
  }

  renderItem = (employee) => (
    <ListItem employee={employee} />
  );

  render() {
    return (
      <View style={{ flex: 1 }}>
      <View style={{ flex: 0.9 }}>
      <FlatList
        data={this.props.employees}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <LoaderBar visible={this.props.loading} text='Loading...' />
      </View>
      <View style={{ flex: 0.1, paddingBottom: 5 }}>
        <LogoutButton onPress={() => firebase.auth().signOut()}> LogOut </LogoutButton>
      </View>
      </View>
    );
  }
}


const mapStateToProps = state => {
  const employees = _.map(state.employeesList.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees, loading: state.employeesList.loading };
 };

export default connect(mapStateToProps, { employeesFetch, logout })(EmployeeList);
