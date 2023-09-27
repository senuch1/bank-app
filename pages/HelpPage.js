import * as React from 'react';
import { Text, View, Button } from 'react-native';


const HelpPage = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Помощь</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus accusantium deleniti quo amet animi quae sunt ducimus
                iure mollitia quia tempora eum consequuntur cupiditate veritatis
                laudantium explicabo molestiae, atque rerum?
            </Text>
            <Button title="Назад" onPress={() => navigation.goBack()} />
        </View>
    );
}



export default HelpPage;