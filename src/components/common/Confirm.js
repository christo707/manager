import React from 'react';
import { Modal, Text, View } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { textStyle, CardSectionStyle, containerStyle } = styles;
  return (
    <Modal
    animationType="fade"
    onRequestClose={() => {}}
    transparent
    visible={visible}
    >
      <View style={containerStyle}>
        <CardSection style={CardSectionStyle}>
          <Text style={textStyle}> {children} </Text>
        </CardSection>
        <CardSection style={CardSectionStyle}>
          <Button onPress={onAccept}> Yes </Button>
          <Button onPress={onDecline}> No </Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  CardSectionStyle: {
    justifyContent: 'center'
  },
  testStyle: {
    flex: 1,
    fontSize: 20,
    testAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: '#00000075',
    postion: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

export { Confirm };
