
export const metadata = {
  title: "My Service",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
        <div className="min-h-screen">
            { children }
        </div>
  )
}
