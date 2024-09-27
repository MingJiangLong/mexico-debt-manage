import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";


type RecordItem = {
    time: string
    money: number
    remark: string
    location: string
}
type Deposit = {
    /** 存钱目标名称 */
    targetName: string

    /** 存钱金额 */
    target: number

    /** 开始时间 */
    startTime: string

    /** 截至时间 */
    deadlineTime: string

    /** 备注 */
    remark: string

    record: RecordItem[]
}
type DebtStore = {
    depositList: Deposit[]
}
export default create(
    devtools(
        persist<DebtStore>(
            (set, get) => ({
                depositList: []
            }),
            {
                name: "__personal_deposit_record__",
                storage: createJSONStorage(() => AsyncStorage)
            }
        ))
)