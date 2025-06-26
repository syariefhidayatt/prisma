import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginAction } from "./action";

export default async function Home() {
  return (
    <div>
      <form action={loginAction}>
        <Input name="email" placeholder="Email" type="email" />
        <Input name="password" placeholder="Password" type="password" />
        <Button>Login</Button>
      </form>
    </div>
  );
}
