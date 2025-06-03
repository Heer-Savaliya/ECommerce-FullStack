import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { auth, firestore } from "../firebaseConfig";

export const UserContext = createContext(); //Now UserContext works as a component

// Provider
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Hy");

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userRef = doc(firestore, "users", user.uid);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            setUserData(userSnap.data());
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUserData(null);
      }
      setLoading(false);
    });

    return () => unsubscribe(); //clean up
  }, []);

  return (
    <UserContext.Provider value={{ userData, loading }}>
      {/* provider is the property of the context component . Pass the value to the provider in double {{}} */}
      {children}
    </UserContext.Provider>
  );
};

//? Steps

//! 1. createContet();   (warehouse)
// export const BioContext = createContext();

//! 2. provider
// export const BioProvider = () =>{

// return <BioContext.Provider value={}>

// </BioContext.Provider>
// }

//! 3. Wrap
{
  /* <BioProvider> 
  <App />
</BioProvider> */
}
