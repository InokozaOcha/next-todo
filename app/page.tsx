"use client";
import SignInGoogle from "@/componets/SignInGoogle";
import SignOutButton from "@/componets/SignOutButton";

const Home = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignInGoogle />
    </main>
  );
};

export default Home;
