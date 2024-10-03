import products from "@/app/data/products";
import { New_Tegomin } from "next/font/google";
import { NextResponse } from "next/server";

export async function POST(req, res) {

    try {
        const data = await req.json();

        return NextResponse.json({ message: 'OK', products});
        
        } catch (error) {

            return NextResponse.json({ message: 'OK', products});

        }  
        
    };