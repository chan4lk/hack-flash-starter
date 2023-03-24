// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { FuelRequest } from "./FuelRequest";
import { Vehicle } from "./Vehicle";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj7hliTwXtI-nLx2LdUWMcz-uz6qmr4aM",
  authDomain: "hackrealapp.firebaseapp.com",
  projectId: "hackrealapp",
  storageBucket: "hackrealapp.appspot.com",
  messagingSenderId: "974367933855",
  appId: "1:974367933855:web:fa2b31c0f9aab79744e9aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function registerVehicle(vehicle: Vehicle) {
  // Add a new document in collection "vehicles"
  const docRef = await addDoc(collection(db, "vehicle"), vehicle);
  return docRef;
}

export async function findVehicle(licensePlate: string) {
  // Add a new document in collection "vehicles"

  const q = query(
    collection(db, "vehicle"),
    where("licensePlate", "==", licensePlate)
  );

  const querySnapshot = await getDocs(q);

  const data = querySnapshot.docs[0]?.data() as Vehicle;

  console.log(data);

  return data;
}

export async function deleteAllVehicles() {
  const q = query(collection(db, "vehicle"));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((document) =>
    deleteDoc(doc(db, "vehicle", document.id))
  );
}

export async function deleteAllRequests() {
  const q = query(collection(db, "fuelRequest"));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((document) =>
    deleteDoc(doc(db, "fuelRequest", document.id))
  );
}
