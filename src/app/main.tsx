import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import "./index.css";
import { AuthProvider } from "./providers/AuthProvider";
import { MotionProvider } from "./providers/MotionProvider";
import { RouterProvider } from "./providers/RouterProvider";
import { StoreProvider } from "./providers/StoreProvider";
import { Router } from "./router";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCHsajJKanf6FXiric12oaTDn8tbvzmBbk",
  authDomain: "social-network-cc63e.firebaseapp.com",
  projectId: "social-network-cc63e",
  storageBucket: "social-network-cc63e.firebasestorage.app",
  messagingSenderId: "609025659619",
  appId: "1:609025659619:web:e2c8c8815f325ea4816bd6",
  measurementId: "G-J9SLQCJDG4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MotionProvider>
      <RouterProvider>
        <StoreProvider>
          <AuthProvider>
            <Router />
            <Toaster position="top-center" closeButton />
          </AuthProvider>
        </StoreProvider>
      </RouterProvider>
    </MotionProvider>
  </StrictMode>,
);
