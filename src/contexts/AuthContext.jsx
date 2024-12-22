import { createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    sendPasswordResetEmail,
    onAuthStateChanged,
} from 'firebase/auth';

import { auth } from '../utils/firebase';

const AuthContext = createContext({
    user: null,
    registerWithEmail: () => {},
    loginWithEmail: () => {},
    loginWithGoogle: () => {},
    logout: () => {},
    resetPassword: () => {},
    updateUserProfile: () => {},
});

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const updateUserProfile = async (displayName, photoURL) => {
        if (auth.currentUser) {
            try {
                await updateProfile(auth.currentUser, { displayName, photoURL });
                const updatedUser = auth.currentUser;
                setUser({ ...updatedUser, displayName, photoURL });
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    const registerWithEmail = async (email, password, displayName, photoURL) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            setUser(user);
            updateUserProfile(displayName, photoURL);
            console.log('User:', user);
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    };

    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log('User:', user);
            setUser(user);
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    };

    const loginWithEmail = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('User:', user);
            setUser(user);
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    };

    const resetPassword = async email => {
        try {
            await sendPasswordResetEmail(auth, email);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const authContextValue = {
        user,
        updateUserProfile,
        registerWithEmail,
        loginWithGoogle,
        loginWithEmail,
        resetPassword,
        logout,
    };

    return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
