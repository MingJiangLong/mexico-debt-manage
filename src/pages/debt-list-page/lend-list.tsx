import { FlatList, StatusBar, View, } from "react-native";
import useDebt, { Debt } from "store/useDebt";
import { Text } from "xunmo-rn-helper/components";
import { useShallow } from "zustand/react/shallow";
import EmptyDebtComponent from "./components/empty-debt.component";
import SwitchTab from "xunmo-rn-helper/components/switch-tab";
import { useState } from "react";
import ListItemComponent from "./components/list-item.component";
import AddComponent from "./components/add.component";
import { useNavigation } from "@react-navigation/native";
import useNotice from "hooks/useNotice";
import dayjs from "dayjs";

type LendListProps = {
    onCreate?: () => void
    list: Debt[]
    onPress?: (debt: Debt) => void
}
export default function (props: LendListProps) {
    const { onCreate, list, onPress } = props

    const navigation = useNavigation();

    /**
     * 打开弹窗
     */
    function onPressBtnAdd() {

        onCreate && onCreate()

    }

    return (
        <FlatList
            data={list}
            style={{ backgroundColor: "#F5F5F5", paddingHorizontal: 16 }}
            renderItem={({ item }) => {
                return <ListItemComponent
                    {...item}
                    startTime={item?.startTime ? dayjs(item?.startTime).format("DD/MM/YYYY") : ""}
                    onPress={() => {
                        onPress && onPress(item)
                    }}
                />
            }}
            ItemSeparatorComponent={
                () => <View style={{ backgroundColor: 'transparent', height: 14 }} />
            }
            ListHeaderComponent={
                () => <View style={{ backgroundColor: 'transparent', height: 14 }} />
            }
            ListEmptyComponent={
                <EmptyDebtComponent />
            }
            ListFooterComponent={
                <>
                    <View style={{ backgroundColor: 'transparent', height: 14 }} />
                    <AddComponent onPress={onPressBtnAdd} />
                </>
            }
        />

    )
}