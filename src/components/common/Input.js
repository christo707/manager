import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, placeholder, secureTextEntry, onChangeText }) => (
  <View style={styles.ContainerStyle}>
    <Text style={styles.LabelStyle}>
      { label }
    </Text>
    <TextInput
    secureTextEntry={secureTextEntry}
    placeholder={placeholder}
    autoCorrect={false}
    value={value}
    onChangeText={onChangeText}
    style={styles.InputStyle}
    />
  </View>
  );

const styles = {
  InputStyle: {
    color: '#000',
    paddingLeft: 2,
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  LabelStyle: {
    color: '#000',
    fontSize: 20,
    paddingLeft: 5,
    flex: 1
  },
  ContainerStyle: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};


export { Input };
