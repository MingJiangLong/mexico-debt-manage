import { StyleProp, Text as RnText, TextProps, TextStyle } from "react-native";
import { GlobalStyleConsumer, useCreateGroupStyle } from "xunmo-rn-helper/providers/GlobalStyleProvider";
import createGroupStyle from "./text-style";
import { PropsWithChildren, PureComponent, ReactNode, useMemo } from "react";

type XmTextProps = {
    color?: TextStyle["color"]
    fontSize?: TextStyle["fontSize"],
    fontWeight?: TextStyle["fontWeight"]
} & TextProps & PropsWithChildren

type BasicTextProps = {
    styleGroupName: string | string[]
} & XmTextProps

export default class Text extends PureComponent<XmTextProps> {

    static Basic(props: BasicTextProps) {
        const groupStyle = useCreateGroupStyle(createGroupStyle)
        const styles = useMemo(() => {
            const { color, fontWeight, fontSize, styleGroupName } = props

            let temp = typeof styleGroupName === 'string' ? [styleGroupName] : styleGroupName
            // @ts-ignore
            let tempArr = temp.map(item => groupStyle[item])
            return [
                ...tempArr,
                { backgroundColor: "transparent" },
                color ? { color } : {},
                fontWeight ? { fontWeight } : {},
                fontSize ? { fontSize } : {},
                props.style
            ]
        }, [groupStyle, props])

        return (
            <RnText {...props} style={styles} />
        )
    }

    static FormCaption(props: XmTextProps) {
        return <Text.Basic {...props} styleGroupName="formCaptionText" />
    }

    static ButtonCaption(props: XmTextProps) {
        return <Text.Basic {...props} styleGroupName="buttonCaptionText" />
    }

    static RadiusCaption(props: XmTextProps) {
        return <Text.Basic {...props} styleGroupName="radiusCaptionText" />
    }

    static InputCaption(props: XmTextProps) {
        return <Text.Basic {...props} styleGroupName="inputCaptionText" />
    }

    static Link(props: XmTextProps) {
        return <Text.Basic {...props} styleGroupName="linkCaptionText" />
    }

    static NoticeCaption(props: XmTextProps) {
        return <Text.Basic {...props} styleGroupName="noticeCaptionText" />
    }










    static Heading(props: XmTextProps) {
        return (
            <Text.Basic {...props} styleGroupName="heading" />
        )
    }

    static Caption(props: XmTextProps) {
        return (
            <Text.Basic {...props} styleGroupName="caption" />
        )
    }


    static SubHead(props: XmTextProps) {
        const groupStyle = useCreateGroupStyle(createGroupStyle)
        return (
            <RnText {...props} style={[groupStyle.subhead, props.style]} />
        )
    }

    static Base(props: XmTextProps) {
        const groupStyle = useCreateGroupStyle(createGroupStyle)
        return (
            <RnText {...props} style={[groupStyle.base, props.style]} />
        )
    }

    static Placeholder(props: XmTextProps) {
        const groupStyle = useCreateGroupStyle(createGroupStyle)
        return (
            <RnText {...props} style={[groupStyle.placeholder_style, props.style]} />
        )
    }

    static Paragraph(props: ParagraphProps) {
        const groupStyle = useCreateGroupStyle(createGroupStyle)
        return (

            <RnText {...props} style={[groupStyle.paragraph, props.style]} />
        )
    }


    render(): ReactNode {
        return <Text.Basic {...this.props} styleGroupName="base" />
    }

}

type ParagraphProps = {
    title?: string
    paragraph?: string
} & TextProps

