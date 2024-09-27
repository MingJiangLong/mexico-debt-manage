import { Fragment, memo, PropsWithChildren, ReactNode } from "react"
import { KeyboardAvoidingView, StatusBar, Text, View, ViewStyle } from "react-native"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import { useCreateGroupStyle } from "xunmo-rn-helper/providers/GlobalStyleProvider"
import { createGroupStyle } from "./styles"

type PageContainerProps = {
    style?: ViewStyle
    footer?: ReactNode
} & PropsWithChildren
function PageContainer(props: PageContainerProps) {
    const insets = useSafeAreaInsets();

    const { children, footer, style } = props
    const groupStyle = useCreateGroupStyle(createGroupStyle)
    
    return (
        <View
            style={{
                flex: 1,
                // justifyContent: 'space-between',
                // alignItems: 'center',

                // Paddings to handle safe area
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }}
        >
            {children}
        </View>
    )
}

export default memo(PageContainer)