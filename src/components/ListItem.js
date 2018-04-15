import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from './common';

class ListItem extends Component {

  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee.item });
  }

  render() {
    const { textStyle } = styles;
    const { name } = this.props.employee.item;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <Card>
            <CardSection>
              <Text style={textStyle}> { name } </Text>
            </CardSection>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 20,
    padding: 5,
    color: '#000'
  }
};

export default ListItem;
