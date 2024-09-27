import { memo } from 'react';
import FAIcon, { FontAwesome5IconProps } from 'react-native-vector-icons/FontAwesome5';

type IconProps = {

} & FontAwesome5IconProps

function Icon(props: IconProps) {
    return <FAIcon {...props} />
}

export default memo(Icon)