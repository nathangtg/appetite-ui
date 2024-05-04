import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">{children}</div>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <div className="max-w-7xl mx-auto">
          <p>&copy; 2024 Appetite Connect. All rights reserved.</p>
          <p>
            <Link href="/privacy-policy">Privacy Policy</Link>|
            <Link href="/terms-of-service">Terms of Service </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
