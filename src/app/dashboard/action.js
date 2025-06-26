"use server";

import { getSession } from "@/services/session";
import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function createEventAction(formData) {
    const title = formData.get("title");
    const content = formData.get("content");
    const place = formData.get("place");
    const time = formData.get("time");

    // validasi
    const session = await getSession();

    await prisma.event.create({
        data: {
            title,
            content,
            place,
            time,
            userId: session.user.id,
        },
    });

    revalidatePath("/dashboard");
}
