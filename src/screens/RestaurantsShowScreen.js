import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import yelp from '../api/yelp'

const RestaurantsShowScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null)
  const id = navigation.getParam('id')

  console.log(restaurant)

  const getRestaurant = async (id) => {
    const response = await yelp.get(`/${id}`)
    setRestaurant(response.data)
  }

  useEffect(() => {
    getRestaurant(id)
  }, [])

  return (
    <View>
      <Text>Restaurants Show</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default RestaurantsShowScreen
