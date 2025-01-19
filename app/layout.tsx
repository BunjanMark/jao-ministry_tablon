import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            (
            <footer
              className="w-full flex flex-col items-center justify-center py-8"
              style={{ backgroundColor: "#93c3f3" }}
            >
              {/* Contact Section */}
              <div className="text-center mb-4">
                <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                <p className="text-lg mb-4">
                  Feel free to reach out for any inquiries or partnerships.
                </p>
                <a
                  href="mailto:jaomtablon@gmail.com"
                  className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-400 transition duration-300"
                >
                  Email Us
                </a>
              </div>

              {/* Footer Copyright and Powered By Section */}
              <div className="text-center mb-4">
                <p>&copy; 2025 JAO-Ministry Tablon. All Rights Reserved.</p>
              </div>

              <div className="text-center flex items-center gap-1">
                <span className="text-gray-700">Powered by</span>
                <Link
                  isExternal
                  className="text-blue-600"
                  href="https://www.facebook.com/Notsosho/"
                  title="MarkVincentBunjan FBpage"
                >
                  MarkVincentBunjan
                </Link>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
