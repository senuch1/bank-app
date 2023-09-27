import React, { useState } from 'react';
import { Text, View, TextInput, useState, Button, Alert } from 'react-native';

const AccountPage = ({ navigation }) => {
    const [balance, setBalance] = useState(1000);

    const handleWithdraw = () => {
        Alert.prompt('Снять средства', 'Введите сумму для снятия:', (amount) => {
            if (parseInt(amount) > 0 && parseInt(amount) <= balance) {
                setBalance(balance - parseInt(amount));
            } else {
                Alert.alert('Ошибка', 'Неверная сумма или недостаточно средств.');
            }
        });
    };

    const handleDeposit = () => {
        Alert.prompt('Пополнить счёт', 'Введите сумму для пополнения:', (amount) => {
            if (parseInt(amount) > 0) {
                setBalance(balance + parseInt(amount));
            } else {
                Alert.alert('Ошибка', 'Неверная сумма.');
            }
        });
    };
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Ваш счёт: {balance} тенге</Text>
            <TextInput
                placeholder='Введите сумму'
            />
            <Button title="Снять " onPress={handleWithdraw} />
            <Button title="Пополнить " onPress={handleDeposit} />
            <Button title="Назад" onPress={() => navigation.goBack()} />
        </View>
    );
}


export default AccountPage;