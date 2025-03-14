import {Image, Pressable, Text, View} from 'react-native';
import * as React from 'react';
import {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {LoggedInStackParamList} from '../../App.tsx';
import {apiClient} from '../api';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface Photo {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

export default function PostItem({id, title, userId, body}: Post) {
  const navigation =
    useNavigation<NativeStackNavigationProp<LoggedInStackParamList>>();

  const onClickPost = useCallback(() => {
    navigation.navigate('Post', {postId: id});
  }, [navigation]);

  const [photo, setPhoto] = useState<Photo>();

  useEffect(() => {
    const getPhoto = async () => {
      const res = await apiClient.get(`/photos?id=${id}`);

      if (res.status === 200) {
        setPhoto(res.data[0] as Photo);
      }
    };

    getPhoto();
  });

  return (
    <Pressable
      onPress={onClickPost}
      style={{
        padding: 4,
        gap: 8,
        marginBottom: 24,
      }}>
      <View style={{gap: 4}}>
        <Text style={{fontSize: 18, fontWeight: '600'}}>{title}</Text>
        <Text style={{fontSize: 14, color: '#565957'}}>{body}</Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
        <Image
          src={photo?.thumbnailUrl}
          style={{width: 20, height: 20, borderRadius: '50%'}}
        />
      </View>
    </Pressable>
  );
}
