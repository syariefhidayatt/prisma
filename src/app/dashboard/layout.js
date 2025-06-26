import { Button } from "@/components/ui/button";
import { getSession } from "@/services/session";
import { logoutAction } from "../action";

export default async function Layout({ children }) {
    const session = await getSession();

    return (
        <div className="space-y-4">
            <header className="flex justify-between items-center p-4 border-b border-e-zinc-100">
                <div>Eventmaker</div>
                <div className="flex gap-4 items-center">
                    <div>{session.user.name}</div>
                    <form action={logoutAction}>
                        <Button>Logout</Button>
                    </form>
                </div>
            </header>

            <main className="max-w-4xl m-auto">{children}</main>
        </div>
    );
}
