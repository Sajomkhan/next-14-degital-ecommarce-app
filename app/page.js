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

  return (
    <main>
      <Hero />
      <button
        onClick={signIn}
        className="bg-primary text-gray-100 p-4 px-6 text-lg rounded-lg hover:bg-primaryDeep shadow-lg"
      >
        <div className="flex gap-2 items-center align-middle">
          Login With Google
        </div>
      </button>
    </main>
  )
}
