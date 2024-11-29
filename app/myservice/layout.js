
export const metadata = {
  title: "My Service",
  description: "A single service page",
};

export default function RootLayout({ children }) {
  return (
      <div className="min-h-screen">
          { children }
      </div>
  )
}
