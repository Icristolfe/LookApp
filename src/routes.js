import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import { SimpleLineIcons } from '@expo/vector-icons';

import util from "./util";

import Home from '../src/pages/Home'
import SignUp from '../src/pages/SignUp'
import SignIn from '../src/pages/SignIn'
import Feed from '../src/pages/Feed'
import Cart from '../src/pages/Cart'

import Marketplace from "./pages/Marketplace";
import Category from "./pages/Marketplace/category";
import Product from "./pages/Marketplace/product";

import { colors } from '../src/styles/theme.json'
import { Title } from "./components";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()

const CustomDrawerComponent = (props) => {
  return(
    <DrawerContentScrollView {...props}>
      <Title weight="bold" color="light" variant="big" hasPadding>LOOKAPP</Title>
      <DrawerItemList { ...props}  />
    </DrawerContentScrollView>
  )
}

const DrawerComponent = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Feed" 
      drawerContent={props =>  <CustomDrawerComponent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: colors.primary ,
        drawerActiveTintColor: colors.light,
        drawerInactiveTintColor: util.toAlpha(colors.light, 60) ,
       
      }}
    >

  <Drawer.Screen 
        name="Feed" 
        component={Feed} 
        options={{ headerShown: false, drawerStyle: {
          backgroundColor: colors.darkDrawer,
        },
        drawerIcon: ({ color}) => (
          <SimpleLineIcons name="people" color={color} />
        )
      }}
      />
      <Drawer.Screen 
        name="Marketplace" 
        component={Marketplace} 
        options={{ headerShown: false, drawerStyle: {
          backgroundColor: colors.darkDrawer,
        },
        drawerIcon: ({ color}) => (
          <SimpleLineIcons name="tag" color={color} />
        )
      }}
      />

    <Drawer.Screen 
        name="Orders" 
        component={Home} 
        options={{ headerShown: false, drawerStyle: {
          backgroundColor: colors.darkDrawer,
        },
        drawerIcon: ({ color}) => (
          <SimpleLineIcons name="basket" color={color} />
        )
      }}
      />

    </Drawer.Navigator>
  );
}



const Routes = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
      options={{
        headerShown: false
      }}
      name="Home" component={DrawerComponent} />

  <Stack.Screen
      options={{
        headerShown: false
      }}
      name="SignUp" component={SignUp} />

    <Stack.Screen
      options={{
        headerShown: false
      }}
      name="SignIn" component={SignIn} />

    <Stack.Screen
      options={{
        headerShown: false
      }}
      name="Feed" component={DrawerComponent} />

    <Stack.Screen
      options={{
        headerShown: false
      }}
      name="Category" component={Category} />

    <Stack.Screen
      options={{
        headerShown: false
      }}
      name="Product" component={Product} />

    <Stack.Screen
      options={{
        headerShown: false
      }}
      name="Cart" component={Cart} />

    </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Routes