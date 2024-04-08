import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Banner = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri:"https://uploads-ssl.webflow.com/6073fad993ae97919f0b0772/609fa687874b84361fc495db_%C4%91t.jpg"}}
        style={styles.bannerImage}
        resizeMode="cover" 
      />
      <View style={styles.overlay} />
      <Text style={styles.bannerText}>Chào mừng đến với cửa hàng của chúng tôi!</Text> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 200, 
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)', 
  },
  bannerText: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Banner;
