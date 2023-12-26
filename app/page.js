"use client"
import Image from 'next/image'
import Hero from './_components/Hero'
import { initFirebase } from '@/firebase'
import { useRouter } from "next/navigation";
import { getAuth, GoogleAuthProvider, signInWithPopup, signIn} from "firebase/auth"

export default function Home() {
  const app = initFirebase()
  const auth = getAuth(app)
  const router = useRouter();
  const googleAuthProvider = new GoogleAuthProvider()

  const signIn = async () => {
    const result = await signInWithPopup(auth, googleAuthProvider)
    const user = result.user

    if(user){
      router.push("/products");
    }
  }

  const rightArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  );

  return (
    <main>
      <Hero />
      <button
        onClick={signIn}
        className="bg-primary text-gray-100 p-4 px-6 text-lg rounded-lg hover:bg-primaryDeep shadow-lg"
      >
        <div className="flex gap-2 items-center align-middle">
          Login With Google {rightArrow}
        </div>
      </button>
    </main>
  )
}
