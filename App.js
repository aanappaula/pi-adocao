import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function Cachorros() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cachorros Screen</Text>
    </View>
  );
}

function Gatos() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Gatos Screen</Text>
    </View>
  );
}
function Passaros() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Passaros Screen</Text>
    </View>
  );
}
function Perfil() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Perfil Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="Cachorros"
        component={Cachorros}
        options={{ drawerLabel: 'Cachorros' }}
      />
      <Drawer.Screen
        name="Gatos"
        component={Gatos}
        options={{ drawerLabel: 'Gatos' }}
      />
      <Drawer.Screen
        name="Passaros"
        component={Passaros}
        options={{ drawerLabel: 'Passaros' }}
      />
      <Drawer.Screen
        name="Perfil"
        component={Perfil}
        options={{ drawerLabel: 'Perfil' }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Appbar.Content style={styles.titulo} title="Amigos de Joinville" fontWeight='bold' color="white" />
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  titulo: {
    backgroundColor: '#FA497A',
    textAlign: 'center',
    padding: 15,
    color: 'white', 
    marginBottom: 160,
    ustifyContent: 'center', 
    alignItems: 'center', 
  },
})