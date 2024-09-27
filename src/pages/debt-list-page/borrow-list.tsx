import { FlatList, StatusBar, View, } from "react-native";
import useDebt, { Debt } from "store/useDebt";
import { useShallow } from "zustand/react/shallow";
import EmptyDebtComponent from "./components/empty-debt.component";
import ListItemComponent from "./components/list-item.component";
import AddComponent from "./components/add.component";
import dayjs from "dayjs";

type BorrowListProps = {
    onCreate?: () => void
    list: Debt[]
    onPress: (debt: Debt) => void
}
export default function (props: BorrowListProps) {

    const { list, onCreate, onPress } = props

    function onRouteTo() {

    }

    /**
     * 打开弹窗
     */
    function onOpenCreateModal() {

    }

    return (
        <View style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
            <FlatList
                data={list}

                style={{ backgroundColor: "#F5F5F5", paddingHorizontal: 16 }}
                renderItem={({ item }) => {
                    return <ListItemComponent {...item} startTime={item?.startTime ? dayjs(item?.startTime).format("DD/MM/YYYY") : ""} onPress={() => {
                        onPress && onPress(item)
                    }} />
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
                        <AddComponent onPress={onCreate} />
                    </>
                }
            />
        </View>
    )
}