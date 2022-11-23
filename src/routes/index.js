import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Boards from '../views/Main'
import Board from '../views/SingleBoard'

const Stack = createStackNavigator()

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Boards'>
            <Stack.Screen name ="Boards" component={Boards} />
            <Stack.Screen name ="Board" component={Board} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Routes
