import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";



export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }>}){
    try{
        const { id } = await params
        await prisma.employee.delete({
            where: { id: Number(id)}
        })
        return NextResponse.json({status: 500})
    } catch(error){
        console.error('server error', error);
        return NextResponse.json({error: 'server error DELETE'}, {status: 500})
    }
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }>}){
    try{
        const { id } = await params
        const employee = await prisma.employee.findUnique({
            where: { id: Number(id) }
        })
        return NextResponse.json(employee, {status: 200})
    } catch(error){
        console.error('server error', error);
        return NextResponse.json({status: 'server error GET for id'}, {status: 500})
    }
}