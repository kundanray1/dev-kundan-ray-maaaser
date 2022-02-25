import React from "react";
import {
	SafeAreaView,
	TouchableOpacity,
	View,
	Modal,
	Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as theme from "constants/theme.js";
import { Text, Block } from "components/Index.js";
import { styles } from "./../../ACH/Modal/EditOrDeleteModal.js"

const EditOrDeleteModal = ({
	editOrDeleteModalVisible,
	setEditOrDeleteModalVisible,
	cardData,
	navigation,
	handleConfirm,
}) => {
	const handleStatus = () => {
		Alert.alert(
			"Delete Linked Account",
			"Are you sure you want to delete this linked account?",
			[
				{
					text: "Cancel",
					style: {
						textTransform: "capitalize",
						color: theme.colors.primary2,
					},
				},
				{ text: "Confirm", onPress: () => handleConfirm() },
			],
			{
				cancelable: true,
			}
		);
	};
	return (
	    <SafeAreaView>
      <Modal
        visible={editOrDeleteModalVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onRequestClose={() =>
          setEditOrDeleteModalVisible(!editOrDeleteModalVisible)
        }
      >
        <TouchableOpacity
          style={styles.container}
          activeOpacity={1}
          onPressOut={() =>
            setEditOrDeleteModalVisible(!editOrDeleteModalVisible)
          }
        >
            <View
              style={[styles.modal, { width: "100%", paddingHorizontal: 18 }]}
            >
            <Block row middle style={styles.modalInnerContainer}>
                <Block
                  row
                  style={{
                    flex: 0.6,
                    justifyContent:
                      cardData != undefined
                        ? cardData.cardstatus == 2
                          ? "center"
                          : "space-between"
                        : "space-between",
                  }}
                >
                  {cardData != undefined ? (
                    cardData.cardstatus == 2 ? (
                      <Block style={{ flex: 0 }} />
                    ) : (
                      <TouchableOpacity
                        onPress={() => {
                          setEditOrDeleteModalVisible(false);
                          navigation.navigate("Link New Card", {
                            card: cardData,
                          });
                        }}
                       style={styles.icon}
                      >
                        <MaterialCommunityIcons
                          name="pencil-circle"
                          size={50}
                          color={theme.colors.primary2}
                        />
                        <Text
                          center
                          style={styles.modalText}
                        >
                          Edit
                        </Text>
                      </TouchableOpacity>
                    )
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        setEditOrDeleteModalVisible(false);
                        handleStatus();
                      }}
                    style={styles.icon}
                    >
                      <MaterialCommunityIcons
                        name="delete-circle"
                        size={50}
                        color={theme.colors.red}
                      />
                      <Text center style={styles.modalText}>
                        Disable
                      </Text>
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity
                    onPress={() => {
                      setEditOrDeleteModalVisible(false);
                      handleStatus();
                    }}
                  style={styles.icon}
                  >
                    {cardData != undefined ? (
                      cardData.cardstatus == 2 ? (
                        <MaterialCommunityIcons
                          name="pencil-circle"
                          size={50}
                          color={theme.colors.primary2}
                        />
                      ) : (
                        <MaterialCommunityIcons
                          name="delete-circle"
                          size={50}
                          color={theme.colors.red}
                        />
                      )
                    ) : (
                      <MaterialCommunityIcons
                        name="delete-circle"
                        size={50}
                        color={theme.colors.red}
                      />
                    )}

                    {cardData != undefined ? (
                      <Text center style={styles.modalText}>
                        {cardData.cardstatus == 2 ? "Enable" : "Delete"}
                      </Text>
                    ) : (
                      <Text center style={styles.modalText}>
                        Delete
                      </Text>
                    )}
                  </TouchableOpacity>
                </Block>
              </Block>
            </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
	);
};

export default EditOrDeleteModal;
