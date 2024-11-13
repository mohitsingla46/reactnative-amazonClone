import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Feather from "react-native-vector-icons/Feather";
import Router from "../navigation/Router";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Router}
        options={() => ({
          tabBarLabel: () => <Text style={{ color: "#000" }}>Home</Text>,
          tabBarIcon: () => <SimpleLineIcons name="home" size={25} />,
        })}
      />
      <Tab.Screen
        name="You"
        component={Router}
        options={() => ({
          tabBarLabel: () => <Text style={{ color: "#000" }}>You</Text>,
          tabBarIcon: () => <SimpleLineIcons name="user" size={25} />,
        })}
      />
      <Tab.Screen
        name="More"
        component={Router}
        options={() => ({
          tabBarLabel: () => <Text style={{ color: "#000" }}>More</Text>,
          tabBarIcon: () => <Octicons name="stack" size={25} />,
        })}
      />
      <Tab.Screen
        name="Cart"
        component={Router}
        options={() => ({
          tabBarLabel: () => <Text style={{ color: "#000" }}>Cart</Text>,
          tabBarIcon: () => <Feather name="shopping-cart" size={25} />,
        })}
      />
      <Tab.Screen
        name="Menu"
        component={Router}
        options={() => ({
          tabBarLabel: () => <Text style={{ color: "#000" }}>Menu</Text>,
          tabBarIcon: () => <SimpleLineIcons name="menu" size={25} />,
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
