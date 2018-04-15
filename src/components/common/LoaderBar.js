import React, { Component } from 'react';
import { Modal, View, Text } from 'react-native';
import { Bars } from 'react-native-loader';

class LoaderBar extends Component {

  render() {
    return (
      <View>
      <Modal
            animationType="fade"
            transparent
            visible={this.props.visible}
            onRequestClose={() => {}}
      >
        <View style={styles.loading}>
          <Bars size={30} color="#007aff" />
          <Text style={styles.loadingTextStyle}> {this.props.text} </Text>
        </View>
        </Modal>
      </View>
    );
}

}

const styles = {
  loadingTextStyle: {
     color: '#000',
     fontSize: 12,
  },
  loading: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF75'
  }
};

export { LoaderBar };
