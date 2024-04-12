import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getStorage, connectStorageEmulator } from "firebase/storage";


export const firebaseConfig = {
	projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
	appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
	storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
	locationId: import.meta.env.VITE_APP_FIREBASE_LOCATION_ID,
	apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
	messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
};


export const getFirebaseConfig = () => {
	return firebaseConfig
}

export function firebaseEmulate() {
  if (shouldUseEmulators()) {
    startEmulation()
  }
}

const shouldUseEmulators = () => {
	const environmentEmulators = 'TRUE' == import.meta.env.VITE_FIREBASE_LOCAL_EMULATORS
	const hasAppId = firebaseConfig.appId
	return environmentEmulators || !hasAppId
}

function startEmulation() {
    const db = getFirestore();
    connectFirestoreEmulator(db, "127.0.0.1", 8080);

    const auth = getAuth();
    connectAuthEmulator(auth, "http://127.0.0.1:9099");

    const storage = getStorage();
    connectStorageEmulator(storage, "127.0.0.1", 9199);
}
