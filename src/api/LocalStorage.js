import  AsyncStorage  from '@react-native-async-storage/async-storage';
class LocalDb {
    constructor() {
        this.sessionKey = "rccs";
    }
    async getSession() {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(this.sessionKey)
                .then(res => {
                    if (null !== res) {
                        resolve(JSON.parse(res));
                    } else {
                        resolve(null);
                    }
                }).catch(err => reject(err));
        });
    }


    setSession(session, callback) {
        try {
            var item = {
                "token": session.token,
                "user": session.user
            }
            AsyncStorage.setItem(this.sessionKey, JSON.stringify(item), (error) => callback(error));
        } catch (error) {
            console.log("Error while setting session.", error);
        }
    }
    
    removeSession(callback) {
        try {
            AsyncStorage.removeItem(this.sessionKey, (error) => callback(error));
        } catch (error) {
            console.log("Error while removing session.", error);
        }
    }
    
    saveAggregrateInfo(aggregrateInfo, callback) {
        try {
            var item = {
                "aggregrateInfo": aggregrateInfo,
            }
            AsyncStorage.setItem("aggregrateInfo", JSON.stringify(item), (error) => callback(error));
        } catch (error) {
            console.log("Error while save aggregrate.", error);
        }
    }
    async getAggregrateInfo() {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem("aggregrateInfo")
                .then(res => {
                    if (null !== res) {
                        resolve(JSON.parse(res));
                    } else {
                        resolve(null);
                    }
                }).catch(err => reject(err));
        });
    }

    saveUserListInfo(userListInfo, callback) {
        try {
            var item = {
                "userList": userListInfo,
            }
            console.lot
            AsyncStorage.setItem("userList", JSON.stringify(item), (error) => callback(error));
        } catch (error) {
            console.log("Error while saving user list.", error);
        }
    }
    async getUserListInfo() {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem("userList")
                .then(res => {
                    if (null !== res) {
                        resolve(JSON.parse(res));
                    } else {
                        resolve(null);
                    }
                }).catch(err => reject(err));
        });
    }
    saveDonorListInfo(donorListInfo, callback) {
        try {
            var item = {
                "donorList": donorListInfo,
            }
            AsyncStorage.setItem("donorListInfo", JSON.stringify(item), (error) => callback(error));
        } catch (error) {
            console.log("Error while saving donor list.", error);
        }
    }
    async getDonorListInfo() {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem("donorListInfo")
                .then(res => {
                    if (null !== res) {
                        resolve(JSON.parse(res));
                    } else {
                        resolve(null);
                    }
                }).catch(err => reject(err));
        });
    }

    saveReportListInfo(reportListInfo, callback) {
        try {
            var item = {
                "reportList": reportListInfo,
            }
            AsyncStorage.setItem("reportListInfo", JSON.stringify(item), (error) => callback(error));
        } catch (error) {
            console.log("Error while saving report list.", error);
        }
    }
    async getReportListInfo() {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem("reportListInfo")
                .then(res => {
                    if (null !== res) {
                        resolve(JSON.parse(res));
                    } else {
                        resolve(null);
                    }
                }).catch(err => reject(err));
        });
    }

    savePaymentListInfo(paymentListInfo, callback) {
        try {
            var item = {
                "paymentList": paymentListInfo,
            }
            AsyncStorage.setItem("paymentListInfo", JSON.stringify(item), (error) => callback(error));
        } catch (error) {
            console.log("Error while saving user list.", error);
        }
    }
    async getPaymentListInfo() {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem("paymentListInfo")
                .then(res => {
                    if (null !== res) {
                        resolve(JSON.parse(res));
                    } else {
                        resolve(null);
                    }
                }).catch(err => reject(err));
        });
    }
    saveBalanceListInfo(balanceListInfo, callback) {
        try {
            var item = {
                "balanceList": balanceListInfo,
            }
            AsyncStorage.setItem("balanceListInfo", JSON.stringify(item), (error) => callback(error));
        } catch (error) {
            console.log("Error while saving user list.", error);
        }
    }
    async getBalanceListInfo() {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem("balanceListInfo")
                .then(res => {
                    if (null !== res) {
                        resolve(JSON.parse(res));
                    } else {
                        resolve(null);
                    }
                }).catch(err => reject(err));
        });
    }
    savePledgeListInfo(pledgeListInfo, callback) {
        try {
            var item = {
                "pledgeInfo": pledgeListInfo,
            }
            AsyncStorage.setItem("pledgeListInfo", JSON.stringify(item), (error) => callback(error));
        } catch (error) {
            console.log("Error while saving user list.", error);
        }
    }
    async getPledgeListInfo() {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem("pledgeListInfo")
                .then(res => {
                    if (null !== res) {
                        resolve(JSON.parse(res));
                    } else {
                        resolve(null);
                    }
                }).catch(err => reject(err));
        });
    }
    savePhoneListInfo(phoneListInfo, callback) {
        try {
            var item = {
                "phoneInfo": phoneListInfo,
            }
            AsyncStorage.setItem("phoneListInfo", JSON.stringify(item), (error) => callback(error));
        } catch (error) {
            console.log("Error while saving user list.", error);
        }
    }
    async getPhoneListInfo() {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem("phoneListInfo")
                .then(res => {
                    if (null !== res) {
                        resolve(JSON.parse(res));
                    } else {
                        resolve(null);
                    }
                }).catch(err => reject(err));
        });
    }

    saveAssociationListInfo(associationListInfo, callback) {
        try {
            var item = {
                "associationInfo": associationListInfo,
            }
            AsyncStorage.setItem("associationListInfo", JSON.stringify(item), (error) => callback(error));
        } catch (error) {
            console.log("Error while saving association list.", error);
        }
    }
    async getAssociationListInfo() {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem("associationListInfo")
                .then(res => {
                    if (null !== res) {
                        resolve(JSON.parse(res));
                    } else {
                        resolve(null);
                    }
                }).catch(err => reject(err));
        });
    }
    saveAddressListInfo(addressListInfo, callback) {
        try {
            var item = {
                "addressInfo": addressListInfo,
            }
            AsyncStorage.setItem("addressListInfo", JSON.stringify(item), (error) => callback(error));
        } catch (error) {
            console.log("Error while saving address list.", error);
        }
    }
    async getAddressListInfo() {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem("addressListInfo")
                .then(res => {
                    if (null !== res) {
                        resolve(JSON.parse(res));
                    } else {
                        resolve(null);
                    }
                }).catch(err => reject(err));
        });
    }

}
export default new LocalDb();
