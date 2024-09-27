import { StyleSheet } from "react-native";
import { GlobalStyleType } from "xunmo-rn-helper/providers/GlobalStyleProvider";

export function createGroupStyle(globalStyle: GlobalStyleType) {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: globalStyle.backgroundColorPageContainer,
            paddingHorizontal: globalStyle.paddingHorizontalPageContainer,
            paddingTop: globalStyle.paddingTopPageContainer
        }
    })
}