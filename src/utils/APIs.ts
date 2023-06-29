import { Credentials } from './types';
// import { initializeApp } from 'firebase/app';
import { initializeApp } from 'firebase/app';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore/lite';
// import { collection, getFirestore } from 'firebase/firestore/lite';

//! ==================================

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAtvAxhpPCtrvPsz3Gj0JZ5wKnVSRcsX6A',
  authDomain: 'vanlife-c325a.firebaseapp.com',
  projectId: 'vanlife-c325a',
  storageBucket: 'vanlife-c325a.appspot.com',
  messagingSenderId: '558455658844',
  appId: '1:558455658844:web:ec480792850343f4a00999',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);

// const vansCollection = collection(db, 'vans');

/* export const fetchvans = async (id: string | undefined = undefined) => {
  const querySnapshot = await getDocs(vansCollection);
  const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));

  console.log(data);
  return data;
};
 */
//! =================================

//?==========================================

const app2 = initializeApp(firebaseConfig);

const db2 = getFirestore(app2);

export const _fireBase_fetch_vans = async () => {
  const myVans = collection(db2, 'vans');
  const vansSnap = await getDocs(myVans);
  const data = vansSnap.docs.map(van => ({ ...van.data() }));

  return data;
};

export const _fireBase_fetch_van = async (id: string) => {
  const van = doc(db2, 'vans', id);
  const vanSnap = await getDoc(van);
  const data = vanSnap.data();

  return data;
};

export const _fireBase_fetch_host_vans = async () => {
  const myVans = collection(db2, 'vans');
  const q = query(myVans, where('hostId', '==', '123'));
  const vansSnap = await getDocs(q);
  const data = vansSnap.docs.map(van => ({ ...van.data() }));

  return data;
};

//?==========================================

export const fetchVans = async (id: string | undefined = undefined) => {
  const URL = id ? `/api/vans/${id}` : '/api/vans';
  const res = await fetch(URL);
  const { vans } = await res.json();
  return vans;
};

export const fetchHostVans = async (id: string | undefined = undefined) => {
  const URL = id ? `/api/host/vans/${id}` : '/api/host/vans';
  const res = await fetch(URL);
  const { vans } = await res.json();
  return vans;
};

export async function loginUser(creds: Credentials) {
  const res = await fetch('/api/login', {
    method: 'post',
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
