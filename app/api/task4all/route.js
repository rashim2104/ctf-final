import { NextResponse } from "next/server";

export async function POST(req){
    const {userAnswer1 , userAnswer2 , userAnswer3} = await req.json();
    const answers=["{404_flag_not_found_but_you_can_do_better}","{Why_so_serious_when_you_have_this_flag}","36 38 20 37 34 20 37 34 20 37 30 20 37 33 20 33 41 20 32 46 20 32 46 20 37 34 20 36 39 20 36 45 20 37 39 20 37 35 20 37 32 20 36 43 20 32 45 20 36 33 20 36 46 20 36 44 20 32 46 20 33 35 20 37 38 20 33 32 20 36 32 20 36 33 20 37 37 20 36 41 20 37 39"];
    try{
        if (userAnswer1 === answers[0] && userAnswer2 === answers[1] && userAnswer3 === answers[2]) {
            return NextResponse.json({ message: "All answers are correct. You have unlocked the next level." }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Some answers are incorrect. Please try again." }, { status: 200 });
        }
    } catch (error) {
        return NextResponse.json({ message: "An error occurred. Please try again." }, { status: 500 });
    }
}