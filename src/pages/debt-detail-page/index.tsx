import { useNavigation, useRoute } from "@react-navigation/native"
import { AppRouteName, DebtType } from "constant"
import { ImageBackground, SectionList, StatusBar, StyleSheet, View, ViewStyle } from "react-native"
import useDebt, { DebtRecordItem } from "store/useDebt"
import { calcAutoHeightFixedWidth } from "utils"
import { Button, Text } from "xunmo-rn-helper/components"
import FormField from "xunmo-rn-helper/components/form/form-field"
import { useShallow } from "zustand/react/shallow"
import ListItemComponent from "./list-item.component"
import Divider from "xunmo-rn-helper/components/divider"
import Flex from "xunmo-rn-helper/components/flex"
import { useMemo, useState } from "react"
import ModalComponent from "components/modal.component"
import { UseNavigationProps } from "@types"
import dayjs from "dayjs"
import getSimpleUUID from "xunmo-rn-helper/utils/getSimpleUUID"

export const ROUTE_DEBT_DETAIL = "debt-detail-page"


/**
 * 债务详情页
 * @returns 
 */
export default function () {

    const { width: bgWidth, height: bgHeight } = calcAutoHeightFixedWidth(375 / 298, "1")

    const { params } = useRoute<any>()
    const navigation = useNavigation<UseNavigationProps>()
    const { debt, debtList, debtName, debtType, addRecord } = useDebt(useShallow(state => {
        const debt = state.debtList.find(item => item.uuid === params?.uuid)
        let lendList = {
            title: "Pedir prestado",
            type: DebtType.Lend,
            data: debt?.record.filter(item => item.type == DebtType.Lend) ?? []
        }

        let borrowList = {
            title: "Deuda pagada",
            type: DebtType.Borrow,
            data: debt?.record.filter(item => item.type == DebtType.Borrow) ?? []
        }

        let debtList = []
        if (lendList.data.length) debtList.push(lendList)
        if (borrowList.data.length) debtList.push(borrowList)
        return {
            debtList,
            debt,
            debtName: debt?.debtName,
            debtType: debt?.type,
            addRecord: state.addRepaidRecord
        }
    }))
    const cardSize = calcAutoHeightFixedWidth(362 / 188, '.98')

    // zustand和useMemo不能直接食用 估计需要subscrible
    const total = debtList.find(item => item.type == debtType)?.data.reduce((pre, current) => { return pre + Number(current.money ?? 0) }, 0) ?? 0
    // const total = useMemo(() => {
    //     return debtList.find(item => item.type == debtType)?.data.reduce((pre, current) => { return pre + Number(current.money ?? 0) }, 0) ?? 0
    // }, [debtType, debtList])

    // const currentTotal = useMemo(() => {
    //     return debt?.record.reduce((pre, current) => { return pre + Number(current.money ?? 0) }, 0) ?? 0
    // }, [debt])
    const currentTotal = debt?.record.reduce((pre, current) => { return pre + Number(current.money ?? 0) }, 0) ?? 0

    const [showModalAsk, setShowModalAsk] = useState(false)

    function onPressButtonLend() {
        navigation.navigate(AppRouteName.Repaid, { type: DebtType.Lend, uuid: debt?.uuid })
    }

    function onPressButtonBorrow() {
        navigation.navigate(AppRouteName.Repaid, { type: DebtType.Borrow, uuid: debt?.uuid })
    }

    function onPressButtonRepaidAll() {
        setShowModalAsk(true)

    }

    /**
     * 一次性还款
     */
    function onFinishDebt() {
        let total = debt?.type == DebtType.Lend ? Math.abs(currentTotal) : -Math.abs(currentTotal);
        addRecord(params.uuid, {
            uuid: getSimpleUUID(),
            time: dayjs().format("YYYY-MM-DD HH:mm:ss"),
            type: debt?.type == DebtType.Lend ? DebtType.Borrow : DebtType.Lend,
            money: total,
            remark: `一次性支付${total}`
        })
    }


    function onPressItemRepaid(debtUUID: string, recordUUID: string) {
        navigation.navigate(AppRouteName.RepaidDetail, { debtUUID, recordUUID })
    }
    return (
        <>
            <ModalComponent visible={showModalAsk}
                specialBtnTitle="Seguro"
                onPressSpecialBtn={onFinishDebt}
                onClose={() => {
                    setShowModalAsk(false)
                }}>
                <Text.FormCaption style={{ textAlign: "center" }}>Pagar todas las deudas</Text.FormCaption>
            </ModalComponent>
            <StatusBar translucent />
            <ImageBackground
                source={require("assets/debt_detail_375_298.png")}
                style={{
                    width: bgWidth,
                    height: bgHeight
                }}
            />
            <ImageBackground
                source={require("assets/card.png")}
                style={
                    [
                        cardSize,
                        { marginTop: -bgHeight * .7 },
                        {
                            paddingVertical: cardSize.height * .13,
                            paddingHorizontal: cardSize.width * .08
                        }
                    ]
                }
            >
                <Text>Deudor</Text>
                <Text style={{ fontSize: 20, paddingTop: 6 }}>{debtName}</Text>
                <Divider direction="horizontal" height={StyleSheet.hairlineWidth} style={{ marginVertical: 13 }} />
                <Item caption="Monto total del préstamo" desc={`$${Math.abs(total)}`} />
                <Item caption="Monto restante de la deuda" desc={`$${Math.abs(currentTotal)}`} style={{ marginTop: 16 }} />
            </ImageBackground>
            <Button.Image
                title="Pedir prestado deuda"
                backgroundImage={require("assets/btn_343_58.png")}
                style={calcAutoHeightFixedWidth(343 / 58, '.91')}
                onPress={onPressButtonRepaidAll}
            />

            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>

                <Button.Image
                    title="Prestar deuda"
                    backgroundImage={require("assets/yellow_btn_166_58.png")}
                    style={calcAutoHeightFixedWidth(166 / 58, '.42')}
                    onPress={onPressButtonLend}
                />

                <Button.Image
                    title="Pagar todo"
                    backgroundImage={require("assets/blue_btn_166_58.png")}
                    style={{
                        ...calcAutoHeightFixedWidth(166 / 58, '.42'),
                    }}
                    onPress={onPressButtonBorrow}
                />
            </View>
            <SectionList
                style={{ paddingHorizontal: 16 }}
                ItemSeparatorComponent={() => <View style={{ backgroundColor: 'transparent', height: 14 }} />}
                sections={debtList}
                renderSectionHeader={(data) => {
                    return <FormField caption={data.section.title} />
                }}
                renderItem={({ item }) => <ListItemComponent {...item} onPress={() => {
                    onPressItemRepaid(params.uuid, item.uuid)
                }} />}
            />

        </>
    )
}

type ItemProps = {
    caption: string
    desc: string
    style?: ViewStyle
}
function Item(props: ItemProps) {
    const { caption, desc } = props
    return (
        <Flex.Horizontal style={props.style}>
            <Text style={{ flex: 1 }} color={"#999999"}>{caption}</Text>
            <Text fontWeight={"600"} style={{ maxWidth: 200 }}>{desc}</Text>
        </Flex.Horizontal>
    )
}