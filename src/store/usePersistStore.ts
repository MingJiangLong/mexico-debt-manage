import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";


type PersistStore = {
    agreedToAuth: boolean
    updateAgreeToAuth: () => void
}
export default create(
    devtools(
        persist(
            (set) => {
                return ({
                    agreedToAuth: false,
                    agreeToAuth() {
                        set({ updateAgreeToAuth: true })
                    }
                })
            },
            {
                name: "__common-app-data__",
                storage: createJSONStorage(() => AsyncStorage)
            }
        ))
)