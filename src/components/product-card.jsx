import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const ProductCard = ({ product }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{product.product_name}</Text>
      <Text style={styles.text}>{product.amount}</Text>

      <TouchableHighlight
        underlayColor={'#06402b'}
        onPress={() => console.log('pressed')}
        disabled={!product.in_stock}
        style={[
          styles.button,
          { backgroundColor: product.in_stock ? 'green' : 'gray' },
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            { color: product.in_stock ? 'white' : '#a5a5a5ff' },
          ]}
        >
          {product.in_stock ? 'Buy' : 'Not In Stock'}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#9255f7',
    flexDirection: 'column',
    width: 400,
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
  button: {
    borderRadius: 8,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
  },
});

export default ProductCard;
