import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

class App extends React.Component {
  static navigationOptions = {
    title: 'Static Home',
    headerStyle: {
      backgroundColor: 'orange', // Main color
      borderTopWidth: 24,
      borderTopColor: 'red', // StatusBar color,
      height: 70
    },
  };
  render() {
    console.log("Hello Typescript");
    return (
      <View style={styles.container}>
        <Text>Typescript!</Text>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SimpleApp = StackNavigator({
  Home: { 
    screen: App,
    navigationOptions: {
      title: 'Static Home',
      headerStyle: {
        backgroundColor: 'orange', // Main color
        borderTopWidth: 24,
        borderTopColor: 'red', // StatusBar color,
        height: 70
      },
    }
  }
});

export default SimpleApp;
