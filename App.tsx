import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignInScreen from './src/pages/signin';
import SignUpScreen from './src/pages/signup';
import PostScreen from './src/pages/post';
import HomeScreen from './src/pages/main';
import {useUserStore} from './src/store/userStore.ts';
import ScrollViewScreen from './src/pages/scrollView';

export type LoggedInStackParamList = {
  Home: undefined;
  Post: {postId: number};
  ScrollView: undefined;
};

export type NotLoggedInStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const Tab = createBottomTabNavigator<LoggedInStackParamList>();
const Stack = createNativeStackNavigator<NotLoggedInStackParamList>();

function App() {
  const {isLogin} = useUserStore();
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
            options={{
              title: '포스트 상세',
              headerStyle: {
                backgroundColor: '#29b6f6',
              },
              headerTintColor: '#ffffff',
            }}
          />
          <Tab.Screen
            name="ScrollView"
            component={ScrollViewScreen}
            options={{title: '스크롤뷰', headerShown: true}}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="SignIn">
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
