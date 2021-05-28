import React, { useState } from "react";
import { FlatList, SafeAreaView, Image } from "react-native";
import * as theme from "../../../constants/theme.js";
import {
  Block,
  Text,
  Empty,
  DonationsDetail,
  Button,
  FloatingButton,
  ReceiversDetail
} from "../../../components/Index.js";
import Dummy from "./Dummy.js";

const DonorReceiver = ({ navigation,userData }) => {
  const [loading, setLoading] = useState(false);
  const fullName=userData.user.account.fullname.split(" ")[0]
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Block>
        <Block style={{ paddingHorizontal: 20, marginTop: 40,marginBottom: 40, flex: 0.5 }}>
          <Block
            row
            center
            style={{
              paddingHorizontal: 20,
              borderRadius: 4,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 4,
              elevation: 4,
              backgroundColor: theme.colors.white,
            }}
          >
            <Block
              style={{
                flex: 1,
              }}
            >
              <Image
                source={require("../../../assets/icons/user.png")}
                style={{ height: 40, width: 40, marginRight: 10 }}
              />
            </Block>
            <Block
              style={{
                flex: 4,
                marginLeft: 6,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
                Hi, {fullName}!
              </Text>
              <Button style={{ height: 30,width:100 }}>
                <Text
                  color={theme.colors.white}
                  style={{ fontSize: 16, fontWeight: "700" }}
                >
                  Load Fund
                </Text>
              </Button>
            </Block>
            <Block
              style={{
                flex: 2,
              }}
            >
              <Text
                center
                color={theme.colors.solidGray}
                style={{ fontSize: 16, fontWeight: "700" }}
              >
                Balance
              </Text>
              <Text center style={{ fontSize: 24, fontWeight: "700" }}>
                {"\u0024"}1234
              </Text>
            </Block>
          </Block>
        </Block>

        <Block>
          <Block
            row
            style={{ paddingHorizontal: 20, justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 20, fontWeight: "700" }}>
              Upcoming Donations
            </Text>
            <Text
              onPress={() => navigation.navigate("Upcoming Donations")}
              style={{ fontSize: 18, fontWeight: "500" }}
              color={theme.colors.solidGray}
            >
              View All
            </Text>
          </Block>
          <FlatList
            data={Dummy}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => {
              return item.id.toString();
            }}
            ListEmptyComponent={() => <Empty title="No data" />}
            renderItem={(post) => (
              <DonationsDetail
                profilePic={post.item.profilePic}
                name={post.item.name}
                amount={post.item.amount}
                date={post.item.date}
                textColor={theme.colors.black}
              />
            )}
          />
        </Block>
        <Block>
          <Block
            row
            style={{ paddingHorizontal: 20, justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 20, fontWeight: "700" }}>
              Donations Made
            </Text>
            <Text
              onPress={() => navigation.navigate("Donations Made")}
              style={{ fontSize: 18, fontWeight: "500" }}
              color={theme.colors.solidGray}
            >
              View All
            </Text>
          </Block>
          <FlatList
            data={Dummy}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => {
              return item.id.toString();
            }}
            ItemSeparatorComponent={() => <Block style={{ marginTop: 2 }} />}
            ListEmptyComponent={() => <Empty title="No data" />}
            renderItem={(post) => (
              <DonationsDetail
                profilePic={post.item.profilePic}
                name={post.item.name}
                amount={post.item.amount}
                date={post.item.date}
                textColor={theme.colors.green}
              />
            )}
          />
        </Block>
        <Block>
          <Block
            row
            style={{ paddingHorizontal: 20, justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 20, fontWeight: "700" }}>Receivers</Text>
            <Text
              onPress={() => navigation.navigate("Receivers")}
              style={{ fontSize: 18, fontWeight: "500" }}
              color={theme.colors.solidGray}
            >
              View All
            </Text>
          </Block>
          <FlatList
            data={Dummy}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => {
              return item.id.toString();
            }}
            ItemSeparatorComponent={() => <Block style={{ marginTop: 2 }} />}
            ListEmptyComponent={() => <Empty title="No data" />}
            renderItem={(post) => (
              <ReceiversDetail
                profilePic={post.item.profilePic}
                name={post.item.name}
                style={{paddingHorizontal:16,marginVertical:4}}
                onPress={() => navigation.navigate("Donate")}
              />
            )}
          />
        </Block>
        <FloatingButton image={require("../../../assets/icons/donate.png")} onPress={()=>console.log("Load Fund")}/>
      </Block>
    </SafeAreaView>
  );
};

export default DonorReceiver;
