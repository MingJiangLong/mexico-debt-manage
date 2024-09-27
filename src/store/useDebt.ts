import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DebtType } from "constant";

export type DebtRecordItem = {
    time?: string
    money?: string | number
    type?: DebtType
    remark?: string
    location?: string
    imageUri?: string
    uuid: string
}
export type Debt = {
    uuid: string
    /** 债务类型 */
    type?: DebtType

    /** */
    debtName?: string
    /** 开始时间 */
    startTime?: string

    /** 截至时间 */
    deadlineTime?: string

    /** 备注 */
    remark?: string
    imageUri?: string

    record: DebtRecordItem[]
}
type DebtStore = {
    debtList: Debt[]
    addDebt: (debt: Debt) => void
    addRepaidRecord: (id: string, debtRecordItem: DebtRecordItem) => void
    removeRepaidRecord: (debtId: string, repaidId: string) => void
    clear: () => void
}
export default create(
    devtools(
        persist<DebtStore>(
            (set, get) => ({
                debtList: [],
                addDebt(debt) {
                    const preList = get().debtList;
                    set({
                        debtList: [debt, ...preList,]
                    })
                },
                addRepaidRecord(id, debtRecordItem) {
                    const debtList = get().debtList;
                    let debt = debtList.find(item => item.uuid === id);
                    if (!debt) return;
                    debt.record = [
                        debtRecordItem,
                        ...debt.record,
                    ]
                    set({
                        debtList: [...debtList]
                    })
                },
                removeRepaidRecord(debtId: string, repaidId: string) {
                    const debtList = get().debtList;
                    let debt = debtList.find(item => item.uuid === debtId);
                    if (!debt) return;
                    let index = debt.record.findIndex(item => item.uuid == repaidId)
                    if (index === -1) return;
                    debt.record.splice(index, 1)
                    set({
                        debtList: [...debtList]
                    })
                },
                clear() {
                    set({
                        debtList: []
                    })
                },
            }),
            {
                name: "__personal_debt_record__",
                storage: createJSONStorage(() => AsyncStorage)
            }
        ))
)