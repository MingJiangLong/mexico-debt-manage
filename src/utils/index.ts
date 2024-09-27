import { Dimensions } from "react-native";

import { NativeModules, Platform, StatusBar } from "react-native"


const { StatusBarManager } = NativeModules
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? StatusBarManager.HEIGHT : (StatusBarManager && StatusBarManager.HEIGHT) || StatusBar.currentHeight

const i18Source = require("../i18n/zh.json")
/**
 * 
 * @param aspectRatio 宽高比
 * @param width 宽度
 */
export function calcHeight(aspectRatio: number, width: number) {
    return width / aspectRatio;
}


export function calcAutoHeightFixedWidth(aspectRatio: number, currentWidth: number | string) {
    const { width } = Dimensions.get("window");

    let percentWidth = 0;
    if (typeof currentWidth === 'number') {
        percentWidth = currentWidth / width
    }

    if (typeof currentWidth === 'string') {
        percentWidth = +currentWidth
    }

    let renderWidth = percentWidth * width;
    let renderHeight = renderWidth / aspectRatio;

    return {
        height: renderHeight,
        width: renderWidth
    }
}



export function translate(key: string) {

    // TODO:语言判断
    // TODO:资源加载

    return i18Source?.[key] ?? "?_?"
}
