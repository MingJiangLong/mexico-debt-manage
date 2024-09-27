import { TextInputProps, View } from 'react-native'
import { memo, ReactNode, useEffect, useMemo, useRef, useState } from 'react'
import { Button, Flex, Text } from 'xunmo-rn-helper/components'
import Input from 'xunmo-rn-helper/components/input'
import useCommonData from 'store/useCommonData'
import { useShallow } from 'zustand/react/shallow'


type MessageInputProps = {
    disabled?: boolean
} & TextInputProps
function MessageInput(props: MessageInputProps) {

    const timerRef = useRef<any>();
    const { count, mulCount, resetCount, isBtnDisabled } = useCommonData(useShallow(state => (
        {
            count: state.count,
            mulCount: () => state.updateCount("mul"),
            resetCount: () => state.updateCount("reset"),
            isBtnDisabled: (state.count > 0 && state.count < 60) || props.disabled
        }
    )))

    const unsubscribeCount = useCommonData.subscribe(state => state.count, (current, pre) => {
        if (current <= 0) {
            clearInterval(timerRef.current)
            resetCount()
        }

    })

    function startCountdown() {
        timerRef.current = setInterval(() => {
            mulCount()
        }, 1000)
    }

    function onPress() {
        // resetCount()
        mulCount()
        startCountdown()
    }


    useEffect(() => {
        if (isBtnDisabled) {
            startCountdown()
        }

        return () => {
            unsubscribeCount()
        }
    }, [])



    const textShow = useMemo(() => {
        if (props.disabled) return "Obtener"
        if (isBtnDisabled) return `${count}s`
        return "Obtener"
    }, [count, isBtnDisabled, props])

    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Input placeholder='Por favor escribe' value={`${count}`} containerStyle={{ flex: 1 }} />
            <Button style={{ height: 32, width: 107, backgroundColor: "#F5528C" }} disabled={isBtnDisabled} onPress={onPress}>

                <Text.ButtonCaption style={{ color: "white", fontSize: 14 }}>
                    {
                        textShow
                    }
                </Text.ButtonCaption>
            </Button>
        </View>
    )
}


export default memo(MessageInput)