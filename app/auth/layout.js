import Header from './Header'

export const metadata = {
    title: "User Authentication",
    description: "Business registration form",
  };
  
  export default function RootLayout({ children }) {
    return (
      <main className="min-h-screen">
          <Header />
          <div className="py-2">
              { children }
          </div>
      </main>
    );
  }
  