import { StyleSheet } from "react-native"
import vietnamStyle from "xunmo-rn-helper/global-styles/vietnam.style"
export default function (globalStyle: typeof vietnamStyle) {

    return StyleSheet.create({

        inputContainer: {
            alignItems: "center",
            paddingHorizontal: 10
        },
        input: {
            // height: globalStyle.height_input
        },
        inputCaptionText: {
            fontSize: globalStyle.fontSize_input_text,
            fontWeight: globalStyle.fontWeight_input_text,
            color: globalStyle.color_input_text,
            paddingHorizontal: globalStyle.paddingHorizontal_input_text,
            paddingVertical: 10
        },
        inputPlaceholderText: {
            fontSize: globalStyle.fontSize_input_text,
            fontWeight: globalStyle.fontWeight_input_text,
            color: globalStyle.color_input_placeholder_text,
        }

    })
}
