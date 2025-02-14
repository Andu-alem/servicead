//import { Inter } from "next/font/google";
import "./globals.css";
import {Provider} from './provider';
import { ServiceDataProvider } from './utils/context';


export const metadata = {
  title: "Services and Business Advertisment",
  description: "Advertise and make your service available",
};

export default function RootLayout({ children }) {
  return (
    <Provider>
      <ServiceDataProvider>
        <html>
          <body>
          <main>
              <div className="bg-white">
                  {children}
              </div>
          </main>
          </body>
        </html>  
      </ServiceDataProvider>
    </Provider>
  )
}
