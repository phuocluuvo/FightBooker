import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'


export default function Ticket({ item }) {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                paddingVertical: 20,
                borderRadius: 20,
                marginBottom: 10,
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 30,
                    borderBottomColor: '#D9D9D9',
                    borderBottomWidth: 1,
                    borderStyle: 'dashed',
                    marginBottom: 10,
                    paddingBottom: 10,
                }}>
                <View
                    style={{
                        alignItems: 'flex-start'
                    }}>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: '700',
                            color: '#000'
                        }}>
                        {item.timeStart}</Text>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: '700',
                            color: 'rgba(0, 0, 0, 0.6)',
                        }}>
                        {item.start}</Text>
                </View>
                <View
                    style={{
                        alignItems: 'center',
                    }}>
                    <Ionicons name='airplane' size={15} />
                    <Text
                        style={{
                            fontSize: 13,
                            color: '#000',
                        }}>{item.timing}</Text>
                </View>
                <View
                    style={{
                        alignItems: 'flex-end',
                    }}>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: '700',
                            color: '#000'
                        }}>{item.timeEnd}</Text>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: '700',
                            color: 'rgba(0, 0, 0, 0.6)',
                        }}>{item.end}</Text>
                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 30,
                }}>
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: '700',
                        color: '#000',
                    }}>{item.nameAir}</Text>
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: '700',
                        color: '#000',
                    }}>{item.price}</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})