import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  RefreshControl,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import * as theme from "../../../../constants/theme.js";
import { Block, Empty, DonorsDetail } from "../../../../components/Index.js";
import styles from "../../../../utility/globalStyles.js";
import { Ionicons } from "@expo/vector-icons";

const Donors = ({ data, donors }) => {
  const [search, setSearch] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const [filteredDataSource, setFilteredDataSource] = useState(
    data.donors != null ? data.donors.clientsList : null
  );
  const [masterDataSource, setMasterDataSource] = useState(
    data.donors != null ? data.donors.clientsList : null
  );

  useEffect(() => {
    if (data.donors === null) {
      donors();
    } else {
      setFilteredDataSource(data.donors.clientsList);
      setMasterDataSource(data.donors.clientsList);
    }
  }, [data.donors]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    donors();
    setRefreshing(false);
  });
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
        <Block style={styles.boxSearchContainer}>
          <Block style={styles.boxVwSearch}>
            <Ionicons name="search" color={theme.colors.solidGray} size={18} />
          </Block>

          <TextInput
            placeholder="Search"
            placeholderTextColor={theme.colors.solidGray}
            style={styles.boxTextInput}
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
            refreshControl={
              <RefreshControl
                colors={[theme.colors.primary2]}
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
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
              <Empty iconName="donors" title="You don't have any data." />
            )}
            renderItem={(post) => (
              <Block style={{ flex: 0, paddingHorizontal: 16 }}>
                <DonorsDetail
                  profilePic={post.item.profilepic}
                  name={post.item.account.fullname}
                  clientType={post.item.clienttype}
                />
              </Block>
            )}
          />
        </Block>
      )}
    </SafeAreaView>
  );
};

export default Donors;
