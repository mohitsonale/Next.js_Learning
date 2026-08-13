import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navigation from "../component/Navigation";




export default function RootLayout({children}) {
  return (
    <>
        <Navigation />
        {children}
      
    </>
 
  ); 
}
