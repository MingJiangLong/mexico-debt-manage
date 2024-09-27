import { create, } from "zustand";
import { devtools, persist, createJSONStorage, subscribeWithSelector, } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type CommonDataStore = {
    isFirstUse: boolean
    updateIsFirstUse: (value?: boolean) => void
    userToken?: string
    updateUserToken: (token: string) => void
    count: number,
    updateCount: (type: "add" | "mul" | "reset") => void
}
export default create(
   subscribeWithSelector(
    devtools(
        persist<CommonDataStore>(
            (set, get) => ({
                isFirstUse: true,
                updateIsFirstUse(value = false) {
                    set({ isFirstUse: value })
                },

                userToken: undefined,
                updateUserToken(userToken) {
                    set({ userToken })
                },
                count: 60,
                updateCount(type) {
                    if (type === 'add') {
                        set({
                            count: get().count + 1
                        })
                    }
                    if (type === 'mul') {
                        set({
                            count: get().count - 1
                        })
                    }
                    if (type === 'reset') {
                        set({
                            count: 60
                        })
                    }

                },

            }),
            {
                name: "__common-app-data__",
                storage: createJSONStorage(() => AsyncStorage)
            }
        ))
   )
)