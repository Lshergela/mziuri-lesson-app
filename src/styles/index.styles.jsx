import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  text: {
    color: 'rgb(30, 24, 4023)',
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25,
    flex: 0.1,
    backgroundColor: 'yellow',
  },
  box1: {
    flex: 0.3,
    width: '100%',
    backgroundColor: 'blue',
  },
  box2: {
    width: '100%',
    flex: 0.3,
    backgroundColor: 'green',
  },
});
