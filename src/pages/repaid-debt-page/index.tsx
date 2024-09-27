import DatePickerComponent from "components/date-picker.component";
import { ImageBackground, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { calcAutoHeightFixedWidth } from "utils";
import { Button } from "xunmo-rn-helper/components";
import Card from "xunmo-rn-helper/components/card";
import FormField from "xunmo-rn-helper/components/form/form-field";
import Input from "xunmo-rn-helper/components/input";
import SpecialInputComponent from "./special-input.component";
import RadiusInput from "xunmo-rn-helper/components/input/radius-input";
import { useNavigation, useRoute } from "@react-navigation/native";
import useDebt, { DebtRecordItem } from "store/useDebt";
import { useShallow } from "zustand/react/shallow";
import { useState } from "react";
import dayjs from "dayjs";
import Camera from "components/camera.component";
import { UseNavigationProps } from "@types";
import useNotice from "hooks/useNotice";
import { DebtType } from "constant";
import getSimpleUUID from "xunmo-rn-helper/utils/getSimpleUUID";

/**
 * 偿还债务
 */
export default function () {
    const { width: bgWidth, height: bgHeight } = calcAutoHeightFixedWidth(375 / 298, "1")

    const navigation = useNavigation<UseNavigationProps>()

    const { params } = useRoute<any>();
    const { uuid, type } = params
    const { addRepaidRecord } = useDebt(useShallow((state) => {
        const uuid = params?.uuid

        const debtList = state.debtList;
        const debt = debtList.find(item => item.uuid === uuid);
        return {
            addRepaidRecord: state.addRepaidRecord
        }
    }))

    const [newDebtRecord, setNewDebtRecord] = useState<DebtRecordItem>({
        uuid: getSimpleUUID(),
        time: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        type: type,
        money: 0
    })

    const notice = useNotice()

    function onTapMoney(e: string) {

        let numericValue = Number(e)
        // @ts-ignore
        if (numericValue != e) return notice.open("金额只能为数字");
        setNewDebtRecord(pre => ({ ...pre, money: type == DebtType.Lend ? -numericValue : Math.abs(numericValue) }))
    }

    function onCreateNewRecord() {
        addRepaidRecord(uuid, newDebtRecord)
        navigation.goBack()
    }

    return (
        <>
            <StatusBar translucent />
            <ImageBackground
                source={require("assets/debt_detail_375_298.png")}
                style={{
                    width: bgWidth,
                    height: bgHeight
                }}
            />
            <ScrollView style={{ paddingHorizontal: 16, marginTop: -bgHeight * .6 }}>
                <Card>
                    <FormField caption="Por favor ingrese la cantidad">
                        <SpecialInputComponent value={`${Math.abs(Number(newDebtRecord.money ?? 0))}`} onTextChange={onTapMoney} />
                    </FormField>
                    <FormField caption="Fecha" style={{ marginTop: 20 }}>
                        <DatePickerComponent date={newDebtRecord.time} onChange={e => setNewDebtRecord(pre => ({ ...pre, time: e }))} />
                    </FormField>
                </Card>

                <Card style={{ marginTop: 10 }}>
                    <FormField caption="Observación">
                        <Input
                            multiline
                            placeholder="输入备注"
                            value={newDebtRecord.remark}
                            containerStyle={{ borderBottomColor: '#999999', borderBottomWidth: StyleSheet.hairlineWidth }}
                            onChangeText={e => {
                                setNewDebtRecord(pre => ({ ...pre, remark: e }))
                            }}
                        />
                    </FormField>
                    <View style={{ marginTop: 10, marginLeft: 14 }}>
                        <Camera
                            imageUri={newDebtRecord.imageUri}
                            onChooseImage={e => {
                                setNewDebtRecord(pre => ({ ...pre, imageUri: e }))
                            }}
                        />
                    </View>
                </Card>
                <Card style={{ marginTop: 10 }}>
                    <FormField caption="DIRECCIÓN">
                        <RadiusInput placeholder="输入位置" value={newDebtRecord.location} onChangeText={e => setNewDebtRecord(pre => ({ ...pre, location: e }))} />
                    </FormField>
                </Card>

            </ScrollView>
            <Button.Image
                title="Seguro"
                backgroundImage={require("assets/btn_343_58.png")}
                style={{ ...calcAutoHeightFixedWidth(343 / 58, '.91'), marginVertical: 20 }}
                onPress={onCreateNewRecord}
            />
        </>
    )
}