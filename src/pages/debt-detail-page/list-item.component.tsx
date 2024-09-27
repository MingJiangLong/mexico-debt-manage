
import dayjs from "dayjs";
import ListItemComponent from "pages/debt-list-page/components/list-item.component";
import { memo, useMemo } from "react";
import { Debt, DebtRecordItem } from "store/useDebt";

type DebtListItemProps = DebtRecordItem & Partial<Debt> & {
    onPress: () => void
}
function ListItem(props: DebtListItemProps) {

    const propsTemp = useMemo(() => {

        return {
            ...props,
            debtName: props.time ? dayjs(props.time).format("DD/MM/YYYY") : "",
            startTime: props.remark,
            record: [{ money: props.money, uuid: 'do-not-need' }],
        }
    }, [props])
    return (
        <ListItemComponent {...propsTemp} />
    )
}


export default memo(ListItem)