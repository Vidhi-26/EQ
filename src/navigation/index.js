import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator}  from '@react-navigation/native-stack'
import ChatScreens from '../screens/ChatScreen';
import ChatsScreen from '../screens/ChatsScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Chats' component={ChatsScreen} />
                <Stack.Screen name='Chat' component={ChatScreens} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator