import { NextResponse } from "next/server";
import {prisma} from "@/utils/prisma";


export async function GET(req) {
    try {
        const notesData = await prisma.notes.findMany({});
        return NextResponse.json({ 
            status: 200,
            message: "Notes Siap Bro",
            data: notesData,        
        });
   } catch (error) {
     return NextResponse.json({ 
        status: 500,
        message: "Internal server error",
        error,   
     });
          
    }
    
}

export function POST() {}

export function PATCH() {}

export function DELETE() {}

