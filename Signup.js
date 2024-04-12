import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {useAssets} from 'expo-asset';
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/Colors';
import {resizeMode, Video} from 'expo-av';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../components/Button';

const Signup = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [assets] = useAssets([require =('@/assets/videos/intro2.mp4')])
    return (
        


        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.BLUE }}>
            <View style={{ flex: 1, marginHorizontal: 22,marginVertical: -15 }}>
                <View style={{ marginVertical: 0 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 15,
                        color: COLORS.WHITE
                    }}>
                        Create An Account With Us
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: COLORS.PRIMARY
                    }}>Fill In Your Details</Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 3,
                        color:COLORS.WHITE,
                    }}>First Name</Text>

                    <View style={{
                        width: "100%",
                        height: 40,
                        borderColor: COLORS.PRIMARY,
                        borderWidth: 1,
                        borderRadius: 6,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your first name'
                            placeholderTextColor={COLORS.GREY}
                            keyboardType='email-address'
                            style={{
                                width: "100%",
                                color:COLORS.WHITE,
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 6,
                        color:COLORS.WHITE,
                    }}>Middle Name</Text>

                    <View style={{
                        width: "100%",
                        height: 40,
                        borderColor: COLORS.PRIMARY,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your middle name'
                            placeholderTextColor={COLORS.GREY}
                            keyboardType='email-address'
                            style={{
                                width: "100%",
                                color:COLORS.WHITE,
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 6,
                        color:COLORS.WHITE,
                    }}>Surname</Text>

                    <View style={{
                        width: "100%",
                        height: 40,
                        borderColor: COLORS.PRIMARY,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your last name'
                            placeholderTextColor={COLORS.GREY}
                            keyboardType='email-address'
                            style={{
                                width: "100%",
                                color:COLORS.WHITE,
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 6,
                        color:COLORS.WHITE,
                    }}>Mobile Number</Text>

                    <View style={{
                        width: "100%",
                        height: 40,
                        borderColor: COLORS.PRIMARY,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='+'
                            placeholderTextColor={COLORS.GREY}
                            keyboardType='numeric'
                            style={{
                                width: "12%",
                                borderRightWidth: 1,
                                borderRightColor:COLORS.PRIMARY,
                                height: "100%",
                                color:COLORS.WHITE,
                            }}
                        />

                        <TextInput
                            placeholder='Enter your phone number'
                            placeholderTextColor={COLORS.GREY}
                            keyboardType='numeric'
                            style={{
                                width: "80%",
                                color:COLORS.WHITE,
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 6,
                        color:COLORS.WHITE,
                    }}>Password</Text>

                    <View style={{
                        width: "100%",
                        height: 40,
                        borderColor: COLORS.PRIMARY,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor={COLORS.GREY}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%",
                                color:COLORS.WHITE,
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.GREY} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.PRIMARY} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 5,
                        color:COLORS.WHITE,
                    }}>Re-Enter Password</Text>

                    <View style={{
                        width: "100%",
                        height: 40,
                        borderColor: COLORS.PRIMARY,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Re-Enter your password'
                            placeholderTextColor={COLORS.GREY}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%",
                                color:COLORS.WHITE,
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.GREY} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.PRIMARY} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    marginVertical: 6
                }}>
                    <Checkbox
                        style={{ marginRight: 8 }}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? COLORS.PRIMARY : undefined}
                    />

                    <Text
                        style={{
                        fontSize: 12,
                        fontWeight: 400,
                        marginVertical: 2,
                        color:COLORS.WHITE,
                    }}> I agree to the terms and conditions</Text>
                </View>

                <Button
                    title="Sign Up"
                    filled
                    style={{
                        marginTop: 5,
                        marginBottom: 4,
                    }}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.PRIMARY,
                            marginRight:5,
                        }}
                    />
                    <Text style={{ fontSize: 14,color:COLORS.WHITE }}>Or Sign up with</Text>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.PRIMARY,
                            marginLeft:5,
                        }}
                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 40,
                            borderWidth: 1,
                            backgroundColor:COLORS.PRIMARY,
                            borderColor: COLORS.BLUE,
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        {/* <Image
                            source={require("../assets/facebook.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        /> */}

                        <Text
                        style={{
                            color:COLORS.BLUE,
                            fontWeight:800,
                        }}>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 40,
                            borderWidth: 1,
                            backgroundColor:COLORS.PRIMARY,
                            borderColor: COLORS.PRIMARY,
                            marginRight: 4,
                            borderRadius: 10,
                            
                        }}
                    >
                        {/* <Image
                            source={require("../assets/google.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        /> */}

                        <Text style={{
                            color:COLORS.BLUE,
                            fontWeight:800,
                        }}>Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.WHITE }}>Already have an account</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.PRIMARY,
                            fontWeight: "bold",
                            marginLeft: 10
                        }}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Signup