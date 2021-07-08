import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [restaurants, setRestaurants] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'san jose',
        },
      })
      setRestaurants(response.data.businesses)
      setErrorMessage('')
    } catch (err) {
      setErrorMessage('Something went wrong')
    }
  }

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We found {restaurants.length} restaurants</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
