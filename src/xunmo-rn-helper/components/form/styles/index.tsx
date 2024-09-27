import { StyleSheet } from "react-native";
import { GlobalStyleType } from "xunmo-rn-helper/providers/GlobalStyleProvider";

export function createGroupStyle(globalStyle: GlobalStyleType) {

    return StyleSheet.create({

        formFieldContainer: {
            marginTop: globalStyle.gap_form_field,
        },
        formCaptionContainer: {
            height: globalStyle.height_form_caption, marginBottom: 10
        },
        formIconContainer: {
            height: globalStyle.height_form_caption,
            width: globalStyle.width_form_icon,
        },
    })
}