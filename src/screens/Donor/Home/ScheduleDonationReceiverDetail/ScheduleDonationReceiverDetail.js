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
      ? "SCHEDULE PENDING"
      : scheduleDonationReceiverDetail.scheduletransactionstatus == 2
      ? "APPROVED"
      : scheduleDonationReceiverDetail.scheduletransactionstatus == 3
      ? "SCHEDULING"
      : scheduleDonationReceiverDetail.scheduletransactionstatus == 4
      ? "CLOSED"
      : scheduleDonationReceiverDetail.scheduletransactionstatus == 5
      ? "DISABLED"
      : "CANCELLED";

  const onSubmitScheduleDonationReceiverDetail = (values) => {
    const scheduleTransactionProto = new PaymentProto.ScheduleTransaction();
    scheduleTransactionProto.setScheduletransactionid(
      scheduleDonationReceiverDetail.scheduletransactionid
    );
    if (values == "cancel") {
      scheduleTransactionProto.setScheduletransactionstatus(
        PaymentProto.ScheduleTransactionStatus.CANCELLED
      );
    } else if (values == "close") {
      scheduleTransactionProto.setScheduletransactionstatus(
        PaymentProto.ScheduleTransactionStatus.CLOSED
      );
    } else if (values == "delete") {
      scheduleTransactionProto.setScheduletransactionstatus(
        PaymentProto.ScheduleTransactionStatus.DISABLED
      );
    } else {
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
         borderRadius: 4,
            shadowRadius: 4,
            elevation: 2,
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
                  scheduleDonationReceiverDetail.scheduledetail.endDate
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
                  status == "SCHEDULE PENDING"
                    ? theme.colors.schedulePendingBackground
                    : status == "APPROVED"
                    ? theme.colors.approvedBackground
                    : status == "SCHEDULING"
                    ? theme.colors.schedulingBackground
                    : status == "CLOSED"
                    ? theme.colors.closedBackground
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
                  status == "SCHEDULE PENDING"
                    ? theme.colors.schedulePendingText
                    : status == "APPROVED"
                    ? theme.colors.approvedText
                    : status == "SCHEDULING"
                    ? theme.colors.schedulingText
                    : status == "CLOSED"
                    ? theme.colors.closedText
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
                onPress={() => onSubmitScheduleDonationReceiverDetail("close")}
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
                      Close
                    </Text>
                  </>
                ) : (
                  <Text
                    center
                    color={theme.colors.gray}
                    style={{ fontSize: 18, fontWeight: "700" }}
                  >
                    Close
                  </Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => onSubmitScheduleDonationReceiverDetail("delete")}
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
                      Delete
                    </Text>
                  </>
                ) : (
                  <Text
                    center
                    color={theme.colors.red}
                    style={{ fontSize: 18, fontWeight: "700" }}
                  >
                    Delete
                  </Text>
                )}
              </TouchableOpacity>
            </>
          ) : status == "CLOSED" ? (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => onSubmitScheduleDonationReceiverDetail("delete")}
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
                    Delete
                  </Text>
                </>
              ) : (
                <Text
                  center
                  color={theme.colors.red}
                  style={{ fontSize: 18, fontWeight: "700" }}
                >
                  Delete
                </Text>
              )}
            </TouchableOpacity>
          ) : (
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
          )}
        </Block>
      </Block>
    </SafeAreaView>
  );
};

export default ScheduleDonationReceiverDetail;
