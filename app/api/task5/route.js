import { NextResponse } from "next/server";

export async function POST(req){
    const {userAnswer} = await req.json();
    const correctAnswer = "h e l l o , h o w a r e y o u . i a m u n d e r t h e w a t e r p l e a s e h e l p m e . h e r e t o o m u c h r a i n i n g u w w w";
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