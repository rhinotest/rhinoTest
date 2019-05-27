import React, { Component } from 'react'
import { View, PermissionsAndroid } from 'react-native';
import axios from 'axios';
import { Container, Header, Content, Accordion } from "native-base";

export default class AdminHome extends Component {
  constructor(props){
    super(props);
    this.state = {
      source: null,
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
    // const dataArray = [
    //   { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    //   { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    //   { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
    // ];
   
 
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
      <View>
       
        <Content >
        <Accordion dataArray={dataArray}/>
        </Content>
      </View>
    )
  }
}
