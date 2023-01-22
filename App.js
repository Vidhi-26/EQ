import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatListItem from './src/components/ChatListItem';
import ChatsScreens from './src/screens/ChatsScreen';
import ChatScreens from './src/screens/ChatScreen';
import Navigator from './src/navigation';

const chat= {
  id:"1",
  user:{
    image:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
    name:"Shreyas",
  },
  lastMessage:{
    text:"Oke",
    createdAt: "07:30",
  },
};
export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 30,
  },
});
