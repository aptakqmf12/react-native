import {useCallback} from 'react';
import {
  StatusBar,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import * as React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {LoggedInStackParamList} from '../../../App.tsx';

type DetailsScreenProps = NativeStackScreenProps<
  LoggedInStackParamList,
  'Post'
>;

export default function PostScreen({navigation, route}: DetailsScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const {postId} = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <StatusBar />
      <TouchableHighlight onPress={onClick}>
        <Text>postId? : {postId}</Text>
      </TouchableHighlight>

      <TouchableWithoutFeedback onPress={() => {}}>
        <Text>TouchableWithoutFeedback</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}
