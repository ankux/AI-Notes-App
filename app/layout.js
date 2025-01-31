import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Outfit} from "next/font/google"
import Provider from "./Provider";
import { ClerkProvider } from "@clerk/nextjs";


export const metadata = {
  title: "AI Notes App",
  description: "Take notes from PDF with AI",
};

const outfit = Outfit({subsets:['latin']})

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={outfit.className}
          >
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
