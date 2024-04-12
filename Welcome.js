import { View, Text, Pressable, Image } from 'react-native'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/Colors';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {
    

    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.BLUE, COLORS.PRIMARY]}
        >
            <View style={{ flex: 1 }}>
            
                <GestureHandlerRootView>
                    <Image
                        source={require("../assets/gwfa.jpg")}
                        style={{
                            height: 80,
                            width: 90,
                            borderRadius: 20,
                            position: "absolute",
                            top: 10,
                            transform: [
                                { translateX: 90 },
                                { translateY: 70 },
                                { rotate: "-0deg" }
                            ]
                        }}
                    />

                   

               

                    
                </GestureHandlerRootView>
                

                {/* content  */}

                <View style={{
                    paddingHorizontal: 2,
                    position: "absolute",
                    top: 200,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        color: COLORS.BLUE,
                    }}>Let's Get</Text>
                    <Text style={{
                        fontSize: 46,
                        fontWeight: 800,
                        color: COLORS.BLUE
                    }}>Started</Text>

                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.WHITE,
                            fontWeight:800,
                            marginVertical: 4
                        }}>The Best FinTech App In The World</Text>
                        <Text style={{
                            fontSize: 16,
                            fontWeight:800,
                            color:COLORS.WHITE
                        }}>Perform All Your Transactions In One App</Text>
                    </View>

                    <Button
                        title="Join Now"
                        onPress={() => navigation.navigate("Signup")}
                        style={{
                            marginTop: 22,
                            width: "100%",
                        }}
                    />

                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.WHITE,
                            fontWeight:800,
                        }}>Already have an account ?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.BLUE,
                                fontWeight: 800,
                                marginLeft: 8
                            }}>Login</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Welcome