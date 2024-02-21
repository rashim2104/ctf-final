import { NextResponse } from "next/server";

export async function POST(req){
    const {userAnswer , tag} = await req.json();
    const answers=["1","2","3"];
    try{
        if(tag===3 && userAnswer === "https://tinyurl.com/5x2bcwjy"){
            return NextResponse.json({ message: "Got rickrolled? 😂 Each step is Important dude :)" }, { status: 200 });
        }
        if (userAnswer === answers[tag-1]) {
            return NextResponse.json({ message: "Correct answer." }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Incorrect answer. Please try again." }, { status: 200 });
        }
    } catch (error) {
        return NextResponse.json({ message: "An error occurred. Please try again." }, { status: 500 });
    }
}