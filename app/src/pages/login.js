import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
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
    return (
      <View style={styles.container}>
        <Text>Login</Text>
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
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray'
  },
  input: {
    width: 250,
    backgroundColor: 'red',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 4
  },
  a: {
    width: 500
  }
});
