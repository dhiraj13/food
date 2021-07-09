import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import useRestaurants from '../hooks/useRestaurants'
import RestaurantsList from '../components/RestaurantsList'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, restaurants, errorMessage] = useRestaurants()

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We found {restaurants.length} restaurants</Text>
      <RestaurantsList title='Cost Effective' />
      <RestaurantsList title='Bit Pricier' />
      <RestaurantsList title='Big Spender' />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
