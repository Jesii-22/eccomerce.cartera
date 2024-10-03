import products from "@/app/data/products";
import { New_Tegomin } from "next/font/google";
import { NextResponse } from "next/server";

export async function POST(req, res) {

    try {
        const data = await req.json();

        console.log ("DATA", data);
        
        return NextResponse.json({ message: 'OK', products});
        
        } catch (error) {

            return NextResponse.json({ message: 'OK', products});

        }  
        
    };

export async function POST() {
        try {
            return NextResponse.json ({ message: 'Ok', products });

        } catch (error) {
            return NextResponse.json ({ message: 'Error', products });
        }
    
};
    
