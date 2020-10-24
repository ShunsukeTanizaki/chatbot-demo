import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
admin.initializeApp(); // 初期化
const db = admin.firestore();

export const addDataset = functions.https.onRequest(async (req: any, res: any, ) => {
    
})
