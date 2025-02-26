import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PostScreen from './src/pages/post';
import HomeScreen from './src/pages/main';
import SignInScreen from './src/pages/signin';
import SignUpScreen from './src/pages/signup';

export type LoggedInStackParamList = {
  Home: undefined;
  Post: undefined;
};

export type NotLoggedInStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const Tab = createBottomTabNavigator<LoggedInStackParamList>();
const Stack = createNativeStackNavigator<NotLoggedInStackParamList>();

function App() {
  const isLogin = false;
  return (
    <NavigationContainer>
      {isLogin ? (
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{title: '홈', headerShown: true}}
          />

          <Tab.Screen
            name="Post"
            component={PostScreen}
            options={{title: '포스트 상세'}}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="SignUp">
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{title: '로그인'}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{title: '회원가입'}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
