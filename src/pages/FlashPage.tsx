import { useNavigation } from "@react-navigation/native";
import FlashComponent from "components/flash.component";
import { useEffect, useRef } from "react";
import { Image, ImageBackground, Text, TouchableOpacity } from "react-native";

const nextToHome = true

export default function () {

    const navigation = useNavigation();

    const timer = useRef<NodeJS.Timeout>()

    function navigateToNextPage() {
        // @ts-ignore
        navigation.navigate("flash-2")
    }
    useEffect(() => {

        // // @ts-ignore
        // if (nextToHome) navigation.navigate("home-page")
        // timer.current = setTimeout(() => {
        //     // @ts-ignore
        //     navigation.navigate("flash-2")
        // }, 3000)


        // return () => {
        //     clearTimeout(timer.current)
        // }
    }, [])

    function onPress() {
        navigateToNextPage()
    }

    return (
        <FlashComponent flashIndex={0} topImage={require("assets/flash_1_top.png")} button={
            <TouchableOpacity
                onPress={onPress}
            >
                <ImageBackground
                    source={require("assets/flash_1_btn_bg.png")} style={{ width: 150, height: 64, justifyContent: "center", alignItems: "center" }}>
                    <Image source={require("assets/flash_1_btn_icon.png")} />
                </ImageBackground>
            </TouchableOpacity>
        } />
    )
}