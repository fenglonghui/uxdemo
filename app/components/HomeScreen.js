/*
 * @Author:
 * @Date: 2021-02-04 11:23:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-06 20:07:28
 * @Description:
 */
import React from 'react';
import {View, TextInput, Text, Button} from 'react-native';
import StoreConnect from '../store/StoreConnect';

@StoreConnect()
export default class HomeScreen extends React.Component {
    state = {
        listName: ''
    }

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
        <TextInput
            multiline
            placeholder="请输入列表名"
            value={this.state.listName}
            onChangeText={(text) => this.setState({listName: text})}
        />
        <Button
          title="提交列表名"
          onPress={() => this.props.saveListName(this.state.listName)}
        />
      </View>
    );
  }
}
