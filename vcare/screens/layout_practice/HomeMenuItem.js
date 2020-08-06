import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
  ScrollView,
} from "react-native";

const HomeMenuItem = () => {
  return (
    <View>
      <View style={layout.ads}>
        <Image
          style={layout.imgAdv}
          source={{
            uri:
              "https://www.sapo.vn/blog/wp-content/uploads/2014/10/banner-quang-cao-du-khach-hang-hieu-qua-3.jpg",
          }}
        />
      </View>
      <ScrollView>
        <View style={layout.menuItem}>
          <View style={layout.menuRow1} >
            <TouchableOpacity
              activeOpacity={0.8}
              style={layout.btnEnterKm}
              underlayColor="#ff3300"
            >
              <Image
                style={layout.tinyLogo}
                source={require("../img/icon/icons8-plus-512.png")}
              />
              <Text>Add KM</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={layout.btnEnterKm}
              underlayColor="#ff3300"
            >
              <Image
                style={layout.tinyLogo}
                source={require("../img/icon/icons8-suv-80.png")}
              />
              <Text>Garage</Text>
            </TouchableOpacity>
          </View>

          <View style={layout.menuRow2}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={layout.btnEnterKm}
              underlayColor="#ff3300"
            >
              <Image
                style={layout.tinyLogo}
                source={require("../img/icon/icons8-add-reminder-96.png")}
              />
              <Text>Reminder</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={layout.btnEnterKm}
              underlayColor="#ff3300"
            >
              <Image
                style={layout.tinyLogo}
                source={require("../img/icon/icons8-shop-64.png")}
              />
              <Text>Shop</Text>
            </TouchableOpacity>
          </View>

          <View style={layout.menuRow3}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={layout.btnEnterKm}
              underlayColor="#ff3300"
            >
              <Image
                style={layout.tinyLogo}
                source={require("../img/icon/icons8-news-512.png")}
              />
              <Text>News</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const layout = StyleSheet.create({
  ads: {
    padding: 10,
  },
  imgAdv: {
    width: 390,
    height: 100,
    paddingLeft: 10,
  },
  menuItem: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  menuRow1: {
    flex: 1
  },
  menuRow2: {
    flex: 1,
  },
  menuRow3: {
    flex: 1
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  btnEnterKm: {
    width: 100,
    height: 100,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    //backgroundColor: "#c92a2a",
    borderRadius: 10,
    borderWidth: 0,
    alignItems: "center",
  },
});

export default HomeMenuItem;
