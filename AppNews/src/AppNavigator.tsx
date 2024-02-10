// AppNavigator.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewsScreen from './screens/NewsScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="News"
        component={NewsScreen}
        options={{ title: 'Noticias' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
