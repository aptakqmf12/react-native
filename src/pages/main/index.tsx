import {FlatList, View} from 'react-native';
import * as React from 'react';
import PostItem, {Post} from '../../components/PostItem.tsx';
import {useEffect, useState} from 'react';
import {apiClient} from '../../api';

export default function HomeScreen() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPostList = async () => {
      const res = await apiClient.get('/posts');

      if (res.status === 200) {
        setPosts(res.data);
      }
    };

    getPostList();
  }, []);

  return (
    <View style={{flex: 1}}>
      <FlatList data={posts} renderItem={data => <PostItem {...data.item} />} />
    </View>
  );
}
