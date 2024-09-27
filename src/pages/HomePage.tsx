import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, ImageSourcePropType, StatusBar, View } from "react-native";
import homePage from "./home-page";
import DebtHomePage from "./DebtHomePage";
import SettingPage from "./setting-page";
const Tab = createBottomTabNavigator();
type TabIconProps = {
  image: ImageSourcePropType
}
function TabIcon(props: TabIconProps) {

  return (
    <Image source={props.image} style={{ width: 28, height: 28 }} />
  )
}
export default () => {

  const bottomOptions = [
    {
      name: "Pagina principal", component: homePage,
      activeImage: require("../assets/debt-active.png"), inActiveImage: require("../assets/debt-inactive.png")
    },
    {
      name: "Đơn hàng", component: DebtHomePage,
      activeImage: require("../assets/deposit-active.png"), inActiveImage: require("../assets/deposit-inactive.png")
    },
    {
      name: "Mío", component: SettingPage,
      activeImage: require("../assets/mine-active.png"), inActiveImage: require("../assets/mine-inactive.png")
    },
  ]
  return (
    <View style={{ flex: 1 }}>

      <Tab.Navigator screenOptions={{ headerShown: false, }} >
        {
          bottomOptions.map(item => (
            <Tab.Screen name={item.name} component={item.component} key={item.name}
              options={() => {
                return {
                  tabBarInactiveTintColor: '#999999',
                  tabBarActiveTintColor: "#F5528C",
                  tabBarIcon(props) {
                    const { focused, } = props
                    if (focused) {
                      return <TabIcon image={item.activeImage} />
                    }
                    return <TabIcon image={item.inActiveImage} />
                  }

                }
              }}
            />

          ))
        }
      </Tab.Navigator>
    </View>
  )
}