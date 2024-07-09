import Image from "next/image";
import { Button } from "./_components/ui/button";
import AuthSigninButton from "./_components/authSigninButton";

import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <main className={`${font.className} flex min-h-screen flex-col items-center justify-center
     bg-[#07CBFF] bg-[radial-gradient(at_center_top,_#07CBFF,_#012BFF)]`}>
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          🔐 Auth
        </h1>
        <p className="text-white text-lg">
          A Simple authenication
        </p>
      </div>
      <AuthSigninButton />
    </main>
  );
}
