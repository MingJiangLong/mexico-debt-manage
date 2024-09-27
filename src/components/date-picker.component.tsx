import dayjs from "dayjs";
import { memo, ReactNode, useEffect, useState } from "react";
import { Button, Image, ImageSourcePropType, TouchableOpacity } from "react-native";
import DateTimePicker, { DateType } from "react-native-ui-datepicker";
import { Modal } from "xunmo-rn-helper/components";
import Flex from "xunmo-rn-helper/components/flex";
import RadiusInput from "xunmo-rn-helper/components/input/radius-input";

type DatePickerProps = {
    suffixImage?: ImageSourcePropType
    date?: string
    onChange?: (value: string) => void
    displayFormat?: string
    placeholder?: string
    disabled?: boolean
}


function DatePicker(props: DatePickerProps) {
    const [showPicker, setShowPicker] = useState(false)
    const { onChange, date, displayFormat = 'DD/MM/YYYY' } = props
    const [dateValue, setDateValue] = useState<DateType>()

    useEffect(() => {
        setDateValue(dayjs(date))
    }, [showPicker, date])
    return (
        <>
            <Modal visible={showPicker} style={{ backgroundColor: "white" }}>
                <DateTimePicker
                    mode="single"
                    date={dateValue}

                    onChange={(value) => {
                        setDateValue(value.date)
                    }}
                />
                <Flex.Horizontal justify="center">

                    <Button title="确定" onPress={() => {
                        onChange && onChange(dayjs(dateValue).format())
                        setShowPicker(false)
                    }} />
                    <Button title="取消" onPress={() => {
                        setShowPicker(false)
                    }} />
                </Flex.Horizontal>
            </Modal>
            <RadiusInput
                value={dayjs(date).format(displayFormat)}
                suffixNode={
                    <TouchableOpacity
                        disabled={props.disabled}
                        onPress={() => {
                            setShowPicker(true)
                        }}>
                        <Image source={require("assets/calender.png")} style={{ width: 24, height: 24 }} />
                    </TouchableOpacity>
                }
                placeholder={props.placeholder}

            />
        </>
    )
}

export default memo(DatePicker)