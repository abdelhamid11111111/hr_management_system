import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import Department from "@/app/departments/page";



export async function POST(req: Request){
    try{
    const {form} = await req.json()

    if (
    !form ||
    !form.name ||
    !form.location
    ) {
      return NextResponse.json({ error: 'Please fill in all required fields' }, { status: 400 });
    }


    const DepartmentCreated = await prisma.department.create({
        data: {
            name: form.name.trim(),
            location: form.location.trim(),
        }
    })
    return NextResponse.json(DepartmentCreated, {status: 201})
    } catch(error){
        console.error('server error', error);
        return NextResponse.json({error: 'server error POST'}, {status: 500})
    }
}


export async function GET(){
    try{
        const Departments = await prisma.department.findMany({
            orderBy: {
                id: 'desc'
            }
        })
        return NextResponse.json(Departments, {status: 200})
    } catch(error){
        console.error('server error', error);
        return NextResponse.json({error: 'server error GET'}, {status: 500})
    }
}