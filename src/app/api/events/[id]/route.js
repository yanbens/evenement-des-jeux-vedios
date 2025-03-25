import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function DELETE(req, { params }) {
try {
const { id } = params;
// Vérifier si l'événement existe
const event = await prisma.event.findUnique({
where: { id: Number(id) },
});
if (!event) {
return Response.json(
{ message: "Événement non trouvé" },
{ status: 404 }
);
}
// Supprimer l'événement
await prisma.event.delete({
where: { id: Number(id) }, });
return Response.json({ message: "Événement supprimé avec succès" });
} catch (error) {
return Response.json(
{ message: "Erreur interne du serveur", error: error.message },
{ status: 500 }
); }
}

export async function PUT(req, { params }) {
    try {
    const { id } = params;
    const body = await req.json();
    const { date, title, location, description, imageUrl } = body;
    // Vérifier si l'événement existe
    const event = await prisma.event.findUnique({
    where: { id: Number(id) },
    });
    if (!event) {
    return Response.json(
    { message: "Événement non trouvé" },
    { status: 404 }
    );
    }
    // Mettre à jour l'événement
    const updatedEvent = await prisma.event.update({
    where: { id: Number(id) },
    data: { date, title, location, description, imageUrl },
    });
    return Response.json(updatedEvent, { status: 200 });
    } catch (error) {
    return Response.json(
    { message: "Erreur interne du serveur", error: error.message },
    { status: 500 }
    );
    }}
    export async function GET(req, { params }) {
        try {
        const { id } = params;
        // Chercher l'événement par son ID
        const event = await prisma.event.findUnique({
        where: { id: Number(id) },
        });
        // Vérifier si l'événement existe
        if (!event) {
        return Response.json(
        { message: "Événement non trouvé" },
        { status: 404 }
        );
        }
        // Retourner l'événement trouvé
        return Response.json(event, { status: 200 });
        } catch (error) {
        return Response.json(
        { message: "Erreur interne du serveur", error: error.message },
        { status: 500 }
        );
        }
        }
            