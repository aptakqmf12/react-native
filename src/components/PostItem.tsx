import {Image, Text, View} from 'react-native';
import * as React from 'react';
import dayjs from 'dayjs';

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
  return (
    <View
      style={{
        padding: 4,
        gap: 8,
        marginBottom: 24,
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
    </View>
  );
}
