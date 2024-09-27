import { StyleSheet } from "react-native";
import { GlobalStyleType } from "xunmo-rn-helper/providers/GlobalStyleProvider";

export function createGroupStyle(globalStyle: GlobalStyleType) {
    return StyleSheet.create({
        container: {},
        
        noticeContainer: {
            borderRadius: globalStyle.borderRadius_notice_container,
            backgroundColor: globalStyle.backgroundColor_notice_container,
            width: globalStyle.width_notice_container,
            paddingHorizontal: globalStyle.paddingHorizontal_notice_container,
            paddingVertical: globalStyle.paddingVertical_notice_container
        },
    })
}