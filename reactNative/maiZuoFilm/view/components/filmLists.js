import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View } from 'react-native';

export default  class FilmLists extends Component {
  // 初始化模拟数据
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {name:"aa",age:20},
        {name:"bbb",age:30},
        {name:"bbb",age:30}
      ])
    };
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <View>
              <Text>{rowData.name}:{rowData.age}</Text>
            </View>}
        />
      </View>
    );
  }
};
