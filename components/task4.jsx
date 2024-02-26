"use client";
import {useState} from 'react';

const Task4 = ({ taskanswers, setTaskAnswers, step, handleIncrementStep }) => {
    const [validationResults, setValidationResults] = useState({
        answer1: false,
        answer2: false,
        answer3: false
    });

    const [isLoading, setIsLoading] = useState(false);
    const soloCheck = async(userAnswer, tag) => {
        try{
            const response = await fetch("/api/task4", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userAnswer, tag }),
            });
            if(response.ok){
                const data = await response.json();
                alert(data.message);
                if(data.message == "Correct answer."){
                    switch(tag){
                        case 1:
                            setValidationResults({...validationResults, answer1: true});
                            break;
                        case 2:
                            setValidationResults({...validationResults, answer2: true});
                            break;
                        case 3:
                            setValidationResults({...validationResults, answer3: true});
                            break;
                    }
                }
            }
        }catch(error){
            alert("An error occurred. Please try again.");
        }
    };


    const handleCheck = async() => {
        const userAnswer1 = taskanswers.task4_1;
        const userAnswer2 = taskanswers.task4_2;
        const userAnswer3 = taskanswers.task4_3;

        setIsLoading(true); // Set loading state to true
        try{
            const response = await fetch("/api/task4all", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userAnswer1, userAnswer2, userAnswer3 }),
            });
            if(response.ok){
                const data = await response.json();
                alert(data.message);
                if(data.message === "All answers are correct. You have unlocked the next level."){
                    handleIncrementStep();
                }
            }
        }catch(error){
            alert("An error occurred. Please try again.");
        }finally{
            setIsLoading(false);
        }
    };

    return (
        <div className='task1 '>
            <center>
            <p className='bg-black leading-4 p-3 w-3/4 mt-2 bg-opacity-50 text-white text-sm'>
            In the whimsical forest of Mystoria, a wizard named Oliver turned his friend Benjamin into a frog by mistake. After reversing the spell, a hen named Emily accidentally transformed into a peacock when she touched Oliver&apos;s wand. As the forest creatures marveled at the magical mishaps, a mysterious riddle echoed through the trees, hinting at the true nature of their enchanting transformations.
            </p>
            </center>
            <div className='flex flex-col'>
            <div className="flex flex-col  items-center">
            <p className='text-xs' style={{fontSize:'12px',letterSpacing:'0',lineHeight:'0'}}>33 37 20 34 32 20 32 30 20 33 33 20 33 34 20 32 30 20 33 33 20 33 30 20 32 30 20 33 33 20 33 34 20 32 30 20 33 35 20 34 36 20 32 30 20 33 36 20 33 36 20 32 30 20 33 36 20 34 33 20 32 30 20 33 36 20 33 31 20 32 30 20 33 36 20 33 37 20 32 30 20 33 35 20 34 36 20 32 30 20 33 36 20 34 35 20 32 30 20 33 36 20 34 36 20 32 30 20 33 37 20 33 34 20 32 30 20 33 35 20 34 36 20 32 30 20 33 36 20 33 36 20 32 30 20 33 36 20 34 36 20 32 30 20 33 37 20 33 35 20 32 30 20 33 36 20 34 35 20 32 30 20 33 36 20 33 34 20 32 30 20 33 35 20 34 36 20 32 30 20 33 36 20 33 32 20 32 30 20 33 37 20 33 35 20 32 30 20 33 37 20 33 34 20 32 30 20 33 35 20 34 36 20 32 30 20 33 37 20 33 39 20 32 30 20 33 36 20 34 36 20 32 30 20 33 37 20 33 35 20 32 30 20 33 35 20 34 36 20 32 30 20 33 36 20 33 33 20 32 30 20 33 36 20 33 31 20 32 30 20 33 36 20 34 35 20 32 30 20 33 35 20 34 36 20 32 30 20 33 36 20 33 34 20 32 30 20 33 36 20 34 36 20 32 30 20 33 35 20 34 36 20 32 30 20 33 36 20 33 32 20 32 30 20 33 36 20 33 35 20 32 30 20 33 37 20 33 34 20 32 30 20 33 37 20 33 34 20 32 30 20 33 36 20 33 35 20 32 30 20 33 37 20 33 32 20 32 30 20 33 37 20 34 34 20 32 30 20 33 30 20 34 31</p>
                <input
                    className="mt-6 mb-6 peer h-full w-1/3 rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:brder-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50 inputfield"
                    type='text'
                    // placeholder='Flag 1'
                    required
                    value={taskanswers.task4_1}
                    onChange={(event) => setTaskAnswers({ ...taskanswers, task4_1: event.target.value })}
                />
                <button className="button-54 w-1/8" disabled={validationResults.answer1} onClick={() => {
                    soloCheck(taskanswers.task4_1, 1);
                }}>Check</button>
            </div>
            <br />
            <div className="flex flex-col  items-center">
            <p className='text-xs mt-0' style={{fontSize:'12px',letterSpacing:'0',lineHeight:'0'}}>37 42 20 35 37 20 36 38 20 37 39 20 35 46 20 37 33 20 36 46 20 35 46 20 37 33 20 36 35 20 37 32 20 36 39 20 36 46 20 37 35 20 37 33 20 35 46 20 37 37 20 36 38 20 36 35 20 36 45 20 35 46 20 37 39 20 36 46 20 37 35 20 35 46 20 36 38 20 36 31 20 37 36 20 36 35 20 35 46 20 37 34 20 36 38 20 36 39 20 37 33 20 35 46 20 36 36 20 36 43 20 36 31 20 36 37 20 37 44 20 30 41</p>
                <input
                    type='text'
                    className="mt-6 mb-6 peer h-full w-1/3 rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:brder-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50 inputfield"
                    // placeholder='Flag 2'
                    required
                    value={taskanswers.task4_2}
                    onChange={(event) => setTaskAnswers({ ...taskanswers, task4_2: event.target.value })}
                />
                <button className="button-54 w-1/8" disabled={validationResults.answer2} onClick={() => {
                    soloCheck(taskanswers.task4_2, 2);
                }}>Check</button>
            </div>
            <br />
            <div className="flex flex-col  items-center">
            <p className='text-xs mt-0' style={{fontSize:'12px',letterSpacing:'0',lineHeight:'0'}}>33 36 20 33 38 20 32 30 20 33 37 20 33 34 20 32 30 20 33 37 20 33 34 20 32 30 20 33 37 20 33 30 20 32 30 20 33 37 20 33 33 20 32 30 20 33 33 20 34 31 20 32 30 20 33 32 20 34 36 20 32 30 20 33 32 20 34 36 20 32 30 20 33 37 20 33 34 20 32 30 20 33 36 20 33 39 20 32 30 20 33 36 20 34 35 20 32 30 20 33 37 20 33 39 20 32 30 20 33 37 20 33 35 20 32 30 20 33 37 20 33 32 20 32 30 20 33 36 20 34 33 20 32 30 20 33 32 20 34 35 20 32 30 20 33 36 20 33 33 20 32 30 20 33 36 20 34 36 20 32 30 20 33 36 20 34 34 20 32 30 20 33 32 20 34 36 20 32 30 20 33 33 20 33 35 20 32 30 20 33 37 20 33 38 20 32 30 20 33 33 20 33 32 20 32 30 20 33 36 20 33 32 20 32 30 20 33 36 20 33 33 20 32 30 20 33 37 20 33 37 20 32 30 20 33 36 20 34 31 20 32 30 20 33 37 20 33 39</p>
                <input
                    type='text'
                    className="mt-6 mb-6 peer h-full w-1/3 rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:brder-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50 inputfield"
                    // placeholder='Flag 3'
                    required
                    value={taskanswers.task4_3}
                    onChange={(event) => setTaskAnswers({ ...taskanswers, task4_3: event.target.value })}
                />
                <button className="button-54 w-1/8" disabled={validationResults.answer3} onClick={() => {
                    soloCheck(taskanswers.task4_3, 3);
                }}>Check</button>
            </div>
            </div>
            <br />
            <div className='flex flex-col  items-center'>
            <button className='button-54 mt-3 mb-3 left-0' onClick={handleCheck} disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Check All'}
            </button>
            <div className='mt-6'></div>
            <button className="fixed top-96 left-36 p-2 rounded-lg text-transparent cursor-not-allowed" onClick={() => alert('It is not about the magic, my friends, but the unexpected conversions that bring surprises in the end.')}>
                 Hint
            </button>

            </div>
        </div>
    );

};
export default Task4;
