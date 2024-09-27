import { memo, PropsWithChildren, useMemo, } from "react";
import { Dimensions, Image, StyleSheet, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { calcAutoHeightFixedWidth } from "utils";
import { Button, Flex, Modal, Text } from "xunmo-rn-helper/components";
import Icon from 'react-native-vector-icons/Ionicons'
type XmModalProps = {
    visible: boolean
    title?: string

    specialBtnTitle?: string
    onPressSpecialBtn?: () => void
    onClose?: () => void
} & PropsWithChildren

function XMModal(props: XmModalProps) {
    const {
        title,
        specialBtnTitle,
        onClose,
        onPressSpecialBtn
    } = props;
    const { width } = useWindowDimensions()

    const btImageSize = calcAutoHeightFixedWidth(343 / 58, '.7')

    const contextPaddingVertical = 16
    return (
        <Modal visible={props.visible}>
            <View style={[styles.modalBgContainer, { flexDirection: "row", justifyContent: 'center', alignItems: 'center' }]}>
                <View style={{ width: "90%", minHeight: 100, backgroundColor: 'transparent' }}>
                    {
                        !!title && (
                            <Text.Heading fontWeight={"700"} fontSize={18} color={"#FFFFFF"} style={{ textAlign: "center", paddingBottom: 18 }}>{title}</Text.Heading>
                        )
                    }
                    <View style={{
                        borderWidth: StyleSheet.hairlineWidth, borderColor: "#FFF",
                        borderRadius: 15,
                        backgroundColor: "#605F5F",
                        padding: 10,

                    }}>
                        <View
                            style={{
                                borderRadius: 15,
                                width: "100%",
                                paddingVertical: contextPaddingVertical,
                                paddingHorizontal: 19,
                                position: 'relative',
                                backgroundColor: "#FFFFFF"

                            }}>
                            {
                                props.children
                            }

                            {
                                !!specialBtnTitle && (
                                    <TouchableOpacity
                                        style={{
                                            position: "relative",
                                            bottom: -(contextPaddingVertical + btImageSize.height / 2),
                                            flexDirection: "row",
                                            justifyContent: "center"
                                        }}>
                                        <Button.Image
                                            onPress={() => {
                                                onPressSpecialBtn && onPressSpecialBtn()
                                            }}
                                            backgroundImage={require("../assets/btn_343_58.png")}
                                            style={btImageSize}
                                            title={specialBtnTitle}
                                        />
                                    </TouchableOpacity>
                                )
                            }


                        </View>

                    </View>
                    <Flex.Horizontal justify="center" style={{ marginTop: 30 + (!!specialBtnTitle ? (btImageSize.height / 2) : 0) }}>
                        <Icon name="close-circle-outline" size={40} color={"#FFFFFF"} onPress={() => {
                            onClose && onClose()
                        }} style={{ textAlign: 'center', }} />
                    </Flex.Horizontal>
                </View>
            </View>
        </Modal>
    )

}


export default memo(XMModal)

const styles = StyleSheet.create({



    modalBgContainer: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        backgroundColor: "#262626"
    },
    modalContainer: {

    },
    modalSubContainer: {

    }
})