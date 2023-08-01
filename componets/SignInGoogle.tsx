import useAuth from "@/hooks/useAuth";
import SignOutButton from "./SignOutButton";
import Link from "next/link";

const SignInGoogle = () => {
  const { signInWithGoogle, error, profileFromGoogle } = useAuth();

  return (
    <div>
      {error && <p>{error}</p>}
      {typeof profileFromGoogle.name !== "undefined" ? (
        <div>
          <div>{profileFromGoogle.name}</div>
          <img src={profileFromGoogle.avatarUrl} />
          <Link href={"/todo"}>todoリストへ</Link>
          <SignOutButton />
        </div>
      ) : (
        <>
          <div>ログインしてません</div>
          <button onClick={signInWithGoogle}>Googleでサインインする</button>
        </>
      )}
    </div>
  );
};

export default SignInGoogle;
