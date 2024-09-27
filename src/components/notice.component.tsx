import { createContext, memo, PropsWithChildren, useContext, useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "xunmo-rn-helper/components";
import Modal from "xunmo-rn-helper/components/modal";

type NoticeContext = {
    open: (message: string, duration?: number) => void
}
export const NoticeContext = createContext<NoticeContext>({
    open(message) {
    },
})

type NoticeProviderProps = {} & PropsWithChildren
export default function NoticeProvider(props: NoticeProviderProps) {

    const timerRef = useRef<NodeJS.Timeout>();
    const [message, setMessage] = useState<string>()
    const [visible, setVisible] = useState(false)

    function clear() {
        if (!timerRef.current) return
        clearTimeout(timerRef.current)
        timerRef.current = undefined
    }
    function open(message: string, duration = 3000) {
        clear()
        setMessage(message);
        setVisible(true)
        timerRef.current = setTimeout(() => {
            setVisible(false)
            clear()
        }, duration)

    }

    useEffect(() => {
        return () => {
            clear()
        }
    }, [])
    return (
        <NoticeContext.Provider value={{ open }}>
            {props.children}
            <Modal visible={visible} style={{backgroundColor:"transparent"}}>
                <View style={{ backgroundColor: "#2F2F2F", width: '94%', borderRadius: 10 }}>
                    <Text color={"#FFFFFF"} style={{ textAlign: 'center', paddingVertical: 12, paddingHorizontal: 20 }}>{message}</Text>
                </View>
            </Modal>
        </NoticeContext.Provider>
    )

}


