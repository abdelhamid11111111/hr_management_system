import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { PrismaClientExtends } from "@prisma/client/extension";



export async function POST(req: Request) {
  try {
    const { form } = await req.json();

    if (
    !form ||
    form.name.trim() === '' ||
    form.department == null ||       // allows 0
    form.phone.trim() === '' ||
    form.salary == null ||           // allows 0
    form.email.trim() === '' ||
    !form.profilePic
    ) {
    return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
    );
    }

    // Check phone uniqueness
    const existingPhone = await prisma.employee.findUnique({
      where: { phone: form.phone.trim() },
    });
    if (existingPhone) {
      return NextResponse.json(
        { error: "Phone number already exists" },
        { status: 400 }
      );
    }

    // Check email uniqueness
    const existingEmail = await prisma.employee.findUnique({
      where: { email: form.email.trim() },
    });
    if (existingEmail) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    // ✅ Create employee with department relation included
    const EmployeeCreated = await prisma.employee.create({
      data: {
        name: form.name.trim(),
        department: {
          connect: { id: parseInt(form.department, 10) }, // make sure department is a number
        },
        phone: form.phone.trim(),
        salary: Number(form.salary), // parseInt not needed if it's already a number
        email: form.email.trim(),
        profilePic: form.profilePic,
      },
      include: {
        department: true, // 👈 this makes department.name available in response
      },
    });

    return NextResponse.json(EmployeeCreated, { status: 201 });
  } catch (error) {
    console.error("server error", error);
    return NextResponse.json({ error: "server error POST" }, { status: 500 });
  }
}



export async function GET(){
    try{
        const fetchEmp = await prisma.employee.findMany({
            orderBy: {
                id: 'desc'
            },
            include: {
                department: {
                    select: { name: true }
                }
            }
        })
        return NextResponse.json(fetchEmp, {status: 500})
    }catch(error){
        console.error('server error', error);
        return NextResponse.json({error: 'server error GET'}, {status: 500})
    }
}