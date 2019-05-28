import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View} from 'react-native';
import { Text, Content, Accordion } from "native-base";
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