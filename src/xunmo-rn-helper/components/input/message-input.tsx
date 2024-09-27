import { StyleSheet, TextInputProps, View } from 'react-native'
import Button from '../button'
import Input from './index'
import { memo, ReactNode, useState } from 'react'
import Text from '../text'
import Flex from '../flex'


type MessageInputProps = {
    button?: ReactNode
    countDown?: number
} & TextInputProps
function MessageInput(props: MessageInputProps) {

    return (
        <Flex.Horizontal alignItems='center'>
            <Input placeholder='Por favor escribe' containerStyle={{
                   borderBottomColor: "#DCDCE0",
                   borderBottomWidth: StyleSheet.hairlineWidth,
            }}/>
            <Button  style={{ height: 32, width: 107, backgroundColor: "#F5528C" }} >
                <Text.ButtonCaption style={{ color: "white", fontSize: 14 }}>Obtener</Text.ButtonCaption>
            </Button>
        </Flex.Horizontal>
    )
}


export default memo(MessageInput)