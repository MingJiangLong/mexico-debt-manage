import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import HomePage from "../pages/HomePage";
import XunMoWebview from "../pages/XunMoWebview";
import useI18nPersistStore from "store/useI18nPersistStore";
import LoginPage, { ROUTE_LOGIN } from "pages/login-page";
import FlashPage from "pages/FlashPage";
import FlashPage2 from "pages/FlashPage2";
import FlashPage3 from "pages/FlashPage3";
import debtListPage, { ROUTE_DEBT_HOME } from "pages/debt-list-page";
import SettingPage, { ROUTE_SETTING } from "pages/setting-page";
import createDebtPage, { ROUTE_CREATE_DEBT } from "pages/create-debt-page";
import { ROUTE_HOME } from "pages/home-page";
import debtDetailPage, { ROUTE_DEBT_DETAIL } from "pages/debt-detail-page";
import { Text } from "xunmo-rn-helper/components";
import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import PhoneNumber from "xunmo-rn-helper/components/input/phone-number";
import Input from "xunmo-rn-helper/components/input";
import { AppRouteName } from "constant";
import repaidDebtPage from "pages/repaid-debt-page";
import repaidDetailPage from "pages/repaid-detail-page";
const Stack = createNativeStackNavigator();
const FLASH_PAGE_PREFIX = 'flash'

function showBack(path: string) {
    return !path.startsWith(FLASH_PAGE_PREFIX) && path !== ROUTE_HOME && path !== ROUTE_LOGIN
}

function showHeader(path: string) {

    const notNeedHeaderPage = [
        ROUTE_LOGIN,
        ROUTE_HOME,
        ROUTE_SETTING,
    ]

    return !notNeedHeaderPage.includes(path) && !path.startsWith(FLASH_PAGE_PREFIX)
}

function isStatusBarTranslucent(path: string) {
    return false
}

function isStatusBarTransparent(path: string) {
    return true
}

type SpecialHeaderTitleProps = {
    contactName?: string
    onTextChange?: (text?: string) => void
}
function SpecialHeaderTitle(props: SpecialHeaderTitleProps) {
    const { onTextChange } = props

    const [inputName, setInputName] = useState<string>()

    useEffect(() => {
        setInputName(props.contactName)
    }, [props.contactName])
    return (
        <View style={{ flex: 1, paddingLeft: 10, borderLeftWidth: 1, borderLeftColor: "#FFFFFF" }}>
            <Input style={{ paddingVertical: 2, paddingHorizontal: 0, color: "#FFFFFF" }} value={inputName} onChangeText={value => {
                setInputName(value)
                onTextChange && onTextChange(value)
            }} placeholder="输入债务人姓名" />
        </View>
    )
}



export function Routes() {
    const routesInitData = [
        { key: "flash-page", name: `${FLASH_PAGE_PREFIX}`, title: "启动页", component: FlashPage },
        { key: "flash-page", name: `${FLASH_PAGE_PREFIX}-2`, title: "启动页", component: FlashPage2 },
        { key: "flash-page", name: `${FLASH_PAGE_PREFIX}-3`, title: "启动页", component: FlashPage3 },
        { key: "home", name: ROUTE_HOME, title: "首页", component: HomePage },
        { key: "login", name: ROUTE_LOGIN, title: "登陆页", component: LoginPage },
        { key: "debt-list", name: ROUTE_DEBT_HOME, title: "Liquidar deuda", component: debtListPage },
        { key: "setting-page", name: ROUTE_SETTING, title: "设置页", component: SettingPage },

        { key: "create-lend", name: ROUTE_CREATE_DEBT, title: "创建借出债务", component: createDebtPage },
        { key: "debt-detail", name: AppRouteName.DebtDetail, title: "债务详情", component: debtDetailPage },
        { key: AppRouteName.Repaid, name: AppRouteName.Repaid, title: "偿还债务", component: repaidDebtPage },
        { key: AppRouteName.RepaidDetail, name: AppRouteName.RepaidDetail, title: "偿还债务", component: repaidDetailPage },

        { name: "xunmo", title: "H5", component: XunMoWebview },
    ]
    return (
        <Stack.Navigator initialRouteName={ROUTE_DEBT_HOME} >
            {
                routesInitData.map(item => {
                    return (
                        <Stack.Screen
                            options={({ route, navigation }) => {
                                return {
                                    headerShown: showHeader(route.name),
                                    title: item.title ?? item.name,
                                    headerBackVisible: showBack(route.name),
                                    headerBackTitleVisible: false,
                                    animation: "fade",
                                    statusBarTranslucent: isStatusBarTranslucent(route.name),
                                    headerTransparent: isStatusBarTransparent(route.name),
                                    headerTitle(props) {
                                        if (route.name !== ROUTE_CREATE_DEBT) return <Text.FormCaption>{props.children}</Text.FormCaption>;
                                        // @ts-ignore
                                        return <SpecialHeaderTitle contactName={route.params?.contactName} onTextChange={str => {
                                            navigation.setParams({ contactName: str })
                                        }} />
                                    },
                                }
                            }}
                            key={item.name}
                            name={item.name} component={item.component} />
                    )
                })
            }
        </Stack.Navigator>
    );
}