import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
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
        const { id } = await params; // `params` est asynchrone dans l'App Router
        const eventId = Number(id); // Convertir l'ID en nombre
        // Vérifier si l'ID est valide
        if (isNaN(eventId)) {
        return NextResponse.json(
        { message: "ID d'événement invalide" },
        { status: 400 }
        );
        }
        // Chercher l'événement par son ID
        const event = await prisma.event.findUnique({
        where: { id: eventId },
        });
        // Vérifier si l'événement existe
        if (!event) {
        return NextResponse.json(
        { message: "Événement non trouvé" },
        { status: 404 }
        );
        }
        // Retourner l'événement trouvé
        return NextResponse.json(event, { status: 200 });
        } catch (error) {
        return NextResponse.json(
        { message: "Erreur interne du serveur", error: error.message },
        { status: 500 }
        );
        }}