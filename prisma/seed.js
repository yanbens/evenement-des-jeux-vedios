const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function main() {
await prisma.event.createMany({
data: [
{
 date: "17 until 21 march, 2025 | 10:00 am",
 title: "Game developpers conferance 2025",
 location: "San francisco, USA",
 description: "Une conférence annuelle regroupant les professionels du devellopement des jeux vidéo .",
 imageUrl: "/events/events_1.jpg"
	},
	
],
});
console.log("Events added successfully!");
}
main()
.catch((e) => console.error(e))
.finally(async () => {
await prisma.$disconnect();
});
