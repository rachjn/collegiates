import { AuthPanel } from "@/app/components/authPanel";
import { Button } from "@/app/components/button";

export default function Register() {
  return (
    <>
      <div
        id="bg-component"
        className="bg-secondary h-screen w-full skew-y-6 absolute -top-[50vh] left-0 -z-20"
      ></div>
      <AuthPanel title="Register">
        <Button>Sign In</Button>
      </AuthPanel>
    </>
  );
}
