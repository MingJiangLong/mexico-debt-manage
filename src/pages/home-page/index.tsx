import { useNavigation } from "@react-navigation/native";
import { ROUTE_DEBT_HOME } from "pages/debt-list-page";
import { useMemo, useState } from "react";
import { Image, ImageBackground, ScrollView, StatusBar, useWindowDimensions, View } from "react-native";
import { calcHeight } from "utils";
import { Button, Text } from "xunmo-rn-helper/components";
import Flex from "xunmo-rn-helper/components/flex";
export const ROUTE_HOME = "home-page"

/**
 * 主页
 * @returns 
 */
export default function () {


    const dimensions = useWindowDimensions()

    const size = useMemo(() => {
        const { height, width } = dimensions
        const imageHeight = calcHeight(375 / 350, width)
        return {
            bgSize: {
                width,
                height: imageHeight
            },
            bgDesc: {
                paddingTop: imageHeight * .3
            },
            cardContainer: {
                width: width * .97,
                height: calcHeight(359 / 350, width * .96),
                position: "relative" as const,
                top: -imageHeight * 0.4,

            },
            cardSize: {
                width: width * .97,
                height: calcHeight(359 / 350, width * .96),
            },
            guySize: {
                width: width * .392,
                height: calcHeight(141 / 166, width * .392),
            }
        }
    }, [dimensions])


    const navigation = useNavigation()
    function onPressDebt() {
        // @ts-ignore
        navigation.navigate(ROUTE_DEBT_HOME)
    }

    const [count, setCount] = useState(1);
    const [visible, setVisible] = useState(false);
    const [obj, setObj] = useState({ count: 1 })
    return (
        <ScrollView >
            <StatusBar />

            <ImageBackground source={require("assets/home-top.png")} style={{
                ...size.bgSize
            }}>
                <Text.Heading
                    style={[{ color: "#FFFFFF", paddingLeft: 14 }, size.bgDesc]}
                    fontWeight={"600"} fontSize={22}>Use su dinero con un plan y administra tus finanzas más fácilmente</Text.Heading>
            </ImageBackground>
            <Flex.Vertical alignItems="center">
                <View
                    style={[size.cardContainer]}
                >
                    <Image
                        resizeMode="cover"
                        style={[{ position: 'absolute' }, size.cardSize,]}
                        source={require("assets/home-card.png")}
                    />
                    <Text.Heading color={"#AF4803"} fontSize={20} fontWeight={"600"} style={{ marginLeft: 10, paddingTop: 10 }}>Confiable</Text.Heading>

                    <Flex.Horizontal style={{ flex: 1, marginTop: dimensions.height * .08 }}>
                        <View style={{ flex: 1, width: "50%", alignItems: "center", position: "relative" }}>
                            <Image source={require("assets/blue-guy.png")} style={
                                size.guySize
                            } />
                            <Text.Heading style={{
                                position: "absolute",
                                top: size.guySize.height * .62,
                                color: "white",
                                transform: [
                                    { rotateZ: "-3deg" }
                                ]
                            }}>Liquidar deuda</Text.Heading>
                            <Button.Image
                                onPress={onPressDebt}
                                backgroundImage={require("assets/blue-btn.png")} width={124} height={53} />
                        </View>
                        <View style={{ flex: 1, width: "50%", alignItems: "center" }}>
                            <Image source={require("assets/red-guy.png")} style={
                                size.guySize
                            } />
                            <Text.Heading style={{
                                position: "absolute",
                                top: size.guySize.height * .62,
                                color: "white",
                                transform: [
                                    { rotateZ: "-3deg" }
                                ]
                            }}>Metas de ahorro</Text.Heading>
                            <Button.Image backgroundImage={require("assets/pink-btn.png")} width={124} height={53}
                                onPress={() => {
                                }}
                            />
                        </View>
                    </Flex.Horizontal>
                </View>
            </Flex.Vertical>
        </ScrollView>
    )
}