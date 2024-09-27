import { useState } from "react"
import { Image, TouchableOpacity } from "react-native"
import { Modal } from "xunmo-rn-helper/components"
import RadiusInput from "xunmo-rn-helper/components/input/radius-input"
import getLocation from "xunmo-rn-helper/utils/getLocation"


type LocationProps = {
    placeholder?: string
}
export default function (props: LocationProps) {

    const [showModal, setShowModal] = useState(false)


    async function onGetLocation() {

        const location = await getLocation()
        console.log(location);


    }

    return (
        <>
            <Modal visible={showModal} style={{ backgroundColor: "white" }}>

            </Modal>
            <RadiusInput
                suffixNode={
                    <TouchableOpacity onPress={() => {
                        // setShowModal(true)()
                        onGetLocation()
                    }}>
                        <Image source={require("assets/calender.png")} style={{ width: 24, height: 24 }} />
                    </TouchableOpacity>
                }
                placeholder={props.placeholder}

            />
        </>
    )


}