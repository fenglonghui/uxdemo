/*
 * 编辑
 * @Author: 
 * @Date: 2021-01-27 11:18:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-01-30 12:02:48
 * @Description: 
 */
import React from 'react';
import {View, Button, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {changeName} from '../action/actions';

@connect()
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
                        this.props.dispatch(changeName(this.props.route.params.post, this.state.postText))
                        this.props.navigation.goBack();
                    }}
                />
            </View>
        );
    }
}

