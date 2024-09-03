import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./Styles";
import Home from "@/Screens/Home/Home";
import LeaderBoard from "@/Screens/LeaderBoard/LeaderBoard";
import Settings from "@/Screens/Settings/Settings";
import Store from "@/Screens/Store/Store";
import Wallet from "@/Screens/Wallet/Wallet";
import {
  HomeIcon,
  WalletIcon,
  StoreIcon,
  SettingsIcon,
  LeaderIcon,
} from "@/Assets/Icons";
import images from "@/Assets/Images/Index";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const RenderBottomTab = ({ focused, name, icon, activeIcon }: any) => {
  return (
    <View style={focused ? styles.focusedContainer : styles.container}>
      <View style={focused && styles.whiteLayer}>
        <View
          style={focused ? styles.iconFocusedContainer : styles.iconContainer}
        >
          <Image source={focused ? activeIcon : icon} style={styles.icon} />
        </View>
      </View>
      <Text style={[styles.tabLabel, { color: focused ? "#fff" : "#fff" }]}>
        {name}
      </Text>
    </View>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 55,
          backgroundColor: "#17478b",
          flexDirection: "row",
          justifyContent: "space-around",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <RenderBottomTab
              focused={focused}
              name="Home"
              activeIcon={images.home}
              icon={images.home}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ focused }) => (
            <RenderBottomTab
              focused={focused}
              name="Wallet"
              activeIcon={images.wallet}
              icon={images.wallet}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarIcon: ({ focused }) => (
            <RenderBottomTab
              focused={focused}
              name="Store"
              activeIcon={images.stroe}
              icon={images.stroe}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="LeaderBoard"
        component={LeaderBoard}
        options={{
          tabBarIcon: ({ focused }) => (
            <RenderBottomTab
              focused={focused}
              name="Board"
              activeIcon={images.trophy}
              icon={images.trophy}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <RenderBottomTab
              focused={focused}
              name="Profile"
              activeIcon={images.setting}
              icon={images.setting}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Tabs" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
