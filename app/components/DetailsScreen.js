/*
 * 详情
 * @Author: ""
 * @Date: 2021-02-04 11:15:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-05 11:50:34
 * @Description:
 */
import React, {Component} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import StoreConnect from '../store/StoreConnect';

@StoreConnect((state) => ({
  user: state.user,
}))
export default class DetailsScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'gray',
        }}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={this.props.user}
          renderItem={({item}) => (
            <View>
              <Text>{item.id}</Text>
              <Text>{item.name}</Text>
              <Text>{item.sex}</Text>
              <Text>{item.age}</Text>
              <Button
                title="修改姓名"
                onPress={() => {
                  this.props.navigation.navigate('Edit', {
                    post: item.id,
                  });
                }}
              />
            </View>
          )}
        />
      </View>
    );
  }
}
