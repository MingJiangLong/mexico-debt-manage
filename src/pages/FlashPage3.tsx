import { useNavigation } from "@react-navigation/native";
import FlashComponent from "components/flash.component";
import { useEffect, useRef } from "react";
import { ImageBackground, Text, TouchableOpacity } from "react-native";
import useCommonData from "store/useCommonData";
import { useShallow } from "zustand/react/shallow";

export default function () {

    const { updateIsFirstUse, haveLogin } = useCommonData(useShallow(state => ({
        updateIsFirstUse: state.updateIsFirstUse,
        haveLogin: state.userToken !== void 0
    })))
    const navigation = useNavigation();

    const timer = useRef<NodeJS.Timeout>()

    function routeNextPage(pathName: string) {
        // @ts-ignore
        navigation.navigate(pathName)
    }

    function onPress() {
        let pathName = "home-page";
        if (!haveLogin) pathName = "login-page"
        routeNextPage(pathName)
    }

    useEffect(() => {
        // routeNextPage()
        // return () => {
        //     if (timer.current) {
        //         clearTimeout(timer.current)
        //     }
        // }
    }, [])
    return (
        <FlashComponent
            flashIndex={2}
            topImage={require("assets/flash_3_top.png")}
            button={
                <TouchableOpacity onPress={onPress}>
                    <ImageBackground
                        source={require("assets/flash_3_btn.png")} style={{ width: 240, height: 64, justifyContent: "center", alignItems: "center" }}>
                        {/* <Image source={require("assets/flash_1_btn_icon.png")} /> */}
                    </ImageBackground>
                </TouchableOpacity>
            }
        />
    )
}