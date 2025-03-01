import { AuthPanel } from "@/app/components/authPanel";
import { Button } from "@/app/components/button";

export default function SignIn() {
  return (
    <>
      <div
        id="bg-component"
        className="bg-secondary h-screen w-full skew-y-6 absolute -top-[50vh] left-0 -z-20"
      ></div>
      <AuthPanel
        bottomLink="Register"
        bottomLabel="Don't have an account? "
        title="Sign In"
      >
        <Button isLink={true}>Register</Button>
      </AuthPanel>
    </>
  );
}
