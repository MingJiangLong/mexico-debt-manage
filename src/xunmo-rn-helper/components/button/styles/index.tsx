import { StyleSheet } from "react-native";
import { GlobalStyleType } from "xunmo-rn-helper/providers/GlobalStyleProvider";

export default (globalStyle: GlobalStyleType) => StyleSheet.create({

    buttonBaseContainer: {
        borderRadius: globalStyle.border_radius_button,
        height: globalStyle.height_button,
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    linearGradient: {
        borderRadius: globalStyle.border_radius_button,
        height: globalStyle.height_button,
    },

    linearGradientBg: {
        color: globalStyle.background_color_button_linear_gradient as any
    },


    ghostButtonContainer: {
        borderColor: globalStyle.color_button_ghost,
        backgroundColor: "#FFFFFF"
    },

    ghostButtonText: {
        color: globalStyle.color_button_ghost,
        lineHeight: globalStyle.height_button,
        fontSize: globalStyle.font_size_button,
        textAlign: 'center',
    },

    buttonText: {
        fontSize: globalStyle.fontSize_button,
        textAlign: 'center',
        color: globalStyle.color_button_inverse,
    },
})