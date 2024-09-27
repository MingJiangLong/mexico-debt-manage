import { useNavigation } from "@react-navigation/native";
import FlashComponent from "components/flash.component";
import { useEffect, useRef } from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import useCommonData from "store/useCommonData";
import Text from "xunmo-rn-helper/components/text";


export default function () {
    const navigation = useNavigation();


    const isFirstUse = useCommonData(state => state.isFirstUse)
    const timer = useRef<NodeJS.Timeout>()


    function navigateToNextPage() {

        let nextPage = "flash-3"
        // if (!isFirstUse) {
        //     nextPage = "home-page"
        // }

        // timer.current = setTimeout(() => {
        //     // @ts-ignore
        //     navigation.navigate(nextPage)
        // }, 3000)

        //      @ts-ignore
        navigation.navigate(nextPage)

    }
    useEffect(() => {
        // routeNextPage()

        // return () => {
        //     if (!timer.current) return;
        //     clearTimeout(timer.current)
        // }
    }, [])

    function onPress() {
        navigateToNextPage()
    }

    return (
        <FlashComponent
            flashIndex={1}
            topImage={require("assets/flash_2_top.png")}
            button={
                <TouchableOpacity
                    onPress={onPress}
                >
                    <ImageBackground
                        source={require("assets/flash_2_btn.png")} style={{ width: 150, height: 64, justifyContent: "center", alignItems: "center" }}>
                        {/* <Image source={require("assets/flash_1_btn_icon.png")} /> */}
                    </ImageBackground>
                </TouchableOpacity>
            }
        />

    )
}