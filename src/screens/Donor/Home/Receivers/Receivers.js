import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import * as theme from "../../../../constants/theme.js";
import {
  Block,
  Text,
  Empty,
  ReceiversDetail,
} from "../../../../components/Index.js";
import Dummy from "./Dummy.js";
import { Ionicons } from "@expo/vector-icons";

const Receivers = ({ navigation, data, receivers }) => {
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
        const itemData = item.account.fullname ? item.account.fullname.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setMasterDataSource(masterDataSource);
      setSearch(text);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Block style={{ flex: 0, paddingHorizontal: 16 }}>
        <Block style={styles.searchContainer}>
          <Block style={styles.vwSearch}>
            <Ionicons name="search" color={theme.colors.solidGray} size={18} />
          </Block>

          <TextInput
            placeholder="Search"
            placeholderTextColor={theme.colors.solidGray}
            style={styles.textInput}
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
          />

          {search ? (
            <TouchableOpacity
              onPress={() => searchFilterFunction()}
              style={styles.vwClear}
            >
              <Ionicons name="close-circle-sharp" color="black" size={18} />
            </TouchableOpacity>
          ) : (
            <Block style={styles.vwClear} />
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
                  <Block middle center style={{ marginBottom:120,flex: 0 }}>
                  </Block>
                )}
                ListFooterComponentStyle={{
                  paddingVertical:20,
                }}
            ListEmptyComponent={() => (
              <Empty iconName="account-group" title="No receivers avaialble!" />
            )}
            renderItem={(post) => (
              <Block style={{ flex: 0, paddingHorizontal: 16 }}>
                <ReceiversDetail
                  profilePic={post.item.profilepic}
                  name={post.item.account.fullname}
                  clientType={post.item.clienttype}
                  onPress={() => navigation.navigate("Donate")}
                />
              </Block>
            )}
          />
        </Block>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  vwClear: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },

  vwSearch: {
    flex: 0.1,
    justifyContent: "center",
  },
  icSearch: {
    height: 20,
    width: 20,
  },
  searchContainer: {
    backgroundColor: theme.colors.white,
    width: "100%",
    height: 38,
    marginTop: 15,
    paddingHorizontal: 5,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: theme.colors.solidGray,
    flex: 0,
    borderRadius: 2,
  },
});

export default Receivers;
