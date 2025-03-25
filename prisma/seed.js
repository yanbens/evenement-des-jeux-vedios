import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.event.createMany({
    data: [
      {
        // Utilisation d'une date au format ISO-8601 valide
        date: new Date("2025-03-17T10:00:00Z"),
        title: "Game developers conference 2025",
        location: "San Francisco, USA",
        description: "Une conférence annuelle regroupant les professionnels du développement des jeux vidéo.",
        imageUrl: "/events/events_1.jpg"
      }
    ]
  });
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  });
