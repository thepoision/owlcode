import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, MessageSquare, Compass } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bangkok Travel Assistant",
  description: "Your AI-powered guide to exploring Bangkok, Thailand",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b">
          <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              Bangkok Guide
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/explore">
                <Button variant="ghost" className="flex items-center gap-2">
                  <Compass className="w-4 h-4" />
                  Explore
                </Button>
              </Link>
              <Link href="/chat">
                <Button variant="ghost" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Chat
                </Button>
              </Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="border-t mt-20">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-4">About</h3>
                <p className="text-muted-foreground">
                  Your AI-powered guide to exploring Bangkok, Thailand. Get personalized recommendations and travel tips.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/explore" className="text-muted-foreground hover:text-foreground">
                      Explore Bangkok
                    </Link>
                  </li>
                  <li>
                    <Link href="/chat" className="text-muted-foreground hover:text-foreground">
                      Chat with AI
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <p className="text-muted-foreground">
                  Have questions? Chat with our AI assistant for instant help.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
              <p>© 2024 Bangkok Travel Assistant. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
