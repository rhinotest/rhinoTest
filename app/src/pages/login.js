import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert,YellowBox } from 'react-native';
import data from '../../data/data';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: null,
      passwor: null
    }
  }

  login = () => {
    const { email, password } = this.state;
    const { navigate } = this.props.navigation;
    if(!email || !password) {
      Alert.alert('Inputs cannot be empty');
    }
    var results = data.filter(function (entry) { return entry.email === email && entry.password === password });
    if(results.length != 1) {
      Alert.alert('Invalid credentials');
    } else {
      const page = results[0].type === 'admin'? "AdminHome": "UserHome"
      navigate(page);
    }
  }

  render() {
    YellowBox.ignoreWarnings(['Remote debugger']);
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center',marginTop:'10%'}}> 
          <Text>Authentication</Text>
        </View>
        <TextInput
          placeholder="email"
          style={styles.input}
          onChangeText={(email) => this.setState({email})}
        />
        <TextInput
          placeholder="password"
          style={styles.input}
          type="password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
        />
         <Button
          onPress={this.login}
          title="Login"
        /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  input: {
    width: 250,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 4,
    
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  a: {
    width: 500
  }
});
