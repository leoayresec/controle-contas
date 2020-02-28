import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Tabs from './src/config/routes';

export default class App extends React.PureComponent {
  render() {
    return (
      <Tabs/>

    );
  };
};