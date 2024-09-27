import WebView from "react-native-webview";

export default function () {


    function getEnv() {

    }

    function onReceiveMessageFromH5(event: any) {

    }

    return <WebView
        onMessage={onReceiveMessageFromH5}
        source={{ uri: 'https://bjdc-webview.xmtest.net/#/?test=sendnative' }} style={{ flex: 1 }} />;
}