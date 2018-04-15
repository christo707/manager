import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { LoaderBar, Input, Card, CardSection, Button } from './common';
import { emailChange, passwordChange, loginUser } from '../actions';

class LoginForm extends Component {

onEmailChanged(email) {
  this.props.emailChange(email);
}

onPasswordChanged(pass) {
  this.props.passwordChange(pass);
}

onButtonPress() {
  const { email, password } = this.props;
  this.props.loginUser({ email, password });
}

renderError() {
  if (this.props.error) {
    return (
      <View style={{ backgroundColor: '#FFF' }}>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
      </View>
    );
  }
}

  render() {
    return (
      <View style={{ flex: 1 }}>
      <Card>
        <CardSection>
          <Input
          placeholder='xyz@gmail.com'
          label='Email:'
          value={this.props.email}
          onChangeText={this.onEmailChanged.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
          secureTextEntry
          placeholder='password'
          label='Password:'
          value={this.props.password}
          onChangeText={this.onPasswordChanged.bind(this)}
          />
        </CardSection>
        <CardSection>
          {this.renderError()}
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)} > Log In </Button>
        </CardSection>
      </Card>
      <LoaderBar visible={this.props.loading} text='Loading...' />
     </View>
    );
  }
}

const styles = {
  errorTextStyle: {
     color: 'red',
     fontSize: 20,
     alignSelf: 'center',
     alignItems: 'center'
  },
};

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error,
  loading: state.auth.loading
});

export default connect(mapStateToProps, { emailChange, passwordChange, loginUser })(LoginForm);
