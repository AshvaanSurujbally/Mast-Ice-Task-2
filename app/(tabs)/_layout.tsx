import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="ui-components-demo"
        options={{
          title: 'UI Demo',
          headerShown: true,
        }}
      />
    </Tabs>
  );
}


