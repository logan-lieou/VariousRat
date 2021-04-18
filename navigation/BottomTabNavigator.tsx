// baseline deps.
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

// utils
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

// screens
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabFourScreen from '../screens/TabFourScreen';
import TabFiveScreen from '../screens/TabFiveScreen';

// types
import { BottomTabParamList, TabOneParamList } from '../types';
import { TabTwoParamList, TabThreeParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

/*
 *
 * Layout:
 *
 * | search | favorite | post | account | feedback |
 *
 */

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Search"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Search"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-heart" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Post"
        component={TabThreeNavigator}
        options = {{
          tabBarIcon: ({ color }) => <TabBarIcon name="add-circle" color={color} />
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />
        }}
      />
      <BottomTab.Screen
        name="Feedback"
        component={TabFiveNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="chatbubble" color={color} />
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Search"
        component={TabOneScreen}
        options={{ headerTitle: 'Search' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Favorite"
        component={TabTwoScreen}
        options={{ headerTitle: 'Favorites' }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
    return (
      <TabThreeStack.Navigator>
          <TabThreeStack.Screen
            name="Post"
            component={TabThreeScreen}
            options={{ headerTitle: 'Post' }}
          />
      </TabThreeStack.Navigator>
    )
}

const TabFourStack = createStackNavigator();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="Account"
        component={TabFourScreen}
        options={{ headerTitle: 'Account' }}
      />
    </TabFourStack.Navigator>
  );
}

const TabFiveStack = createStackNavigator();

function TabFiveNavigator() {
  return (
    <TabFiveStack.Navigator>
      <TabFiveStack.Screen
        name="Feedback"
        component={TabFiveScreen}
        options={{ headerTitle: 'Feedback' }}
      />
    </TabFiveStack.Navigator>
  )
}
