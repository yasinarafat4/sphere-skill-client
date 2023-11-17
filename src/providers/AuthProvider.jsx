import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // States
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchCourses, setSearchCourses] = useState("");
  const [getCourses, setGetCourses] = useState([]);

  // Create user functionality for Register
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login user functionality
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google sign in
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Logout user functionality
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Update user profile functionality
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //  Setting an observer to get the current user data
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);


  // Search functionality for Courses
  useEffect(() => {
    if (searchCourses) {
      fetch(`https://sphere-skill-server.vercel.app/courseSearch/${searchCourses}`)
        .then((res) => res.json())
        .then((data) => {
          setGetCourses(data);
          console.log("search data", data);
        });
    }
  }, [searchCourses]);

  // All Authentication Informations
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    updateUserProfile,
    getCourses,
    setSearchCourses,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
