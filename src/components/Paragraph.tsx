import { View } from "react-native"
import Text from "xunmo-rn-helper/components/text"

type ParagraphProps = {
    title?: string
    content?: string
}
export default function (props: ParagraphProps) {
    const { title, content } = props

    return (
        <View style={{
            paddingTop: 19,
            paddingBottom: 16
        }}>

            {
                !!title && (
                    <Text.SubHead style={{ paddingBottom: 4 }}>{title}</Text.SubHead>
                )
            }

            <Text.Paragraph>{content}</Text.Paragraph>
        </View>
    )
}