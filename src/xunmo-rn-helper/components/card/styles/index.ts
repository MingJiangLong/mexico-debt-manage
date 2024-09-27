import { StyleSheet } from "react-native";
import { GlobalStyleType } from "xunmo-rn-helper/providers/GlobalStyleProvider";

export function createGroupStyle(_style: GlobalStyleType) {
    return StyleSheet.create({
        container: {
            paddingHorizontal: _style.paddingHorizontal_card,
            paddingVertical: _style.paddingVertical_card,
            borderRadius: _style.borderRadius_card,
            borderColor: _style.borderColor_card,
            borderWidth: _style.borderWidth_card,
            // only ios
            backgroundColor: "#FFFFFF", // 设置阴影一定要设置背景色
            shadowColor: "#FF71A5",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: .2,//(ADVICE) View #223 of type RCTView has a shadow set but cannot calculate shadow efficiently. Consider setting a solid background color to fix this, or apply the shadow to a more specific component.
            shadowRadius: 2
        }
    })
}