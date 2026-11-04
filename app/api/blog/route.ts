import { NextRequest, NextResponse } from "next/server"

export async function GET(){
    console.log("Blog GET Hit")
    return NextResponse.json({msg:"API Working"})
}