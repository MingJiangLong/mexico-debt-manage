import { calcAutoHeightFixedWidth } from "utils"
import { memo, useState } from "react"
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import { Image, ImageBackground, ImageSourcePropType, TouchableOpacity, ViewStyle } from "react-native";
import { Flex, Icon, Text } from "xunmo-rn-helper/components";
import ModalComponent from "./modal.component";
const imageIcon = require("assets/image_40.png")
const cameraIcon = require("assets/camera_40.png")
import Icon2 from 'react-native-vector-icons/FontAwesome'
type CameraProps = {
    onChooseImage?: (image?: string) => void
    imageUri?: string
    disabled?: boolean
}
function Camera(props: CameraProps) {

    const { onChooseImage, imageUri } = props
    const [showModal, setShowModal] = useState(false)
    async function onPressBtn() {
        setShowModal(true)
    }

    async function openGallery() {

        try {
            setShowModal(false)
            const result = await ImagePicker.openPicker({
                cropping: true,
            })
            onChooseImage && onChooseImage(result.sourceURL)
        } finally {
            setShowModal(false)
        }

    }

    async function openCamera() {
        try {
            setShowModal(false)
            const result = await ImagePicker.openCamera({
                cropping: true,
            })
            onChooseImage && onChooseImage(result.sourceURL)
        } finally {
            setShowModal(false)
        }

    }



    return (
        <>
            <ModalComponent visible={showModal} >
                <Item imageSource={imageIcon} title="Fotografía" onPress={openGallery} />
                <Item imageSource={cameraIcon} title="Subir desde álbum" onPress={openCamera} />
            </ModalComponent>
            {
                !!imageUri ? (
                    <TouchableOpacity onPress={onPressBtn}>
                        <ImageBackground
                            source={{ uri: imageUri }}
                            style={{ ...calcAutoHeightFixedWidth(1, ".3"), }}
                        />
                    </TouchableOpacity>
                ) : (

                    <TouchableOpacity
                        onPress={onPressBtn}
                        disabled={props.disabled}
                        style={{
                            ...calcAutoHeightFixedWidth(1, ".3"),
                            backgroundColor: "#F9F9F9",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <Icon name="plus" color={"#CECECE"} size={30} style={{ fontWeight: "normal" }} />
                    </TouchableOpacity>
                )
            }
        </>
    )
}

export default memo(Camera)

type ItemProps = {
    imageSource?: ImageSourcePropType
    title: string
    onPress?: () => void
    style?: ViewStyle
}
function Item(props: ItemProps) {
    const { imageSource, title, onPress } = props
    return (
        <Flex.Horizontal alignItems="center" style={{ paddingVertical: 5, ...props.style }} onPress={() => {
            onPress && onPress()
        }}>
            <Image source={imageSource} style={{ marginRight: 8 }} />
            <Text.FormCaption style={{ flex: 1 }}>{title}</Text.FormCaption>
            <Icon2 name="angle-right" size={24} />
        </Flex.Horizontal>
    )
}