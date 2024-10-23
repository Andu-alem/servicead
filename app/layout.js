//import { Inter } from "next/font/google";
import "./globals.css";
import {Provider} from './provider';

export const metadata = {
  title: "Services Advertisment",
  description: "Advertise and make your service available",
};

export default function RootLayout({ children }) {
  return (
    <Provider>
      <html>
        <body>
        <main>
            <div className="">
                {children}
            </div>
        </main>
        </body>
      </html>  
    </Provider>
  )
}
