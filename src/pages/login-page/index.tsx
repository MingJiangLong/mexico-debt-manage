import RadiusComponent from "components/radius.component";
import { useState } from "react";
import { ImageBackground, StatusBar, StyleSheet, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { calcAutoHeightFixedWidth, calcHeight } from "utils";
import { Button, Text } from "xunmo-rn-helper/components";
import Flex from "xunmo-rn-helper/components/flex";
import FormField from "xunmo-rn-helper/components/form/form-field";
import MessageInput from "xunmo-rn-helper/components/input/message-input";
import PhoneNumber from "xunmo-rn-helper/components/input/phone-number";
import VerifyCodeComponent from "./components/verify-code.component";
import { useNavigation } from "@react-navigation/native";
import { ROUTE_HOME } from "pages/home-page";


const bgImage = require("assets/login_top.png")
export const ROUTE_LOGIN = "login-page"

/**
 * 登陆页
 * @returns 
 */
export default function () {
    const { width, height } = useWindowDimensions()

    const [phoneNumber, setPhoneNumber] = useState<string>();
    const [checked, setChecked] = useState(false)

    const navigation = useNavigation()


    function navigateTo(path: string) {
        // @ts-ignore
        navigation.navigate(path)
    }
    /**
     * 发送短信按钮
     */
    function onPressBtnSend() {

    }


    function onPressBtnConfirm() {

        // TODO:校验信息
        navigateTo(ROUTE_HOME)
    }

    /**
     * 点击隐私政策
     */
    function onPressLinkPolicy() {

    }
    return (
        <View style={{ flex: 1 }}>
            <StatusBar hidden={false} />
            <ImageBackground
                source={bgImage}
                style={[
                    {
                        flexDirection: "column",
                        justifyContent: "flex-end"
                    },
                    calcAutoHeightFixedWidth(375 / 294, "1")]}>
                <View style={{ paddingHorizontal: 14 }}>
                    <Text.Heading style={{ paddingBottom: 10 }}>hdsjahdkjahd</Text.Heading>
                    <Text.Caption color={"#666666"} style={{ paddingBottom: height * .07 }}>Domine la deuda y los ahorros, comience aquí</Text.Caption>
                </View>
            </ImageBackground>

            <View style={styles.content}>
                <FormField caption="Número de teléfono">
                    <PhoneNumber
                        prefix="+52"
                        placeholder="Por favor escribe"
                        value={phoneNumber}
                        onChangeText={value => setPhoneNumber(value)}

                    />
                </FormField>
                <FormField caption="Código de verificación">
                    <VerifyCodeComponent disabled={!phoneNumber} />
                </FormField>

                <Flex.Vertical
                    alignItems="center">
                    <Text.Link
                        style={
                            { paddingBottom: 14, }
                        }
                    >¿No puedes recibir el código de verificación? Verificación de voz</Text.Link>
                    <Button.Image
                        onPress={onPressBtnConfirm}
                        title="Iniciar sesión"
                        backgroundImage={require("assets/btn_343_58.png")}
                        style={calcAutoHeightFixedWidth(343 / 58, '.91')}
                    />

                    <RadiusComponent
                        checked={checked}
                        onPress={() => setChecked(pre => !pre)}
                        desc={
                            [
                                <Text.RadiusCaption>
                                    He leído y acepto la
                                </Text.RadiusCaption>,
                                <Text.RadiusCaption color="#F5528C" style={{ paddingLeft: 4 }}>
                                    {`<política de privacidad>`}
                                </Text.RadiusCaption>,

                            ]

                        } />
                </Flex.Vertical>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    content: {
        flex: 1,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 16,
        paddingTop: 10,
        marginTop: -20
    }
})