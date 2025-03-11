import {FlatList, View} from 'react-native';
import * as React from 'react';
import PostItem, {PostItemProps} from '../../components/PostItem.tsx';

export default function HomeScreen() {
  const postList: PostItemProps[] = [
    {
      id: 1,
      title: '포스트 1화',
      price: 1000,
      content: '포스트를 시작합니다',
      publishedAt: 1594911223678,
      profile: {
        nickname: '김태완',
      },
    },
    {
      id: 2,
      title: '포스트 2화',
      price: 1000,
      content: '하이라이트',
      publishedAt: 1594911223678,
      profile: {
        nickname: '김태완',
      },
    },
    {
      id: 3,
      title: '포스트 3화',
      price: 1000,
      content: '마지막 화',
      publishedAt: 1594911223678,
      profile: {
        nickname: '김태완',
      },
    },
  ];

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={postList}
        renderItem={data => <PostItem {...data.item} />}
      />
    </View>
  );
}
