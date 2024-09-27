import { Button, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
export default ({ }) => {

    const navigation = useNavigation()
    return (
        <>
            <Text> setting </Text>
            <Button
                title="Go to Details"
            />
        </>
    )
}