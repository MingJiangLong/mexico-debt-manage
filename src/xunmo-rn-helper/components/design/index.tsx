import { createContext, PropsWithChildren } from "react"
import { Dimensions, PixelRatio, View } from "react-native"

type DesignSize = {
    width: number,
    height: number
}

const { width: windowDpWidth, height: windowDpHeight } = Dimensions.get("window")

const windowPxWidth = dp2Px(windowDpWidth);
const windowPxHeight = dp2Px(windowDpHeight);
const pixelRatio = PixelRatio.get();// 密度




type DesignFixedProps = {

} & PropsWithChildren

export class Design {
    static designSize = {
        pxWidth: 750,
        pxHeight: 1624,
    }

    static FixedViewWidth(props: DesignFixedProps) {

        let scale = Design.designSize.pxWidth / windowPxWidth;
        // 根据比例计算出设计
        let width = Design.designSize.pxWidth;
        let height = Design.designSize.pxHeight / scale;
        let rnScale = 1 / pixelRatio / scale;

        return (
            <View
                style={{
                    width: width,
                    height: height,
                    backgroundColor: 'red',
                    transform: [
                        { translateX: -width * .5 },
                        { translateY: -height * .5 },
                        { scale: rnScale },

                        { translateX: width * .5 },
                        { translateY: height * .5 }
                    ]
                }} >
                {props.children}
            </View>
        )

    }
}

function px2Dp(px: number) {


    return px * PixelRatio.get()
    return PixelRatio.getPixelSizeForLayoutSize(px)
}

function dp2Px(dp: number) {
    return dp / PixelRatio.get()
}

const DesignContext = createContext({
    width: 375,
    height: 812
})

function useDesign() {

}
