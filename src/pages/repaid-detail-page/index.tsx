import DatePickerComponent from "components/date-picker.component"
import SpecialInputComponent from "pages/repaid-debt-page/special-input.component"
import { ImageBackground, ScrollView, StatusBar, StyleSheet, View } from "react-native"
import useDebt, { Debt, DebtRecordItem } from "store/useDebt"
import { calcAutoHeightFixedWidth } from "utils"
import Card from "xunmo-rn-helper/components/card"
import FormField from "xunmo-rn-helper/components/form/form-field"
import Input from "xunmo-rn-helper/components/input"
import RadiusInput from "xunmo-rn-helper/components/input/radius-input"
import Camera from 'components/camera.component'
import { Button, Text } from "xunmo-rn-helper/components"
import { useNavigation, useRoute } from "@react-navigation/native"
import dayjs from "dayjs"
import ModalComponent from "components/modal.component"
import { useState } from "react"
import { useShallow } from "zustand/react/shallow"
import { UseNavigationProps } from "@types"
type RepaidDetailProps = {} & DebtRecordItem
export default function () {
    const { params } = useRoute<any>()
    // debtUUID, recordUUID 
    const { width: bgWidth, height: bgHeight } = calcAutoHeightFixedWidth(375 / 298, "1")
    const [showModalAsk, setShowModalAsk] = useState(false)
    const navigation = useNavigation<UseNavigationProps>()
    const { debt, repaidRecord, deleteRepaid } = useDebt(useShallow(state => {

        return {
            debt: state.debtList.find(item => item.uuid === params.debtUUID) as Debt,
            repaidRecord: state.debtList.find(item => item.uuid === params.debtUUID)?.record.find(item => item.uuid === params.recordUUID) as DebtRecordItem,
            deleteRepaid: state.removeRepaidRecord
        }
    }))

    const { location, imageUri, remark, time, money, uuid } = repaidRecord

    function onDeletePaidRecord() {
        deleteRepaid(params.debtUUID, params.recordUUID)
        navigation.goBack()
    }
    return (
        <>
            <ModalComponent visible={showModalAsk} specialBtnTitle="Seguro" onClose={() => setShowModalAsk(false)} onPressSpecialBtn={onDeletePaidRecord}>
                <Text.FormCaption style={{ textAlign: "center" }}>¿Estás seguro de que quieres liquidar el importe total?</Text.FormCaption>
            </ModalComponent>
            <StatusBar translucent />
            <ImageBackground
                source={require("assets/debt_detail_375_298.png")}
                style={{
                    width: bgWidth,
                    height: bgHeight
                }}
            />
            <ScrollView style={{ paddingHorizontal: 16, marginTop: -bgHeight * .6 }}>

                <ImageBackground source={require("assets/card_girl_343_168.png")} style={{
                    ...calcAutoHeightFixedWidth(343 / 168, ".92")
                }}>
                    <View style={{ paddingVertical: 10, paddingHorizontal: 16 }}>

                        <FormField caption="Por favor ingrese la cantidad">
                            <Text.FormCaption fontSize={32} fontWeight={"900"}>${`${Math.abs(Number(money))}`}</Text.FormCaption>
                        </FormField>
                        <FormField caption="Fecha" style={{ marginTop: 20 }}>
                            <Text.FormCaption>{time ? dayjs(time).format("DD/MM/YYYY") : ""}</Text.FormCaption>
                        </FormField>
                    </View>

                </ImageBackground>

                <Card style={{ marginTop: 10 }}>
                    <FormField caption="Observación">
                        <Input
                            multiline
                            placeholder="输入备注"
                            value={remark}
                            editable={false}
                            containerStyle={{ borderBottomColor: '#999999', borderBottomWidth: StyleSheet.hairlineWidth }}

                        />
                    </FormField>
                    <View style={{ marginTop: 10, marginLeft: 14 }}>
                        <Camera
                            imageUri={imageUri}
                            disabled
                        />
                    </View>
                </Card>
                <Card style={{ marginTop: 10 }}>
                    <FormField caption="DIRECCIÓN">
                        <RadiusInput placeholder="输入位置" value={location} editable={false} />
                    </FormField>
                </Card>

            </ScrollView>
            <Button.Image
                title="Borrar"
                backgroundImage={require("assets/btn_343_58.png")}
                onPress={() => {
                    setShowModalAsk(true)
                }}
                style={{ ...calcAutoHeightFixedWidth(343 / 58, '.91'), marginVertical: 20 }}
            />
        </>
    )
}