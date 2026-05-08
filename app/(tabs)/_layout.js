import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#E83D84',
        tabBarStyle: { backgroundColor: '#000' },
      }}
    >
      <Tabs.Screen
        name="elevadores"
        options={{
          title: 'Elevadores',
          tabBarIcon: ({ color }) => (
            <Ionicons name="swap-vertical" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="suporte1"
        options={{
          title: 'Suporte',
          tabBarIcon: ({ color }) => (
            <Ionicons name="help-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}