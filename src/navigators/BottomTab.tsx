import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Analytics } from "../screens/Analytics";
import { History } from "../screens/History";
import { Home } from "../screens/Home";

const BottomTabs = createBottomTabNavigator()

export const BottomTabNavigator: React.FC = () => {
    return (
        <BottomTabs.Navigator>
            <BottomTabs.Screen name="Home" component={Home} />
            <BottomTabs.Screen name="History" component={History} />
            <BottomTabs.Screen name="Analytics" component={Analytics} />
        </BottomTabs.Navigator>
    )
}