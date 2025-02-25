import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home';
import Add from '../screens/Add';
import Login from '../screens/Login';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ title: 'Login', headerShown : false }} />
                <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
                <Stack.Screen name="Add" component={Add}
                    options={{ presentation: 'modal', title: 'Agregar productos' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;