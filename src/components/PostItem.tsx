import {Alert, Image, Pressable, Text, View} from 'react-native';
import * as React from 'react';
import dayjs from 'dayjs';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {LoggedInStackParamList} from '../../App.tsx';
export interface PostItemProps {
  id: number;
  title: string;
  price: number;
  content: string;
  publishedAt: number;
  profile: {
    nickname: string;
  };
}

export default function PostItem({
  id,
  title,
  price,
  content,
  publishedAt,
  profile,
}: PostItemProps) {
  const date = dayjs(publishedAt);
  const navigation =
    useNavigation<NativeStackNavigationProp<LoggedInStackParamList>>();

  return (
    <Pressable
      style={{
        padding: 4,
        gap: 8,
        marginBottom: 24,
      }}
      onPress={() => {
        navigation.navigate('Post', {id});
      }}>
      <View style={{gap: 4}}>
        <Text style={{fontSize: 18, fontWeight: '600'}}>{title}</Text>
        <Text style={{fontSize: 14, color: '#565957'}}>{content}</Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
        <Image
          src={
            'https://play-lh.googleusercontent.com/_hVq7ASscHJoBUBk21uO112ghD0JVncPb0_eEuiwmlu63TibZOWEdC2yZWXza11qA_c'
          }
          style={{width: 20, height: 20, borderRadius: '50%'}}
        />
        <Text>{profile.nickname}</Text>
        <Text style={{fontSize: 12}}>{date.format('YYYY-MM-DD')}</Text>
        <Text style={{fontSize: 12, color: '#565957'}}>
          {price.toLocaleString()}P
        </Text>
      </View>
    </Pressable>
  );
}
