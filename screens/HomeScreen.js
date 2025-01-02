import { StatusBar } from "expo-status-bar";
import React,{useState}from "react";
import { View, Text,SafeAreaView ,Image, TextInput, TouchableOpacity} from "react-native";
import {MagnifyingGlassIcon} from  'react-native-heroicons/outline'
import {MapPinIcon} from  'react-native-heroicons/solid'

export default function HomeScreen() {
    const [showSearch,setShowSearch]= useState(false)
    const [locations,setLocations]=useState([1,2,3])

    const  handleLocation=(location)=>{
            console.log(location)
    }
  return (
        <View className="flex-1 relative">
        <StatusBar style="light"/>
        <Image blurRadius={50} source={require('../assets/images/bg.png')}
            className="absolute h-full w-full"
        />
        <SafeAreaView className="flex flex-1 ">
            <View style={{height:'10%'}} className="mx-4 relative z-50">
                <View className="flex flex-row justify-end items-center rounded-full "
                style={{backgroundColor: showSearch?'rgba(60, 70, 80, 0.3); ':'transparent'}}
                >
                    {showSearch?
                         <TextInput
                         placeholder="Search City"
                         placeholderTextColor={'white'}
                         className="pl-6  pb-1 flex-1 text-base text-white"
                         />
                         :
                         null
                
                    }
               
                    <TouchableOpacity
                        className="bg-gray-400 rounded-full p-3 m-1"
                        onPress={()=>{setShowSearch(!showSearch)}}
                    >
                        <MagnifyingGlassIcon size={'35'} color={'white'}/>

                    </TouchableOpacity>
                </View>
                {
                    locations.length>0 && showSearch?(
                            <View className="absolute w-full bg-gray-300 top-20 rounded-3xl">
                                {

                                    locations.map((location,index)=>{
                                        let showBorder= index+1 !=locations.length;
                                        let borderClass= showBorder? "border-b-2 border-b-gray-400" : "";
                                        return(
                                            <TouchableOpacity key={index}
                                            onPress={handleLocation(location)}
                                            className={" flex-row items-center border-0 p-3 px-4 b-1 "+ borderClass}
                                            >
                                                <MapPinIcon size={20} color={'gray'}/>
                                                <Text className="text-black text-lg ml-2">
                                                    London,United Kingdom
                                                </Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                }

                            </View>
                    ):
                    null

                }
            </View>

            <View className="mx-4 flex justify-around  flex-1 mb-2">
                    <Text className="text-white text-center text-2xl font-bold ">
                        London,
                        <Text className="text-lg text-gray-300 font-semibold ">
                        United Kingdom
                    </Text>
                    </Text>
                    <View className="flex-row justify-center">
                        <Image source={require('../assets/images/partlycloudy.png')}
                        className="w-52 h-52"
                        />

                    </View>

                    <View className="space-y-2">
                        <Text className="text-center font-bold text-white text-6xl ml-5">
                            25&#176;
                        </Text>
                        <Text className="text-center  text-white text-xl tracking-widest">
                            Partly Cloudy
                        </Text>

                    </View>
            </View>

        </SafeAreaView>
        </View>
  );
}

