import {ScrollView, View, Text, StatusBar} from 'react-native';

interface indexProps {}

export default function ScrollViewScreen({}: indexProps) {
  return (
    <ScrollView bounces={true}>
      {Array.from({length: 20}, (_, i) => i).map(el => (
        <View style={{height: 50}}>
          <Text>{el}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
