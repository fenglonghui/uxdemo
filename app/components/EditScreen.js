/*
 * 编辑
 * @Author:
 * @Date: 2021-02-04 11:18:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-05 11:38:59
 * @Description:
 */
import React from 'react';
import {View, Button, TextInput} from 'react-native';
import StoreConnect from '../store/StoreConnect';

@StoreConnect()
export default class EditScreen extends React.Component {
  constructor() {
    super();
    this.state = {postText: ''};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'gray'}}>
        <TextInput
          multiline
          placeholder="请输入新用户名"
          value={this.state.postText}
          onChangeText={(text) => this.setState({postText: text})}
        />
        <Button
          title="提交修改"
          onPress={() => {
            this.props.changeName(
              this.props.route.params.post,
              this.state.postText,
            );
            this.props.navigation.goBack();
          }}
        />
      </View>
    );
  }
}
