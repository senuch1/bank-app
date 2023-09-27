import * as React from 'react';
import { Text, View, TextInput, useState, Button } from 'react-native';

const screenPaths = {
    HelpPage: 'HelpPage',
    AccountPage: 'AccountPage',
    ProfilePage: 'ProfilePage'
}

const MainPage = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Text>Мой Банк</Text>
            <Button
                title="Счет"
                onPress={() => navigation.navigate(screenPaths.AccountPage)}
            />
            <Button
                title="Профиль"
                onPress={() => navigation.navigate(screenPaths.ProfilePage)}
            />
            <Button
                title="Помощь"
                onPress={() => navigation.navigate(screenPaths.HelpPage)}
            />
        </View >
    );
}

export default MainPage;