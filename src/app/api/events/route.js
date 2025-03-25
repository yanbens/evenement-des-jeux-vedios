import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
// GET: Récupérer tous les événements
export async function GET(req) {
try {
const events = await prisma.event.findMany();
return Response.json(events, { status: 200 });
} catch (error) {
return Response.json(
{ message: "Erreur interne du serveur" },
{ status: 500 }
);
}
};

// POST: Ajouter un nouvel événement
export async function POST(req) {
    try {
    const body = await req.json();
    const { date, title, location, description, imageUrl } = body;
    const event = await prisma.event.create({
    data: { date, title, location, description, imageUrl },
    });
    return NextResponse.json(event, { status: 201 });
    } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
    { message: "Erreur interne du serveur" },
    { status: 500 }
    );
    }};