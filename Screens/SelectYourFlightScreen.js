import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient'
import Ticket from '../components/Ticket'
const DATA = [
  {
    timeStart: '7:05 AM',
    timeEnd: '8:05 PM',
    timing: '13:00',
    start: 'YUL',
    end: 'NRT',
    nameAir: 'Air Canada',
    price: '$1.400',
  },
  {
    timeStart: '9:05 AM',
    timeEnd: '4:55 PM',
    timing: '18:55',
    start: 'YUL',
    end: 'NRT',
    nameAir: 'Scoot',
    price: '$1.300',
  },
  {
    timeStart: '10:00 AM',
    timeEnd: '11:00 PM',
    timing: '13:00',
    start: 'YUL',
    end: 'NRT',
    nameAir: 'Air Canada',
    price: '$1.400',
  },
  {
    timeStart: '7:05 AM',
    timeEnd: '8:05 PM',
    timing: '13:00',
    start: 'YUL',
    end: 'NRT',
    nameAir: 'Air Canada',
    price: '$1.400',
  },
]
export default function SelectYourFlightScreen() {
  const nav = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#EFF2FD',
        flex: 1,
      }}>
      <StatusBar/>
      <LinearGradient
        colors={['#FCFCFE','#8B93DB','#8B93DB']}
        style={{
          position: 'absolute',
          bottom: windowHeight / 4 * 3,
          width:windowWidth,
          height:windowHeight - windowHeight / 4 * 3+40,
        }}>
      </LinearGradient>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          height: 40,
        }}>
        <TouchableOpacity
          onPress={() => nav.goBack()}>
          <Ionicons name='chevron-back' size={20} color={'#000'} />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '700',
            flex: 1,
          }}>Select Your Flight</Text>
      </View>
      
      <Image
        source={require('../assets/richard.png')}
        style={{
          width: windowWidth,
          height:windowHeight*3/4,
          bottom:0,
          position: 'absolute',
        }} 
        blurRadius={15}
        />
        <Image
        source={require('../assets/nasa.png')}
        style={{
          width: windowWidth + 5,
          height: 440,
          left: -5,
          top: 80,
          position: 'absolute',
        }} />
      
      <View
        style={{
          width: windowWidth,
          height: windowHeight - windowHeight / 4 * 3,
          bottom: windowHeight / 4 * 3,
          position: 'absolute',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        }}>
          <View
          style={{
            position: 'absolute',
            width: windowWidth - 100,
            height:70,
            top: 105,
            left: 40,
            borderTopLeftRadius:100,
            borderTopRightRadius:100,
            borderWidth: 2,
            borderBottomWidth:0,
            borderStyle: 'dashed',
            borderColor: 'rgba(0, 0, 0, 0.3)',
          }}>
        </View>
        <Ionicons 
          name='airplane'
          size={30}
          style={{
            position:'absolute',
            top: 90,
            right:windowWidth/2,
          }}/>
        <View
          style={{
            backgroundColor: '#C3C3EE',
            width: 44,
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
            position: 'absolute',
            top: 130,
            left: 20,
          }}>
          <Text
            style={{
              fontWeight: '700'
            }}>
            YUL</Text>
        </View>
        <View
          style={{
            backgroundColor: '#C3C3EE',
            width: 44,
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
            position: 'absolute',
            top: 130,
            right: 30,
          }}>
          <Text
            style={{
              fontWeight: '700'
            }}>
            NRT</Text>
        </View>
        

      </View>

      <View
        style={{
          position: 'absolute',
          width: windowWidth,
          height: windowHeight / 4 * 3,
          left: 0,
          bottom: 0,
          // top: windowHeight - windowHeight / 4 * 3 + 40,
          borderTopWidth: 1,
          borderTopColor: 'rgba(255, 255, 255, 0.4)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              width: 150,
              padding: 10,
              justifyContent: 'space-around',
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <Ionicons name='calendar-outline' size={25} />
            <Text>Dec 16th 2022</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              width: 150,
              padding: 10,
              justifyContent: 'space-around',
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <Ionicons name='person' size={25} />
            <Text>1 passenger</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <LinearGradient
            colors={['#81C6ED', '#346AD2']}
            style={{
              marginTop: 20,
              borderRadius: 20,
              padding: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '700',
                fontSize: 16,
              }}>Economy</Text>
          </LinearGradient>
        </TouchableOpacity>
        <FlatList
          style={{
            marginTop: 20,
          }}
          data={DATA}
          renderItem={({ item }) =>
            <Ticket item={item} />}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})