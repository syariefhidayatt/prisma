import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createEventAction } from "./action";
import { prisma } from "@/utils/prisma";
import { getSession } from "@/services/session";

export default async function Page() {
    const events = await prisma.event.findMany();
    const session = await getSession();

    return (
        <div className="space-y-12">
            <form action={createEventAction}>
                <Input name="title" />
                <Textarea name="content" />
                <Input name="place" />
                <Input name="time" />
                <Button>Create Event</Button>
            </form>

            {session.user.role === "ADMIN" && (
                <div>
                    <section>
                        <h3> All Events</h3>
                    </section>
                    <section className="space-y-4">
                        {events.map((event) => {
                            return <div key={event.id}>{event.title}</div>;
                        })}
                    </section>
                </div>
            )}
        </div>
    );
}
