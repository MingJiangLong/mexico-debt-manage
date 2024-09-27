import { NoticeContext } from "components/notice.component";
import { useCallback, useContext, useMemo } from "react";

export default function () {
    const noticeContext = useContext(NoticeContext)

    return useMemo(() => {
        return {
            open(message: string, duration?: number) {
                noticeContext.open(message, duration)
            }
        }
    }, [noticeContext])
}