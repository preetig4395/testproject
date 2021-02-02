import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default (props) => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri:
              'https://cdn0.iconfinder.com/data/icons/superuser-web-kit/512/talk_chat-512.png',
          }}
        />
        <Text>Intricits omt</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.bigText}>Sign In</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.inputfield} />
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.inputfield} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('chat')}>
          <Text style={styles.signtext}>SignIn</Text>
        </TouchableOpacity>
        <Text style={styles.signup}>SignUp</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
  },
  label: {
    color: '#5acace',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    alignItems: 'center',
    display: 'flex',
  },
  form: {
    padding: 40,
  },
  inputfield: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    marginBottom: 20,
  },
  bigText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  button: {
    backgroundColor: '#5acace',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    padding: 20,
  },
  signtext: {
    color: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
  },
  signup: {
    color: '#5acace',
    textAlign: 'center',
    marginTop: 12,
  },
});
