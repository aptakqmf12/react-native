import {useCallback} from 'react';
import {
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import * as React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';

type DetailsScreenProps = NativeStackScreenProps<ParamListBase, 'Post'>;

export default function PostScreen({navigation, route}: DetailsScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const {id} = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableHighlight onPress={onClick}>
        <Text>포스트 상세 id : {id}</Text>
      </TouchableHighlight>

      <TouchableWithoutFeedback onPress={() => {}}>
        <Text>TouchableWithoutFeedback</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}
