import ArrowLeftIcon from '@heroicons/react/24/solid/ArrowLeftIcon'
import Header from './components/Header.jsx'

export const metadata = {
  title: "Business Registration",
  description: "Business registration form",
};

export default function RootLayout({ children }) {
  return (
    <main className="min-h-screen">
        <Header />
        <div className="py-12">
            { children }
        </div>
    </main>
  );
}
