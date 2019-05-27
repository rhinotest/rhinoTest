import React, { Component } from 'react'
import { View, PermissionsAndroid } from 'react-native';
import axios from 'axios';
import { Text,Container, Header, Content, Accordion } from "native-base";

export default class AdminHome extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:'',
    }
  }

  componentDidMount() {
    axios.get('https://rhinotest.github.io/rhinoTest/LibraryList.json')
    .then(response => {
      console.log(response.data,'response.data');
      this.setState({data:response.data})
    })
    .catch(error => {
      console.log(error);
    });
  }
 

  render() {
 
    const data = this.state.data
        let dataArray = [];
        if (data !== undefined && data.length > 0) {
          data.map((item) => {
            dataArray.push({
              title: item.title,
              content: item.description
            })
          })  
        }
    
    console.log('sasassa',this.state.data );
    return (
        <Content style={{padding: 0, width:'100%', marginTop:"10%"}} >
          <View style={{ alignItems: 'center'}}> 
            <Text>Tech Stack</Text>
          </View>
          <Accordion dataArray={dataArray}/>
        </Content>
    )
  }
}
