import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ruan | Persoanal Portfolio",
  description:
    "Ruan Queiroz Leite is a Full stack Software Engineer with 6+ years of expercience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50  text-gray-950
      h-[5000px]`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] 
        -z-10 h-[31.25rem] w-[31.25] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[35rem] 
        -z-10 h-[31.25rem] w-[31.25] rounded-full blur-[10rem] sm:w-[68.75rem] 
        md:left-[-33rem] lg:left-[-18rem] xl:left-[-15] 2x1:left-[-5rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
