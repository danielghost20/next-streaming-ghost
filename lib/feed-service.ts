import { getSelf } from "./auth-service";
import { db } from "./db";

export async function getStreams() {
  let userId;

  try {
    const self = await getSelf();
    userId = self.id;
  } catch {
    userId = null;
  }

  let streams = [];

  if (userId) {
    streams = await db.stream.findMany({
      where: {
        user: {
          NOT: {
            blocking: {
              some: {
                blockedId: userId,
              },
            },
          },
        },
      },

      select: {
        thumbnaiUrl: true,
        name: true,
        isLive: true,
        user: true,
        id: true
      },
      orderBy: [
        {
          isLive: "desc",
        },
        {
          updatedAt: "desc",
        },
      ],
    });
  } else {
    streams = await db.stream.findMany({
      select: {
        thumbnaiUrl: true,
        name: true,
        isLive: true,
        user: true,
        id: true
      },
      orderBy: [
        {
          isLive: "desc",
        },
        {
          updatedAt: "desc",
        },
      ],
    });
  }

  return streams;
}
