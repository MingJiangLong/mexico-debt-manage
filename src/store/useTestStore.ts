import { create } from "zustand";

export default create<{ count: string, updateCount: () => void }>((set) => {

    return ({
        count: "1",
        updateCount() {
            set((state) => {
                return ({ count: `${state.count}_1` })
            })
        }
    })
})