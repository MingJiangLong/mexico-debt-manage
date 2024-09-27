import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

import localeI18n from "i18n/index.json"
type I18nPersistStore = {
    previousAppVersion: string
    i18nCache: { [name: string]: string }
    translate: (key: string) => string
    translate2: (key: string) => string

}
export default create(
    devtools(
        persist<I18nPersistStore>(
            (set, get) => {
                return ({
                    previousAppVersion: "",
                    i18nCache: localeI18n,
                    translate(key: string) {
                        const i18n = get().i18nCache;
                        return Reflect.get(i18n, key)
                    },
                    translate2(key: string) {
                        return ""
                    },
                })
            },
            {
                name: "__i18n-app-data__",
                storage: createJSONStorage(() => AsyncStorage)
            }
        )
    )
)