import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MoodPicker } from '../components/MoodPicker'
import { MoodOptions, MoodOptionsWithTimestamp } from '../types/Types'

export const Home: React.FC = () => {
const [moodList, setMoodList] = useState<MoodOptionsWithTimestamp[]>([])

const handleSelectMood = useCallback((selectedMood: MoodOptions) => {
  setMoodList((current) => [...current, {mood: selectedMood, timeStamp: Date.now()}] )
},[])

    return (
        <View style={styles.container}>
          <MoodPicker handleSelectedMood={handleSelectMood}/>
          {moodList.map(item => <Text key={item.timeStamp}>{item.mood.emoji} {new Date(item.timeStamp).toString()}</Text>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    }
  }
  )