// import React, { Component } from 'react'
// import { View, PermissionsAndroid } from 'react-native';
// import axios from 'axios';
// import { Text,Container, Header, Content, Accordion } from "native-base";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";

// import { requestApiData } from "../../actions";
// class AdminHome extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       data:'',
//     }
//   }

//   componentDidMount() {
//     axios.get('https://rhinotest.github.io/rhinoTest/LibraryList.json')
//     .then(response => {
//       console.log(response.data,'response.data');
//       this.setState({data:response.data})
//     })
//     .catch(error => {
//       console.log(error);
//     });
//   }
 

//   render() {
 
//     const data = this.state.data
//         let dataArray = [];
//         if (data !== undefined && data.length > 0) {
//           data.map((item) => {
//             dataArray.push({
//               title: item.title,
//               content: item.description
//             })
//           })  
//         }
    
//     console.log('sasassa',this.state.data );
//     return (
//         <Content style={{padding: 0, width:'100%', marginTop:"10%"}} >
//           <View style={{ alignItems: 'center'}}> 
//             <Text>Tech Stack</Text>
//           </View>
//           <Accordion dataArray={dataArray}/>
//         </Content>
//     )
//   }
// }


// export default connect(null, null)(AdminHome);

import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import connect from "react-redux/es/connect/connect";

import { View, PermissionsAndroid } from 'react-native';
import { Text,Container, Header, Content, Accordion } from "native-base";
import { requestApiData } from "../../actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.requestApiData();
  }

  loadTemplates(results) {
    let dataArray = [];
    if (results !== undefined && results.length > 0) {
      results.map((item) => {
          dataArray.push({
            title: item.title,
            content: item.description
          })
        }) 
        return (
        <Accordion dataArray={dataArray}/>
        );
    } else {
      return [];
    }
  }

 

  render() {
    const results = this.props.data;
    console.log(results,'results');
    
    return (
      <Content style={{width:'100%', marginTop:'5%'}}>
        <View style={{alignItems:'center'}}>
        <Text>Tech Stack</Text>
        </View>
        {this.loadTemplates(results)}
      </Content>
      )
      ;
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);