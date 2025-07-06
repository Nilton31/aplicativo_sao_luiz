import * as React from 'react';
import { View, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';


function DetailsScreen() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button title='Go to Details... again' onPress={() => navigation.navigate('Details')}>
                Go to Details... again
            </Button>
        </View>
    );
}

export default DetailsScreen;