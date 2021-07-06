import React, { useEffect } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import * as theme from "../../../../constants/theme.js";
import {
  Block,
  Text,
  CustomActivityIndicator,
} from "../../../../components/Index.js";
import moment from "moment";
import PaymentProto from "./../../../../protos/payment_pb";
import NumberFormat from 'react-number-format';

const ScheduleDonationReceiverDetail = ({
  route,
  scheduleDonationReceiverDetailStart,
  scheduleDonationReceiverDetailClear,
  data,
  navigation,
}) => {
  const { scheduleDonationReceiverDetail } = route.params;
  let scheduleTypeString =
    scheduleDonationReceiverDetail.scheduledetail.scheduletype;
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
    scheduleTypeString = "YEARLY";
  } else {
    scheduleTypeString = "NTH_DAY";
  }

  let status =
    scheduleDonationReceiverDetail.scheduletransactionstatus == 1
      ? "SCHEDULING"
      : scheduleDonationReceiverDetail.scheduletransactionstatus == 2
      ? "DISABLED": "CANCELLED";

  const onSubmitScheduleDonationReceiverDetail = (values) => {
    const scheduleTransactionProto = new PaymentProto.ScheduleTransaction();
    scheduleTransactionProto.setScheduletransactionid(
      scheduleDonationReceiverDetail.scheduletransactionid
    );

    if (values == "cancel") {
      scheduleTransactionProto.setScheduletransactionstatus(
        PaymentProto.ScheduleTransactionStatus.CANCELLED
      );
    } else if (values == "disable") {
      scheduleTransactionProto.setScheduletransactionstatus(
        PaymentProto.ScheduleTransactionStatus.DISABLED
      );
    } else if (values == "schedule") {
      scheduleTransactionProto.setScheduletransactionstatus(
        PaymentProto.ScheduleTransactionStatus.SCHEDULING
      );
    }
    scheduleDonationReceiverDetailStart(scheduleTransactionProto);
  };

  useEffect(() => {
    if (data.scheduleDonationReceiverDetail != null) {
      if (data.scheduleDonationReceiverDetail.success) {
        scheduleDonationReceiverDetailClear();
        navigation.navigate("Schedule Donation");
      }
    }
  }, [data.scheduleDonationReceiverDetail]);
  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 35, justifyContent: "center" }}
    >
      <Block
        style={{
          flex: 0,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          borderRadius:1.5,
          elevation: 1.5,
        }}
      >
        <Block
          style={{
            flex: 0,
            paddingVertical: 18,
            paddingHorizontal: 25,
            borderRadius: 10,
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
                {scheduleDonationReceiverDetail.clientList[1].account.fullname}
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
            <NumberFormat
                    value={scheduleDonationReceiverDetail.amount/100}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    renderText={formattedValue => <Text  color={theme.colors.solidGray} style={{ fontSize: 15 }}>{formattedValue}</Text>} 
                    />
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
                {moment(
                  scheduleDonationReceiverDetail.scheduledetail.startDate
                ).format("Do MMMM YYYY")}
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
                {moment(
                  scheduleDonationReceiverDetail.scheduledetail.enddate
                ).format("Do MMMM YYYY")}
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
          <Block row style={{ flex: 0, paddingVertical: 8 }}>
            <Block>
              <Text
                bold
                style={{ fontSize: 16, fontWeight: "700" }}
                color={theme.colors.solidGray}
              >
                Status
              </Text>
            </Block>
            <Block
              style={{
                backgroundColor:
                  status == "SCHEDULING"
                    ? theme.colors.schedulingBackground
                    : status == "DISABLED"
                    ? theme.colors.disabledBackground
                    : theme.colors.cancelledBackground,
                paddingVertical: 4,
                paddingHorizontal: 8,
                borderRadius: 14,
              }}
            >
              <Text
                center
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                }}
                color={
                  status == "SCHEDULING"
                    ? theme.colors.schedulingText
                    : status == "DISABLED"
                    ? theme.colors.disabledText
                    : theme.colors.cancelledText
                }
              >
                {status}
              </Text>
            </Block>
          </Block>
        </Block>

        <Block style={{ flex: 0 }}>
          {status == "SCHEDULING" ? (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => onSubmitScheduleDonationReceiverDetail("cancel")}
              style={{
                flex: 0,
                paddingVertical: 12,
                borderTopWidth: 2,
                borderColor: theme.colors.gray2,
              }}
            >
              {data.isLoading ? (
                <>
                  <CustomActivityIndicator
                    label="Requesting..."
                    isLoading={data.isLoading}
                  />
                  <Text
                    center
                    color={theme.colors.gray}
                    style={{ fontSize: 18, fontWeight: "700" }}
                  >
                    Cancel Donation
                  </Text>
                </>
              ) : (
                <Text
                  center
                  color={theme.colors.gray}
                  style={{ fontSize: 18, fontWeight: "700" }}
                >
                  Cancel Donation
                </Text>
              )}
            </TouchableOpacity>
          ) : status == "CANCELLED" ? (
            <>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => onSubmitScheduleDonationReceiverDetail("schedule")}
                style={{
                  flex: 0,
                  paddingVertical: 12,
                  borderTopWidth: 2,
                  borderColor: theme.colors.gray2,
                }}
              >
                {data.isLoading ? (
                  <>
                    <CustomActivityIndicator
                      label="Requesting..."
                      isLoading={data.isLoading}
                    />
                    <Text
                      center
                      color={theme.colors.gray}
                      style={{ fontSize: 18, fontWeight: "700" }}
                    >
                      Schedule
                    </Text>
                  </>
                ) : (
                  <Text
                    center
                    color={theme.colors.gray}
                    style={{ fontSize: 18, fontWeight: "700" }}
                  >
                    Schedule
                  </Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => onSubmitScheduleDonationReceiverDetail("disable")}
                style={{
                  flex: 0,
                  paddingVertical: 12,
                  borderTopWidth: 2,
                  borderColor: theme.colors.gray2,
                }}
              >
                {data.isLoading ? (
                  <>
                    <CustomActivityIndicator
                      label="Requesting..."
                      isLoading={data.isLoading}
                    />
                    <Text
                      center
                      color={theme.colors.red}
                      style={{ fontSize: 18, fontWeight: "700" }}
                    >
                      Disable
                    </Text>
                  </>
                ) : (
                  <Text
                    center
                    color={theme.colors.red}
                    style={{ fontSize: 18, fontWeight: "700" }}
                  >
                    Disable
                  </Text>
                )}
              </TouchableOpacity>
            </>
            )
            :(
            <Block style={{flex:0}}/>
          )}
        </Block>
      </Block>
    </SafeAreaView>
  );
};

export default ScheduleDonationReceiverDetail;
