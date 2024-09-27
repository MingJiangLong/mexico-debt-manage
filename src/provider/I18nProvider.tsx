import { createContext, ReactNode, useMemo } from "react";

const defaultValue = {} as { [key: string]: string }
const I18Context = createContext(defaultValue);

type I18ProviderProps = {
    value: Record<string, string>,
    children: ReactNode
}

// TODO:环境判断 如果是开发环境使用本地locale 否则使用线上locale
export function I18Provider(props: I18ProviderProps) {
    const { value, children } = props
    const i18n = useMemo(() => ({ ...value, ...defaultValue }), [value])

    return (
        <I18Context.Provider value={i18n}>
            {children}
        </I18Context.Provider>
    )
}

type I18nConsumerProps = {
    children: (value: Record<string, string>,) => ReactNode
}
export function I18Consumer(props: I18nConsumerProps) {
    const { children } = props
    return (
        <I18Context.Consumer>
            {
                (i18n) =>children(i18n)
            }
        </I18Context.Consumer>
    )
}