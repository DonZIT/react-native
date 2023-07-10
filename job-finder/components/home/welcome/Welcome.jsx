import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router';


import styles from './welcome.style'
import {icons, SIZES} from '../../../constants';

const jobsTypes = ["temps-complet", "temps-partiel", "contractuel"];

const Welcome = () => {

  const router = useRouter();

  //Function to change value of jobTypes
  const [activeJobType, setActiveJobType] = useState('temps-complet');

  return (
    <View>
      <View style= {styles.container}>
        <Text style={styles.userName}>Bonjour Donovan</Text>
        <Text style={styles.welcomeMessage}>Trouve ton alternance !</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=""
            onChange={() => {}} 
            placeholder="Que recherches-tu ?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
          data={jobsTypes}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`)
              }}
              >
              <Text
                style={styles.tabText(activeJobType, item)}
                >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          //
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small}}
          horizontal
          />
      </View>

    </View>
  )
}

export default Welcome