import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo,  MaterialCommunityIcons } from '@expo/vector-icons';

import PayButton from './components/PayButton';

import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScreen from './screens/Pay';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Wallet: {
    lib: AntDesign,
    name: 'Trophy',
  },
  Notifications: {
    lib: Entypo,
    name: 'credit-card',
  },
  Settings: {
    lib: MaterialCommunityIcons,
    name: 'account',
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === 'Pay') {
            return (
              <PayButton
                onPress={() => navigation.navigate('Pay')}
                focused={focused}
              />
            );
          }

          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#E4E4E4',
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
        },
        activeTintColor: '#92929c',
        inactiveTintColor: '#000000',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Tela Inicial',
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          title: 'Conquistas',
        }}
      />
      <Tab.Screen
        name="Pay"
        component={PayScreen}
        options={{
          title: '',
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={PayScreen}
        options={{
          title: 'Investimento',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={PayScreen}
        options={{
          title: 'Ajustes',
        }}
      />
    </Tab.Navigator>
  );
}