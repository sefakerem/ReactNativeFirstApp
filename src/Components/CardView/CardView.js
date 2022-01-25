import React from 'react';
import {View,Text,Image} from 'react-native';
import styles from './CardView.style'
const CardView = ({product:{id,title,imgURL,price,inStock}}) => {
    return (
    <View style={styles.container}>
        <Image source={{uri: imgURL}} style={styles.urunImage} resizeMode="contain" />
      <Text style={styles.urunTitle}>{title}</Text>
      <Text style={styles.urunPrice}>{price}</Text>
      
    </View>
    )
}
export default CardView;