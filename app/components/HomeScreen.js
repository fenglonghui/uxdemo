/*
 * @Author:
 * @Date: 2021-02-04 11:23:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-05 11:38:37
 * @Description:
 */
import React from 'react';
import {View, Text, Button} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'gray',
        }}>
        <Text>Home Screen</Text>
        <Button
          title="进入详情页"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}