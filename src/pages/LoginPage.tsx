import RadiusComponent from "components/radius.component";
import { useState } from "react";
import { ImageBackground, StatusBar, StyleSheet, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { calcHeight } from "utils";
import { Button, Text } from "xunmo-rn-helper/components";
import Flex from "xunmo-rn-helper/components/flex";
import FormField from "xunmo-rn-helper/components/form/form-field";
import MessageInput from "xunmo-rn-helper/components/input/message-input";
import PhoneNumber from "xunmo-rn-helper/components/input/phone-number";

export default function () {
    const { width } = useWindowDimensions()
    const [checked, setChecked] = useState(false)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar />
            <ImageBackground
                source={require("assets/login_top.png")}
                style={{
                    height: 240,

                    flexDirection: "column",
                    justifyContent: "flex-end"
                }}>
                <View style={{ paddingHorizontal: 16 }}>
                    <Text.Heading style={{ paddingBottom: 16 }}>hdsjahdkjahd</Text.Heading>
                    <Text.Caption style={{ paddingBottom: 20 }}>Domine la deuda y los ahorros, comience aquí</Text.Caption>
                </View>
            </ImageBackground>

            <View style={styles.content}>
                <View >
                    <FormField caption="Número de teléfono">
                        <PhoneNumber prefix="+52" placeholder="Por favor escribe" />
                    </FormField>
                    <FormField caption="Código de verificación">
                        <MessageInput />
                    </FormField>
                </View>
                <Flex.Vertical
                    alignItems="center">
                    <Text.Link
                        style={
                            { paddingTop: 20, paddingBottom: 14, }
                        }
                    >¿No puedes recibir el código de verificación? Verificación de voz</Text.Link>
                    <Button.Image
                        title="Iniciar sesión"
                        backgroundImage={require("assets/btn_343_58.png")} width={width * .91} height={calcHeight(343 / 58, width * .91)} />

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

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    content: {
        flex: 1,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 8,
        paddingTop: 24,
    }
})