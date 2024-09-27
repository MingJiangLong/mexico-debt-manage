import { ImageBackground, StatusBar, useWindowDimensions } from "react-native";
import { calcHeight, STATUSBAR_HEIGHT } from "utils";
import PersonInfoComponent from "./components/person-info.component";
import { Text } from "xunmo-rn-helper/components";
export const ROUTE_SETTING = "setting-page"

/**
 * 设置页
 * @returns 
 */
export default function SettingPage() {

    const { width } = useWindowDimensions()



    return (
        <>
            <StatusBar translucent />
            <ImageBackground source={require("../../assets/setting-bg.png")} style={{
                width,
                height: calcHeight(375 / 388, width)
            }} >
                <Text.Heading style={{ marginTop: STATUSBAR_HEIGHT, textAlign: "center", color: "#FFFFFF", paddingVertical: 9 }}>Milo</Text.Heading>
                <PersonInfoComponent />
            </ImageBackground>

        </>
    )
}