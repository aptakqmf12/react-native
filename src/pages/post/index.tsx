import {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import * as React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {LoggedInStackParamList} from '../../../App.tsx';
import {apiClient} from '../../api';
import {Post} from '../../components/PostItem.tsx';

type DetailsScreenProps = NativeStackScreenProps<
  LoggedInStackParamList,
  'Post'
>;

export default function PostScreen({navigation, route}: DetailsScreenProps) {
  const goHome = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const {postId} = route.params;

  const [postDetail, setPostDetail] = useState<Post>();

  useEffect(() => {
    const getPostDetail = async () => {
      const res = await apiClient.get(`/posts?id=${postId}`);

      if (res.status === 200) {
        console.log(res.data[0]);
        setPostDetail(res.data[0]);
      }
    };

    getPostDetail();
  }, []);

  if (!postDetail) return <ActivityIndicator />;

  return (
    <View style={styles.postContainer}>
      <View style={styles.backButton}>
        <Pressable onPress={goHome}>
          <Text>홈으로</Text>
        </Pressable>
      </View>

      <View style={styles.postDetail}>
        <View>
          <Text style={styles.postTitle}>{postDetail?.title}</Text>
        </View>
        <View>
          <Text>{postDetail?.body}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    padding: 12,
    flex: 1,
  },
  backButton: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  postDetail: {
    padding: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#999',
    borderRadius: 10,
  },

  postTitle: {
    fontSize: 18,
    fontWeight: 600,
  },
});
