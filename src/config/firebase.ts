import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const config = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING,
  appId: process.env.REACT_APP_APP_ID,
});

export const db = firebase.firestore();
export const auth = config.auth();

export class Database {
  static database = db.collection("users");

  static createUserDocument(uuid: string): void {
    this.database
      .doc(uuid)
      .set({
        lines: [],
        darkTheme: false,
      })
      .then(() => console.log("Document written succesfully"))
      .catch((e) => console.log(e));
  }

  static async getUserDocument(uuid: string): Promise<any> {
    return await this.database.doc(uuid).get();
  }
}
