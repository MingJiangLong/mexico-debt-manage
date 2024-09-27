import { StyleSheet } from "react-native";
import { GlobalStyleType } from "xunmo-rn-helper/providers/GlobalStyleProvider";

export default (globalStyle: GlobalStyleType) => StyleSheet.create({

    flex_horizontal: {
        flexDirection: "row",
    },
    flex_vertical: {
        flexDirection: "column",
    },
})