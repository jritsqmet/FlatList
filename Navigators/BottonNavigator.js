import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import ListaEstudiantes from "../Screens/ListaEstudiantes";
import Welcome from "../Screens/Welcome";

const Tab = createBottomTabNavigator();

function MyTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Welcome" component={Welcome} />
            <Tab.Screen name="Lista" component={ListaEstudiantes} />
        </Tab.Navigator>
    )
}

export default function BottonNav() {
    return (
        <NavigationContainer>
            <MyTab />
        </NavigationContainer>
    )
}