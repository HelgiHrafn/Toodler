import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Boards from '../views/Main'
import Board from '../views/SingleBoard'
import List from '../views/SingleList'


const Stack = createStackNavigator()

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Boards'>
            <Stack.Screen name ="Boards" component={Boards} />
            <Stack.Screen name ="Board" component={Board} />
            <Stack.Screen name ="List" component={List} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Routes
