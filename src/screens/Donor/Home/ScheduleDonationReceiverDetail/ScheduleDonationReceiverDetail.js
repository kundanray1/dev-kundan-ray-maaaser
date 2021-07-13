import React, { useEffect } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import * as theme from "../../../../constants/theme.js";
import {
  Block,
  Text,
  CustomActivityIndicator,
  Button,
  OutlinedButton,
} from "../../../../components/Index.js";
import moment from "moment";
import PaymentProto from "./../../../../protos/payment_pb";
import NumberFormat from "react-number-format";

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
    scheduleTypeString = "ONE TIME";
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
      ? "SCHEDULE_PENDING" :
      scheduleDonationReceiverDetail.scheduletransactionstatus == 2
      ? "APPROVED":
      scheduleDonationReceiverDetail.scheduletransactionstatus == 3
      ? "SCHEDULING" :
      scheduleDonationReceiverDetail.scheduletransactionstatus == 4
      ? "CLOSED" :
      scheduleDonationReceiverDetail.scheduletransactionstatus == 5
      ? "DISABLED" : "CANCELLED" 

  const onSubmitScheduleDonationReceiverDetail = (values) => {
    const scheduleTransactionProto = new PaymentProto.ScheduleTransaction();
    scheduleTransactionProto.setScheduletransactionid(
      scheduleDonationReceiverDetail.scheduletransactionid
    );

    if (values == "cancel") {
      scheduleTransactionProto.setScheduletransactionstatus(
        PaymentProto.ScheduleTransactionStatus.CANCELLED
      );
    } else if (values == "delete") {
      scheduleTransactionProto.setScheduletransactionstatus(
        PaymentProto.ScheduleTransactionStatus.DISABLED
      );
    } else if (values == "close") {
      scheduleTransactionProto.setScheduletransactionstatus(
        PaymentProto.ScheduleTransactionStatus.CLOSED
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
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
      <Block style={{ flex: 0, paddingVertical: 8 }}>
        <Text
          bold
          style={{ fontSize: 16, fontWeight: "700" }}
          color={theme.colors.solidGray}
        >
          Receiver’s Name
        </Text>
        <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
          {scheduleDonationReceiverDetail.clientList[1].account.fullname}
        </Text>
      </Block>
      <Block style={{ flex: 0, paddingVertical: 8 }}>
        <Text
          bold
          style={{ fontSize: 16, fontWeight: "700" }}
          color={theme.colors.solidGray}
        >
          Amount
        </Text>
        <NumberFormat
          value={scheduleDonationReceiverDetail.amount / 100}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          decimalScale={2}
          fixedDecimalScale={true}
          renderText={(formattedValue) => (
            <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
              {formattedValue}
            </Text>
          )}
        />
      </Block>

      <Block style={{ flex: 0, paddingVertical: 8 }}>
        <Text
          bold
          style={{ fontSize: 16, fontWeight: "700" }}
          color={theme.colors.solidGray}
        >
          Schedule Type
        </Text>
        <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
          {scheduleTypeString}
        </Text>
      </Block>
      <Block style={{ flex: 0, paddingVertical: 8 }}>
        <Text
          bold
          style={{ fontSize: 16, fontWeight: "700" }}
          color={theme.colors.solidGray}
        >
          Start Date
        </Text>
        <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
          {moment(
            scheduleDonationReceiverDetail.scheduledetail.startDate
          ).format("Do MMMM YYYY")}
        </Text>
      </Block>
      <Block style={{ flex: 0, paddingVertical: 8 }}>
        <Text
          bold
          style={{ fontSize: 16, fontWeight: "700" }}
          color={theme.colors.solidGray}
        >
          End Date
        </Text>
        <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
          {moment(scheduleDonationReceiverDetail.scheduledetail.enddate).format(
            "Do MMMM YYYY"
          )}
        </Text>
      </Block>

      <Block style={{ flex: 0, paddingVertical: 8 }}>
        <Text
          bold
          style={{ fontSize: 16, fontWeight: "700" }}
          color={theme.colors.solidGray}
        >
          Remarks
        </Text>
        <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
          {scheduleDonationReceiverDetail.remark}
        </Text>
      </Block>
      <Block style={{ flex: 0, paddingVertical: 8 }}>
        <Text
          bold
          style={{ fontSize: 16, fontWeight: "700" }}
          color={theme.colors.solidGray}
        >
          Status
        </Text>

        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            backgroundColor:
                  status == "SCHEDULING"
                ? theme.colors.schedulingBackground
                : status == "CLOSED"
                ? "#FFD8D3"
                :  status == "CANCELLED"
                ? theme.colors.cancelledBackground
                :  theme.colors.schedulingBackground ,
            paddingVertical: 4,
            paddingHorizontal: 8,
            width: 140,
          }}
          color={
             status == "SCHEDULING"
                ? theme.colors.schedulingText
                : status == "CLOSED"
                ? "#DE4C3C"
                :  status == "CANCELLED"
                ? theme.colors.cancelledText
                :  theme.colors.schedulingText
          }
        >
          {status}
        </Text>
      </Block>

      <Block
        style={{
          flex: 0,
          paddingHorizontal: 20,
          bottom: 0,
          paddingVertical: 10,
          position: "absolute",
        }}
      >
        {status == "SCHEDULING" || status == "APPROVED" || status == "SCHEDULE_PENDING"? (
          <Button
            full
            onPress={() => onSubmitScheduleDonationReceiverDetail("cancel")}
          >
            {data.isLoading ? (
              <>
                <CustomActivityIndicator
                  label="Requesting..."
                  isLoading={data.isLoading}
                />
                <Text
                  button
                  style={{ fontSize: 20, textTransform: "uppercase" }}
                >
                  Cancel
                </Text>
              </>
            ) : (
              <Text button style={{ fontSize: 20, textTransform: "uppercase" }}>
                Cancel
              </Text>
            )}
          </Button>
        ) : status == "CANCELLED" ? (
          <>
            <Button
              full
              onPress={() => onSubmitScheduleDonationReceiverDetail("delete")}
              style={{
                marginVertical: 12,
              }}
            >
              {data.isLoading ? (
                <>
                  <CustomActivityIndicator
                    label="Requesting..."
                    isLoading={data.isLoading}
                  />
                  <Text
                    button
                    style={{ fontSize: 20, textTransform: "uppercase" }}
                  >
                    Delete
                  </Text>
                </>
              ) : (
                <Text
                  button
                  style={{ fontSize: 20, textTransform: "uppercase" }}
                >
                  Delete
                </Text>
              )}
            </Button>
            <OutlinedButton
              full
              onPress={() => onSubmitScheduleDonationReceiverDetail("close")}
            >
              {data.isLoading ? (
                <>
                  <CustomActivityIndicator
                    label="Requesting..."
                    isLoading={data.isLoading}
                  />
                  <Text
                    outlinedButton
                    style={{ fontSize: 20, textTransform: "uppercase",color:theme.colors.primary2 }}
                  >
                    Close
                  </Text>
                </>
              ) : (
                <Text
                  outlinedButton
                  style={{ fontSize: 20, textTransform: "uppercase",color:theme.colors.primary2 }}
                >
                  close
                </Text>
              )}
            </OutlinedButton>
          </>
        ) : (
          <Button
              full
              onPress={() => onSubmitScheduleDonationReceiverDetail("delete")}
              style={{
                marginVertical: 12,
              }}
            >
              {data.isLoading ? (
                <>
                  <CustomActivityIndicator
                    label="Requesting..."
                    isLoading={data.isLoading}
                  />
                  <Text
                    button
                    style={{ fontSize: 20, textTransform: "uppercase" }}
                  >
                    Delete
                  </Text>
                </>
              ) : (
                <Text
                  button
                  style={{ fontSize: 20, textTransform: "uppercase" }}
                >
                  Delete
                </Text>
              )}
            </Button>
        )}
      </Block>
    </SafeAreaView>
  );
};

export default ScheduleDonationReceiverDetail;
