import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import * as theme from "../../../constants/theme.js";
import { Block, Text } from "../../../components/Index.js";
import moment from "moment";

const ScheduleDonationReceiverDetail = ({route}) => {
const{scheduleDonationReceiverDetail}=route.params
console.log("route.parjjjjjams",scheduleDonationReceiverDetail.scheduledetail.scheduletype)

 let scheduleTypeString=scheduleDonationReceiverDetail.scheduledetail.scheduletype
  if (scheduleTypeString == 1) {
    scheduleTypeString = "ONE_TIME";
  } else if (scheduleTypeString == 2) {
    scheduleTypeString = "DAILY";
  } else if (scheduleTypeString == 3) {
    scheduleTypeString = "WEEKLY";
  } else if (scheduleTypeString == 4) {
    scheduleTypeString = "MONTHLY";
  } else if (scheduleTypeString == 5) {
    scheduleTypeString = "QUARTERLY";
  } else if (scheduleTypeString == 6) {
    scheduleTypeString = "HALF YEARLY";
  } else if (scheduleTypeString == 7) {
    scheduleTypeString ="YEARLY";
  } else {
    scheduleTypeString = "NTH_DAY";
  }
  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 35, justifyContent: "center" }}
    >
      <Block
        style={{
          flex: 0,
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 2,
          borderRadius: 4,
        }}
      >
        <Block
          style={{
            flex: 0,
            paddingVertical: 25,
            paddingHorizontal: 25,
          }}
        >
          <Block row style={{ flex: 0, paddingVertical: 8 }}>
            <Block>
              <Text
                bold
                style={{ fontSize: 16, fontWeight: "700" }}
                color={theme.colors.solidGray}
              >
                Receiver’s Name
              </Text>
            </Block>
            <Block>
              <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                {scheduleDonationReceiverDetail.remark}
              </Text>
            </Block>
          </Block>
          <Block row style={{ flex: 0, paddingVertical: 8 }}>
            <Block>
              <Text
                bold
                style={{ fontSize: 16, fontWeight: "700" }}
                color={theme.colors.solidGray}
              >
                  Amount
              </Text>
            </Block>
            <Block>
              <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
               {"\u0024"}
              {scheduleDonationReceiverDetail.amount}
              </Text>
            </Block>
          </Block>
          <Block row style={{ flex: 0, paddingVertical: 8 }}>
            <Block>
              <Text
                bold
                style={{ fontSize: 16, fontWeight: "700" }}
                color={theme.colors.solidGray}
              >
                Schedule Type
              </Text>
            </Block>
            <Block>
              <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                 {scheduleTypeString}
              </Text>
            </Block>
          </Block>
          <Block row style={{ flex: 0, paddingVertical: 8 }}>
            <Block>
              <Text
                bold
                style={{ fontSize: 16, fontWeight: "700" }}
                color={theme.colors.solidGray}
              >
                Start Date
              </Text>
            </Block>
            <Block>
              <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
              {moment(scheduleDonationReceiverDetail.scheduledetail.startDate).format("Do MMMM YYYY")}
              </Text>
            </Block>
          </Block>
          <Block row style={{ flex: 0, paddingVertical: 8 }}>
            <Block>
              <Text
                bold
                style={{ fontSize: 16, fontWeight: "700" }}
                color={theme.colors.solidGray}
              >
                End Date
              </Text>
            </Block>
            <Block>
              <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
               {moment(scheduleDonationReceiverDetail.scheduledetail.endDate).format("Do MMMM YYYY")}
              </Text>
            </Block>
          </Block>

          <Block row style={{ flex: 0, paddingVertical: 8 }}>
            <Block>
              <Text
                bold
                style={{ fontSize: 16, fontWeight: "700" }}
                color={theme.colors.solidGray}
              >
                Remarks
              </Text>
            </Block>
            <Block>
              <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
                 {scheduleDonationReceiverDetail.remark}
              </Text>
            </Block>
          </Block>
        </Block>

        
          <TouchableOpacity activeOpacity={0.8} onPress={()=>console.log("Pressed cancel Donation")} style={{ flex: 0,
            paddingVertical: 12,
            borderTopWidth: 2,
            borderColor: theme.colors.gray2,}}>
            <Text
            center
              color={theme.colors.red}
              style={{ fontSize: 18, fontWeight: "700" }}
            >
              Cancel Donation
            </Text>
          </TouchableOpacity>
        </Block>
    </SafeAreaView>
  );
};

export default ScheduleDonationReceiverDetail;
