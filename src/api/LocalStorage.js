import  AsyncStorage  from '@react-native-async-storage/async-storage';
export class LocalDb {
  static isLogin;
  constructor() {
    this.sessionKey = 'maaserSession';
  }

 async getSessions() {
    const response = await AsyncStorage.getItem(this.sessionKey);
    if (response !== null){
      return JSON.parse(response);
    }
    return null;
  }

  setSessions(session, callback) {
    try {
      AsyncStorage.setItem(this.sessionKey, JSON.stringify(session), error =>callback(error));
      callback(false);
    } catch (error) {
      console.log('Error while setting session', error);
    }
  }

  removeSession(callback) {
    try {
      AsyncStorage.removeItem(this.sessionKey, error => callback(error));
    } catch (error) {
      console.log('Error while removing session', error);
    }
  }

  saveInLocalDB(key, dataToSave, callback) {
    try {
      AsyncStorage.setItem(key, JSON.stringify(dataToSave), error =>
        callback(error),
      );
      callback(false);
    } catch (error) {
      console.log('Error while setting session', error);
    }
  }

  async getSavedItemFromDB(key) {
    const itemGot = await AsyncStorage.getItem(key);
    if (itemGot !== null) {
      return JSON.parse(itemGot);
    }
    return null;
  }

  isLogin = () => !!AsyncStorage.getItem(this.sessionKey);
}

export default new LocalDb();
