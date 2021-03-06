import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const config={
    apiKey: "AIzaSyApGy0288WjHiBE8UuKv8o_Xthb6agFrDQ",
    authDomain: "crwn-db-4edd9.firebaseapp.com",
    projectId: "crwn-db-4edd9",
    storageBucket: "crwn-db-4edd9.appspot.com",
    messagingSenderId: "366939227906",
    appId: "1:366939227906:web:6a18a51934b4e3c04d241b",
    measurementId: "G-M1XHPNMZNH"
  };
  export const createUserProfileDocument = async (userAuth,additionalData)=>{
    if (!userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot= await userRef.get();
    if(!snapShot.exists){
      const {displayName,email}=userAuth;
      const createdAt=new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      }catch(error){
        console.log('error creating user' , error.message);
      }


    }
    return userRef
  }

export const addCollectionAndDocuments= async (collectionKey,objectsToAdd)=>{
  const collectionRef=firestore.collection(collectionKey);
  
  const batch=firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef=collectionRef.doc();
    batch.set(newDocRef,obj)
  });
 
  return await batch.commit()

}

export const convertCollectionsSnapshotToMap=(collectionsSnapshot)=>{
  const transformedCollection=collectionsSnapshot.docs.map(doc=>{
    const {title,items}=doc.data()

    return {
      routeName:encodeURI(title.toLowerCase()),
      id:doc.id,
      title,
      items
    }
  })
  return transformedCollection.reduce((accumulator,collection)=>{
    accumulator[collection.title.toLowerCase()]=collection
    return accumulator
  },{})
}

  export const getCurrentUser=()=>{
    return new Promise((resolve,reject)=>{
      const unsubscribe=auth.onAuthStateChanged(userAuth=>{
        unsubscribe()
        resolve(userAuth)
      },reject)
    })
  }

  firebase.initializeApp(config);
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  export const googleProvider=new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(googleProvider);

  export default firebase;