import * as React from 'react';
import { Text, View, TextInput, useState, Button } from 'react-native';


const ProfilePage = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Мой профиль</Text>
            <TextInput
                placeholder='Введите имя'
            />
            <TextInput
                placeholder='Введите Email'
            />
            <TextInput
                placeholder='Введите номер Телефона'
            />
            <TextInput
                placeholder='Введите ваш адресс'
            />
            <Button title="Назад" onPress={() => navigation.goBack()} />
        </View>
    );
}
export default ProfilePage;