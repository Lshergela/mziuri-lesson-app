import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { GetPosts } from '../api/posts.api';
import { PostModal } from '../components/post-modal';

export default function PostsScreen() {
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState(null);

  const { data, isPending, isFetching, isError, error, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: GetPosts,
  });

  const onClose = () => {
    setVisible(false);
  };

  if (isPending) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setId(item.id);
              setVisible(true);
            }}
            key={item.id}
            style={{
              paddingVertical: 10,
              paddingHorizontal: 10,
              backgroundColor: 'white',
              marginHorizontal: 10,
              marginBottom: 8,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: 'gray',
              borderStyle: 'solid',
            }}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        refreshing={isFetching}
        onRefresh={refetch}
      />
      <PostModal visible={visible} onClose={onClose} id={id} />
    </View>
  );
}
