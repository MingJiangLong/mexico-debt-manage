import { createContext, ReactNode, useCallback, useContext, useMemo, useRef } from "react";
import vietnamStyle from "../global-styles/vietnam.style";
export type GlobalStyleType = typeof vietnamStyle;
const GlobalStyleContext = createContext(vietnamStyle)

enum Country {
    vietnam = 1
}
type GlobalStyleProviderProps = {
    value?: GlobalStyleType
    children: ReactNode
    country?: Country
}

const styleMap2Country = {
    [Country.vietnam]: vietnamStyle
}
export function GlobalStyleProvider(props: GlobalStyleProviderProps) {

    const { value, children, country = Country.vietnam } = props

    const globalStyle = useMemo(() => {

        return (
            {
                ...vietnamStyle,
                ...styleMap2Country[country],
                ...value
            }
        )
    }, [value, country])

    return (
        <GlobalStyleContext.Provider value={globalStyle}>
            {
                children
            }
        </GlobalStyleContext.Provider>
    )
}


type GlobalStyleConsumerProps<T> = {
    children: (_style: T) => ReactNode,
    createGroupStyle: (_style: GlobalStyleType) => T
}

type CreateGroupStyle<T> = (_style: GlobalStyleType) => T
export function useCreateGroupStyle<T>(createGroupStyle: CreateGroupStyle<T>): T {
    const globalStyle = useContext(GlobalStyleContext);
    return useMemo(
        () => createGroupStyle(globalStyle),
        [globalStyle, createGroupStyle],
    )
}

export function GlobalStyleConsumer<T>(props: GlobalStyleConsumerProps<T>) {

    const { children, createGroupStyle } = props

    const createGroupStyleCallback = useCallback((value: GlobalStyleType) => {
        return createGroupStyle(value)
    }, [createGroupStyle])


    return (
        <GlobalStyleContext.Consumer>
            {
                (_style) => children(createGroupStyleCallback(_style))
            }
        </GlobalStyleContext.Consumer>
    )
}
