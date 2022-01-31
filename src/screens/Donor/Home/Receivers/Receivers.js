import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import * as theme from "../../../../constants/theme.js";
import {
  Block,
  Empty,
  ReceiversDetail,
  FloatingButton
} from "../../../../components/Index.js";
import { Ionicons } from "@expo/vector-icons";
import DonateIconComponent from "./../../../../assets/icons/DonateIconComponent";
import searchStyles from "../../../../utility/globalStyles.js";
const WIDTH = Dimensions.get("window").width;

const Receivers = ({ data, loginData, receivers, navigation }) => {
  const [search, setSearch] = useState();
  const [filteredDataSource, setFilteredDataSource] = useState(
    data.receivers != null ? data.receivers.clientsList : null
  );
  const [masterDataSource, setMasterDataSource] = useState(
    data.receivers != null ? data.receivers.clientsList : null
  );

  useEffect(() => {
    if (data.receivers === null) {
      receivers();
    } else {
      setFilteredDataSource(data.receivers.clientsList);
      setMasterDataSource(data.receivers.clientsList);
    }
  }, [data.receivers]);

  function searchFilterFunction(text) {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.account.fullname
          ? item.account.fullname.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
    } else {
      setFilteredDataSource(masterDataSource);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Block style={{ flex: 0, paddingHorizontal: 16 }}>
        <Block style={searchStyles.boxSearchContainer}>
          <Block style={searchStyles.boxVwSearch}>
            <Ionicons name="search" color={theme.colors.solidGray} size={18} />
          </Block>

          <TextInput
            placeholder="Search"
            placeholderTextColor={theme.colors.solidGray}
            style={searchStyles.boxTextInput}
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
          />

          {search ? (
            <TouchableOpacity
              onPress={() => searchFilterFunction()}
              style={searchStyles.vwClear}
            >
              <Ionicons name="close-circle-sharp" color="black" size={18} />
            </TouchableOpacity>
          ) : (
            <Block style={searchStyles.vwClear} />
          )}
        </Block>
      </Block>

      {data.isLoading ? (
        <ActivityIndicator size="large" color={theme.colors.primary2} />
      ) : (
        <Block style={{ flex: 0, marginTop: 10 }}>
          <FlatList
            data={filteredDataSource}
            showsVerticalScrollIndicator={true}
            keyExtractor={(item) => {
              return item.clientid.toString();
            }}
            ItemSeparatorComponent={() => <Block style={{ marginTop: 2 }} />}
            ListFooterComponent={() => (
              <Block
                middle
                center
                style={{ marginBottom: 120, flex: 0 }}
              ></Block>
            )}
            ListFooterComponentStyle={{
              paddingVertical: 20,
            }}
            ListEmptyComponent={() => (
              <Empty iconName="receivers" title="You don't have any data." />
            )}
            renderItem={(post) => (
              <Block style={{ flex: 0, paddingHorizontal: 16 }}>
                <ReceiversDetail
                  profilePic={post.item.profilepic}
                  name={post.item.account.fullname}
                  clientType={post.item.clienttype}
                  onPress={() => {
                    navigation.navigate("Donate From Receivers List", {
                      accountid: post.item.account.accountid,
                      fullname: post.item.account.fullname,
                      routeName: "Receivers",
                    });
                  }}
                />
              </Block>
            )}
          />
        </Block>
      )}
       <FloatingButton
        onPress={() => navigation.navigate("Donate")}
        iconComponent={<DonateIconComponent />}
      />
    </SafeAreaView>
  );
};
export default Receivers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  modal: {
    borderRadius: 4,
    borderColor: theme.colors.gray,
    backgroundColor: theme.colors.white,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
});
