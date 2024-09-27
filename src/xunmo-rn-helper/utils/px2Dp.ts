import { PixelRatio } from "react-native";

export function px2Dp(px: number) {
    return PixelRatio.getPixelSizeForLayoutSize(px)
}

export function dp2Px(dp: number) {
    return PixelRatio.roundToNearestPixel(dp)
}