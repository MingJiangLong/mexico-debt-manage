import { StatusBar, useWindowDimensions, View, } from "react-native";
import { Text } from "xunmo-rn-helper/components";
import SwitchTab from "xunmo-rn-helper/components/switch-tab";
import { useEffect, useState } from "react";
import BorrowList from "./borrow-list";
import LendList from "./lend-list";
import { STATUSBAR_HEIGHT } from "utils";
import { useHeaderHeight } from "@react-navigation/elements"
import ModalComponent from "components/modal.component";
import { useNavigation } from "@react-navigation/native";
import { ROUTE_CREATE_DEBT } from "pages/create-debt-page";
import { pickContact } from "xunmo-rn-helper/utils/getContacts";
import { UseNavigationProps } from "@types";
import { Contact } from "react-native-select-contact";
import { AppRouteName, DebtType } from "constant";
import useDebt from "store/useDebt";
import { useShallow } from "zustand/react/shallow";

export const ROUTE_DEBT_HOME = "debt-home-page"

/**
 * 这债务列表页
 * @returns 
 */
export default function () {
    const { height } = useWindowDimensions()
    const NAVIGATION_HEIGHT = useHeaderHeight()
    const [activeSwitchTab, setActiveSwitchTab] = useState<string | number>(DebtType.Lend)
    const navigation = useNavigation<UseNavigationProps>()
    const [showPolicyModal, setShowPolicyModal] = useState(false)
    const { debtList, clear } = useDebt(useShallow(state => ({
        debtList: state.debtList,
        clear: state.clear
    })))

    function onRouteToCreateDebt(contact: Contact | null) {
        navigation.navigate(ROUTE_CREATE_DEBT, { contactName: contact?.name, recordId: contact?.recordId, type: activeSwitchTab })
    }


    // useEffect(() => {
    //     clear()
    // }, [])

    function onPressBtnCreate() {
        setShowPolicyModal(true)
    }

    async function onAcceptUseContract() {
        // 调用联系人
        const contact = await pickContact()
        setShowPolicyModal(false)
        onRouteToCreateDebt(contact)
    }

    function onNotAcceptUseContract() {
        setShowPolicyModal(false)
        onRouteToCreateDebt(null)

    }

    return (
        <View style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
            <StatusBar hidden={false} />
            <View
                style={{
                    backgroundColor: "#FF71A5",
                    paddingHorizontal: 16, paddingVertical: 23,
                    height: STATUSBAR_HEIGHT + NAVIGATION_HEIGHT + height * .05,
                    position: 'relative'
                }}>
                <SwitchTab
                    containerStyle={{
                        position: "absolute",
                        width: "98%",
                        alignSelf: "center",
                        bottom: height * .01,
                    }}
                    onToggle={setActiveSwitchTab}
                    options={[
                        { name: "Préstamo", value: DebtType.Lend },
                        { name: "Atrasos", value: DebtType.Borrow }

                    ]} active={activeSwitchTab} />
            </View>
            <ModalComponent visible={showPolicyModal}
                onClose={onNotAcceptUseContract}
                specialBtnTitle="Aceptar"
                onPressSpecialBtn={onAcceptUseContract}
            >
                <Text.FormCaption style={{ lineHeight: 24, textAlign: "center", }}>【】Si desea acceder a su libreta de direcciones, puede elegir directamente.</Text.FormCaption>
            </ModalComponent>
            {
                activeSwitchTab == DebtType.Borrow && (
                    <BorrowList
                        onPress={(debt) => {
                            navigation.navigate(AppRouteName.DebtDetail, { uuid: debt.uuid })
                        }}
                        list={debtList.filter(item => item.type === DebtType.Borrow)} onCreate={onPressBtnCreate} />
                )
            }
            {
                activeSwitchTab == DebtType.Lend && (
                    <LendList
                        onPress={(debt) => {
                            navigation.navigate(AppRouteName.DebtDetail, { uuid: debt.uuid })
                        }}
                        list={debtList.filter(item => item.type === DebtType.Lend)}
                        onCreate={onPressBtnCreate} />
                )
            }
        </View>
    )
}