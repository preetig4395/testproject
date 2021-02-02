import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

export default () => {
  const dispatch = useDispatch();
  const {chats} = useSelector((state) => state.chats);
  useEffect(() => {
    async function getChat() {
      dispatch({type: 'GET_CHATS'});
    }
    getChat();
  }, []);
  console.log(chats, 'chatsssss');
  return (
    <View style={styles.container}>
      <Text style={styles.uppertext}>John Smith</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.chatsection}>
          {chats?.map((chat) => {
            if (chat.from === 'jid_1109') {
              return (
                <View style={styles.leftChat}>
                  <Text style={styles.lefttext}>{chat.text}</Text>
                </View>
              );
            } else if (chat.from === 'jid_1111') {
              return (
                <View style={styles.rightchat}>
                  <Text style={styles.righttext}>{chat.text}</Text>
                </View>
              );
            }
          })}

          <View style={styles.belowField}>
            <TextInput style={styles.inputfield} value="Type here.." />
            <Image
              style={styles.tinyLogo}
              source={{
                uri:
                  'https://icon-library.com/images/sent-message-icon/sent-message-icon-1.jpg',
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    position: 'relative',
  },
  uppertext: {
    borderBottomWidth: 1,
    textAlign: 'center',
    padding: 6,
  },
  leftChat: {
    backgroundColor: '#5acace',
    width: 230,
    borderRadius: 12,
    padding: 12,
    // height: 60,
    marginBottom: 20,
  },
  chatsection: {
    flex: 1,
    padding: 12,
    marginVertical: 30,
  },
  rightchat: {
    backgroundColor: '#fff',
    borderWidth: 2,
    width: 230,
    borderRadius: 12,
    borderColor: '#5acace',
    height: 60,
    padding: 12,
    alignSelf: 'flex-end',
    marginBottom: 18,
  },
  lefttext: {
    color: '#fff',
  },
  righttext: {
    color: '#5acace',
  },
  leftChatheight: {
    backgroundColor: '#5acace',
    width: 230,
    borderRadius: 12,
    padding: 12,
    height: 120,
    marginBottom: 20,
  },
  rightchatheight: {
    backgroundColor: '#fff',
    borderWidth: 2,
    width: 230,
    borderRadius: 12,
    borderColor: '#5acace',
    height: 95,
    padding: 12,
    alignSelf: 'flex-end',
    marginBottom: 18,
  },
  inputfield: {
    borderWidth: 1,
    borderTopColor: '#ccc',
    height: 40,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  tinyLogo: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 0,
    top: 14,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
