import {View, Text, Button, Alert} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/public/Home';
import ProductDetails from '../../screens/public/ProductDetails';
import Cart from '../../screens/public/Cart';
import {Chat} from '../../screens/public';
import {Box, Pressable} from 'native-base';

const Stack = createStackNavigator();
const PublicRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{headerShadowVisible: true}}
      />

      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShadowVisible: true,
          headerRight: () => (
            <Pressable onPress={() => console.log('header Button Clicked')}>
              <Box
                mr={'6'}
                _text={{color: 'black', fontSize: '20', fontWeight: 'bold'}}>
                :
              </Box>
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default PublicRoutes;
