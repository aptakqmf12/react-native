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

export default function PostScreen({navigation}: DetailsScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableHighlight onPress={onClick}>
        <Text>ghi</Text>
      </TouchableHighlight>

      <TouchableWithoutFeedback onPress={() => {}}>
        <Text>TouchableWithoutFeedback</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}
