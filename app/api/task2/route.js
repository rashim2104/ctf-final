import { NextResponse } from "next/server";

export async function POST(req){
    const {userAnswer , tag} = await req.json();
    const answers=["{fl4g_in_HTM1}","{I_W0nder_H0w}","3"];
    try{
        if (userAnswer === answers[tag-1]) {
            return NextResponse.json({ message: "Correct answer." }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Incorrect answer. Please try again." }, { status: 200 });
        }
    } catch (error) {
        return NextResponse.json({ message: "An error occurred. Please try again." }, { status: 500 });
    }
}