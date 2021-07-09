import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const RestaurantsDetail = ({ restaurant }) => {
  return (
    <View>
      <Image style={styles.imageStyle} source={{ uri: restaurant.image_url }} />
      <Text style={styles.nameStyle}>{restaurant.name}</Text>
      <Text>
        {restaurant.rating} Stars, {restaurant.review_count} Reviews
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  nameStyle: {
    fontWeight: 'bold',
  },
})

export default RestaurantsDetail
