import { ReactNode } from "react"
import { StyleSheet, View } from "react-native"

type PageContainerProps = {

    children: ReactNode

}

export default function (props: PageContainerProps) {

    const { children } = props


    return (
        <View style={styles.container}>
            {children}
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        width: "100%",
        paddingHorizontal: 16,
        paddingVertical: 10
    }
})