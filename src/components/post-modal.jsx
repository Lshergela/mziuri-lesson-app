import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import {
  Alert,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { GetPost, UpdatePost } from '../api/posts.api';

export const PostModal = ({ id, visible, onClose }) => {
  const [post, setPost] = useState({
    title: '',
    body: '',
  });

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['posts', id],
    queryFn: () => GetPost(id),
  });

  const { mutate, isPending: isPendingUpdate } = useMutation({
    mutationFn: () => UpdatePost({ id: id, post: post }),
    onSuccess: () => {
      Alert.alert('Success', 'Post updated successfully');
    },
    onError: (error) => {
      Alert.alert('Error', error.message);
    },
  });

  useEffect(() => {
    if (visible && data) {
      setPost({
        title: data?.title,
        body: data?.body,
      });
    }
  }, [visible, data]);

  return (
    <Modal animationType="slide" visible={visible} onRequestClose={onClose}>
      {isPending && <Text>Loading...</Text>}

      {isError && <Text>{error.message}</Text>}

      {!isPending && !isError && (
        <View style={{ flex: 1 }}>
          <Text>Post Id: {data.id}</Text>
          <TextInput
            value={post.title}
            onChangeText={(text) =>
              setPost((prev) => ({
                ...prev,
                title: text,
              }))
            }
            style={{ borderWidth: 1, borderColor: 'gray' }}
          />
          <TextInput
            value={post.body}
            onChangeText={(text) =>
              setPost((prev) => ({
                ...prev,
                body: text,
              }))
            }
            style={{ borderWidth: 1, borderColor: 'gray' }}
          />
          <TouchableOpacity
            style={{
              width: '100%',
              backgroundColor: 'green',
              padding: 8,
              borderRadius: 8,
            }}
            onPress={mutate}
            disabled={isPendingUpdate}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>Update</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity
        activeOpacity={0.65}
        style={{
          width: '100%',
          backgroundColor: 'red',
          padding: 8,
          borderRadius: 8,
        }}
        onPress={onClose}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Close Modal</Text>
      </TouchableOpacity>
    </Modal>
  );
};
