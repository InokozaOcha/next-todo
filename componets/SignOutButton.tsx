import useAuth from "@/hooks/useAuth";

const SignOutButton = () => {
  const { signOut } = useAuth();
  return <button onClick={signOut}>ログアウト</button>;
};

export default SignOutButton;
