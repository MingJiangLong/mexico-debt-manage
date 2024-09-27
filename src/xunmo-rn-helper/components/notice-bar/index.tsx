import { ReactNode, useMemo } from "react"
import Flex from "../flex"
import Icon from "../icon"
import Text from '../text'
type NoticeBarProps = {
    icon?: ReactNode
    desc?: string
}
function NoticeBar(props: NoticeBarProps) {


    const lastIcon = useMemo(() => {
        const { icon } = props
        if (icon) return icon;
        return <Icon name="circle" />
    }, [props])


    return (
        <Flex.Horizontal style={{ backgroundColor: "red" }}>
            {
                lastIcon
            }
            <Text>{props.desc}</Text>
        </Flex.Horizontal>
    )
}