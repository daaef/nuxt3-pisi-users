import { initializeApp } from "firebase/app"
import {getMetadata, getStorage, ref, uploadString, getDownloadURL, uploadBytesResumable} from "@firebase/storage";
import {snapshot} from "unstorage";
import {download} from "@formkit/icons";

const firebaseConfig =  {
    apiKey: "AIzaSyAgml-m9aVxfhUqct95AIk6WvYTgj8t-4w",
    authDomain: "pisi-exchange.firebaseapp.com",
    projectId: "pisi-exchange",
    storageBucket: "pisi-exchange.appspot.com",
    messagingSenderId: "929551764701",
    appId: "1:929551764701:web:6387602bd3900b08f99f34",
    measurementId: "G-Y38KXY2DCZ"
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

export const saveFile = async (fullPath: any, file: any) => {
    const storageRef = ref(storage, fullPath)
    const snapshot = await uploadBytesResumable(storageRef, file)


    if(snapshot) {
        // @ts-ignore
        const downloadURL = await getDownloadURL(snapshot?.ref)
        return {
            downloadURL
        }
    }
}

export const uploadFile = async (file: any, fileName: any) => {
    return await new Promise(function (resolve, reject){
        // @ts-ignore
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = async (e) => {
            const result = reader.result;
            // @ts-ignore
            const { downloadURL } = await saveFile(`/kyc_uploads/${fileName}`, file)
            return resolve(downloadURL)
        }
    })
}

console.log(app)