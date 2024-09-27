import { ImageBackground, KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { calcAutoHeightFixedWidth, } from "utils";
import { Button, Text } from "xunmo-rn-helper/components";
import FormField from "xunmo-rn-helper/components/form/form-field";
import PhoneNumber from "xunmo-rn-helper/components/input/phone-number";
import Card from "xunmo-rn-helper/components/card";
import DatePickerComponent from "components/date-picker.component";
import Camera from "components/camera.component";
import { useState } from "react";
import useDebt, { Debt, DebtRecordItem } from "store/useDebt";
import Input from "xunmo-rn-helper/components/input";

import { useNavigation, useRoute } from "@react-navigation/native";
import { AppRouteName, DebtType } from "constant";
import useNotice from "hooks/useNotice";
import dayjs from "dayjs";
import { useShallow } from "zustand/react/shallow";
import { UseNavigationProps } from "@types";
import getSimpleUUID from "xunmo-rn-helper/utils/getSimpleUUID";
import RadiusInput from "xunmo-rn-helper/components/input/radius-input";
export const ROUTE_CREATE_DEBT = "create-debt-page"

/**
 * 创建债务页
 * @returns 
 */
export default function () {
    const navigation = useNavigation<UseNavigationProps>()
    const { params } = useRoute<any>()
    const debtType = params?.type as DebtType
    const { addDebt } = useDebt(useShallow(state => ({
        addDebt: state.addDebt
    })))

    const notice = useNotice()
    const [debt, setDebt] = useState<Debt>({
        uuid: getSimpleUUID(),
        type: debtType,
        debtName: params?.contactName,
        record: [],
        startTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        deadlineTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    })

    const [debtRecordItem, setDebtRecordItem] = useState<DebtRecordItem>({
        uuid: getSimpleUUID(),
        money: "0",
        type: params?.type as DebtType,
        time: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    })

    function updateDebt(key: keyof Debt, value: any) {
        setDebt(pre => (
            {
                ...pre,
                [key]: value
            }
        ))
    }

    function onTapMoney(value: string) {
        // @ts-ignore
        if (+value != value) return notice.open("金额只能为数字");
        setDebtRecordItem(pre => {
            return {
                ...pre,
                money: debtType == DebtType.Lend ? -value : value
            }
        })
    }
    function onUpdateStartTime(startTime: string) {
        if (debt.deadlineTime && dayjs(debt.deadlineTime) < dayjs(startTime)) {
            return notice.open("开始时间不能晚于截至时间")
        }
        updateDebt("startTime", startTime)
        setDebtRecordItem(pre => ({
            ...pre,
            time: startTime
        }))
    }

    function onUpdateEndTime(deadlineTime: string) {
        if (debt.startTime && dayjs(debt.startTime) > dayjs(deadlineTime)) {
            return notice.open("截至时间不能晚于开始时间")
        }
        updateDebt("startTime", deadlineTime)
    }


    function onCreateDebt() {
        addDebt({

            ...debt,
            debtName: params?.contactName,
            record: [debtRecordItem]
        })
        navigation.navigate(AppRouteName.DebtHome)
    }



    return (
        <>
            <StatusBar />
            <KeyboardAvoidingView style={{ flex: 1 }}>

                <ImageBackground
                    source={require("assets/debt_bg.png")}
                    style={calcAutoHeightFixedWidth(375 / 210, "1")}
                >
                    <View
                        style={{
                            position: "absolute",
                            width: "95%",
                            bottom: 16
                        }}
                    >

                        <FormField caption={
                            <Text.FormCaption color={"#FFFFFF"}>Monto de mi préstamo</Text.FormCaption>
                        } style={{ width: "70%" }}>
                            <PhoneNumber
                                prefix={
                                    <Text.InputCaption color={"#FFFFFF"} fontSize={36}>$</Text.InputCaption>
                                }
                                value={`${Math.abs(+(debtRecordItem.money ?? 0))}`}
                                onChangeText={e => {
                                    onTapMoney(e)
                                }}
                                style={{ fontSize: 42, color: "#FFFFFF", fontWeight: "bold" }}
                            />
                        </FormField>
                    </View>
                </ImageBackground>
                <ScrollView style={{ paddingHorizontal: 16, paddingTop: 10, flex: 1 }} >
                    <Card>
                        <FormField caption="Tiempo de endeudamiento">
                            <DatePickerComponent
                                date={debt?.startTime}
                                placeholder="选择创建时间"
                                onChange={value => onUpdateStartTime(value)} />
                        </FormField>
                        <FormField caption="Tiempo de mora">
                            <DatePickerComponent
                                date={debt.deadlineTime}
                                placeholder="选择结束时间"
                                onChange={value => onUpdateEndTime(value)} />
                        </FormField>
                    </Card>
                    <Card style={{ marginTop: 10 }}>

                        <FormField caption="Observación">
                            <Input
                                multiline
                                placeholder="输入备注"
                                value={debt.remark}
                                containerStyle={{ borderBottomColor: '#999999', borderBottomWidth: StyleSheet.hairlineWidth }}
                                onChangeText={e => {
                                    setDebtRecordItem(pre => ({
                                        ...pre,
                                        remark: e
                                    }))
                                }}
                            />
                        </FormField>
                        <View style={{ marginTop: 10, marginLeft: 14 }}>
                            <Camera
                                onChooseImage={e => {
                                    setDebtRecordItem(pre => ({
                                        ...pre,
                                        imageUri: e
                                    }))
                                }}
                                imageUri={debtRecordItem.imageUri}
                            />
                        </View>
                    </Card>
                    <Card style={{ marginTop: 10 }}>
                        <FormField caption="DIRECCIÓN">
                            <RadiusInput placeholder="输入位置" value={debtRecordItem.location} onChangeText={e => setDebtRecordItem(pre => ({ ...pre, location: e }))} />
                        </FormField>
                    </Card>
                </ScrollView>
                <Button.Image
                    title="Seguro"
                    backgroundImage={require("assets/btn_343_58.png")} style={{
                        ...calcAutoHeightFixedWidth(343 / 59, '.91'),
                        marginVertical: 20
                    }}
                    onPress={onCreateDebt}

                />
            </KeyboardAvoidingView>
        </>
    )
}