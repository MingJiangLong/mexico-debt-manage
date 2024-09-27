import { Image, ImageSourcePropType } from "react-native";
import Flex from "xunmo-rn-helper/components/flex";

const imageIcon = require("assets/image_40.png")
const cameraIcon = require("assets/camera_40.png")
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text } from "xunmo-rn-helper/components";
function SelectImageOrigin() {


    return (
        <>
            <Item imageSource={imageIcon} title="Fotografía" />
            <Item imageSource={cameraIcon} title="Subir desde álbum" />
        </>
    )

}


type ItemProps = {
    imageSource?: ImageSourcePropType
    title: string
    onPress?: () => void
}
function Item(props: ItemProps) {



    return (
        <Flex.Horizontal alignItems="center">
            <Image />
            <Text.FormCaption></Text.FormCaption>
            <Icon name="angle-right" />
        </Flex.Horizontal>
    )
}