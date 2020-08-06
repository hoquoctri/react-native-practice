import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { RectButton, ScrollView, FlatList } from "react-native-gesture-handler";

export default function ActivityScreen() {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Add Km",
      content: "Bạn đã nhập 3000km. Bạn đã nhập 3000km. Bạn đã nhập 3000km. Bạn đã nhập 3000km. Bạn đã nhập 3000km.",
      date: "2020-07-23 10:31:00",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b2",
      title: "Reminder",
      content: "Bạn đã tạo reminder cho xe  Hondan Vision",
      date: "2020-07-24 10:31:00",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b3",
      title: "Add Km",
      content: "Bạn đã nhập 3000km.",
      date: "2020-07-23 10:31:00",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b5",
      title: "Reminder",
      content: "Bạn đã tạo reminder cho xe  Hondan Vision",
      date: "2020-07-24 10:31:00",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b6",
      title: "Add Km",
      content: "Bạn đã nhập 3000km.",
      date: "2020-07-23 10:31:00",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b7",
      title: "Reminder",
      content: "Bạn đã tạo reminder cho xe  Hondan Vision",
      date: "2020-07-24 10:31:00",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b8",
      title: "Add Km",
      content: "Bạn đã nhập 3000km.",
      date: "2020-07-23 10:31:00",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b9",
      title: "Reminder",
      content: "Bạn đã tạo reminder cho xe  Hondan Vision",
      date: "2020-07-24 10:31:00",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b10",
      title: "Add Km",
      content: "Bạn đã nhập 3000km.",
      date: "2020-07-23 10:31:00",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b11",
      title: "Reminder",
      content: "Bạn đã tạo reminder cho xe  Hondan Vision",
      date: "2020-07-24 10:31:00",
    }
    
  ];

  const Item = ({ title, date, content }) => (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={styles.title}>{content}</Text>
      <Text style={styles.itemDate}>{date}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} date={item.date} content={item.content} />
  );

  return (
    <SafeAreaView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  contentContainer: {
    paddingTop: 15,
  },
  item: {
    padding: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 10,
    backgroundColor: "#e5f4fb",
    borderRadius: 10
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "100"
  },
  itemDate: {
    paddingTop: 10,
    fontSize: 10,
    color:  "#1864ab"
  },
});
