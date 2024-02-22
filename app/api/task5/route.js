import { NextResponse } from "next/server";

export async function POST(req){
    const {userAnswer} = await req.json();
    const correctAnswer = "10";
    try{
        if (userAnswer === correctAnswer) {
            return NextResponse.json({ message: "Correct answer. You have unlocked the next level." }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Incorrect answer. Please try again." }, { status: 200 });
        }
    } catch (error) {
        return NextResponse.json({ message: "An error occurred. Please try again." }, { status: 500 });
    }
}   