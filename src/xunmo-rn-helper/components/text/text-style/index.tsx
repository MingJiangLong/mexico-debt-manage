import { StyleSheet } from "react-native"
import vietnamStyle from "xunmo-rn-helper/global-styles/vietnam.style"
export default function (globalStyle: typeof vietnamStyle) {

    return StyleSheet.create({
        heading: {
            fontSize: globalStyle.font_size_text_heading,
            fontWeight: "bold",
            color: globalStyle.color_text_heading
        },
        subhead: {
            fontSize: globalStyle.font_size_text_subhead,
            fontWeight: "bold",
            color: globalStyle.color_text_subhead
        },
        caption: {
            fontSize: globalStyle.font_size_caption,
            fontWeight: "bold",
        },
        base: {
            fontSize: globalStyle.font_size_base,
            color: globalStyle.color_text_base,
        },
        placeholder_style: {
            color: globalStyle.color_text_disabled,
            fontSize: globalStyle.font_size_base
        },
        paragraph: {
            color: globalStyle.color_text_paragraph,
            fontSize: globalStyle.font_size_base,
            lineHeight: globalStyle.line_height_text_paragraph
        },
        link: {
            color: globalStyle.color_text_link,
            fontSize: globalStyle.font_size_text_link
        },

        formCaptionText: {
            fontSize: globalStyle.fontSize_form_caption,
            fontWeight: globalStyle.fontWeight_form_caption,
            color: globalStyle.color_form_caption,
        },
        buttonCaptionText: {
            fontSize: globalStyle.fontSize_button,
            fontWeight: globalStyle.fontWeight_form_caption,
            color: globalStyle.color_button
        },
        radiusCaptionText: {
            fontSize: globalStyle.fontSize_radius_text,
            fontWeight: globalStyle.fontWeight_radius_text,
            color: globalStyle.color_radius_text
        },
        linkCaptionText: {
            fontSize: globalStyle.fontSize_link_text,
            fontWeight: globalStyle.fontWeight_link_text,
            color: globalStyle.color_link_text,
            textDecorationColor: globalStyle.textDecorationColor_link_text,
            textDecorationLine: globalStyle.textDecorationLine_link_text,
        },
        captionText: {
            fontSize: globalStyle.fontSize_caption,
            fontWeight: 400
        },
        inputCaptionText: {
            fontSize: globalStyle.fontSize_input_text,
            fontWeight: globalStyle.fontWeight_input_text,
            color: globalStyle.color_input_text,
        },
        inputPlaceholderText: {
            fontSize: globalStyle.fontSize_input_text,
            fontWeight: globalStyle.fontWeight_input_text,
            color: globalStyle.color_input_placeholder_text,
        },
        noticeCaptionText: {
            fontSize: globalStyle.fontSize_notice_text,
            fontWeight: globalStyle.fontWeight_notice_text,
            color: globalStyle.color_notice_text,
        }

    })
}
