import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HelpPage from './pages/HelpPage'
import MainPage from './pages/MainPage'
import AccountPage from './pages/AccountPage'
import ProfilePage from './pages/ProfilePage'

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"MainPage"}>
                <Stack.Screen name="MainPage" component={MainPage} />
                <Stack.Screen name="AccountPage" component={AccountPage} />
                <Stack.Screen name="HelpPage" component={HelpPage} />
                <Stack.Screen name="ProfilePage" component={ProfilePage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;