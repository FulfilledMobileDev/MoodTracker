import React from 'react'
import { useState } from 'react'
import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import { moodOptions, Strings } from './constants/Constants'
import { MoodOptions } from '../types/Types'
import { THEME } from '../theme/Themes'

type MoodPickerProps = {
    handleSelectedMood: (moodOption: MoodOptions) => void
}

  const MoodPickerInternal: React.FC<MoodPickerProps> = ({handleSelectedMood}) => {

    const [selectedMood, setSelectedMood] = useState<MoodOptions>()

      return (
          <>
          {console.log('RENDERING')}
          <View style={styles.container}>
              <Text style={styles.titleText}>{Strings.MoodPickerTitle}</Text>
          <View style={styles.moodOptions}>
              {moodOptions.map((option) => (
                  <View>
            <Pressable onPress={() => {setSelectedMood(option)}} style={[styles.moodItem, selectedMood?.emoji === option.emoji ? styles.selectedMoodItem : undefined]}>
              <Text key={option.emoji}>{option.emoji}</Text>
              </Pressable>
              <Text style={styles.textEmoji}>
                  {option.emoji === selectedMood?.emoji ? option.description : undefined
                  }
              </Text>
              </View>
              ))}
          </View>
          <Pressable style={styles.chooseButton} onPress={() => {
              if(selectedMood) {
            handleSelectedMood(selectedMood)
              }
            }}>
              <Text style={styles.chooseText}>{Strings.MoodPickerChooseButtonTitle}</Text>
          </Pressable>
          </View>
          </>
      )
  }

  export const MoodPicker = React.memo(MoodPickerInternal)
  
  const styles = StyleSheet.create({
      container: {
        margin: THEME.PADDING.SPACE10,
        height: 230,
        backgroundColor: THEME.COLOUR.WHITE,
        borderColor: THEME.COLOUR.PURPLE,
        borderWidth: 2,
        borderRadius: 10, 
        justifyContent: 'space-between',
        padding: 20
      },
      moodOptions: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: THEME.PADDING.SPACE10
      },
      moodItem: {
          height: 60,
          width: 60,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
      },
      selectedMoodItem: {
        borderColor: THEME.COLOUR.WHITE,
        backgroundColor: THEME.COLOUR.PURPLE,
        borderWidth: 2
      },
      textEmoji: {
          color: '#454C73',
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: 10
      },
      titleText: {
          fontWeight: 'bold',
          fontSize: 16,
          paddingVertical: THEME.PADDING.SPACE16,
          alignSelf: 'center'
      },
      chooseButton: {
          width: 150,
          height: 40,
          borderRadius: 20,
          borderColor: THEME.COLOUR.WHITE,
          backgroundColor: THEME.COLOUR.PURPLE,
          alignSelf: 'center',
          marginVertical: THEME.PADDING.SPACE12
      },
      chooseText: {
          paddingVertical: THEME.PADDING.SPACE10,
          textAlign: 'center',
          color: THEME.COLOUR.WHITE,
          fontFamily: THEME.FONT.BOLD
      }
  })