"use client";
import {useState} from 'react';

const Task5 = ({ taskanswers, setTaskAnswers, step, handleIncrementStep }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleCheck = () => {
        const userAnswer = taskanswers.task5_1;
        setIsLoading(true); // Set loading state to true
        try{
            fetch("/api/task5", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userAnswer }),
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                if(data.message === "Correct answer. You have unlocked the next level."){
                    handleIncrementStep();
                }
            });
        }catch(error){
            alert("An error occurred. Please try again.");
        } finally {
            setIsLoading(false); // Reset loading state
        }
    };

    return (
        <div className='task1'>
            <center><p className='bg-black p-3 w-3/4 bg-opacity-50'>In the heart of a bustling city, a forgotten alleyway concealed a mysterious door. Curiosity led a young artist inside, where she discovered a hidden gallery showcasing surreal paintings of worlds beyond imagination. Leave all that,This audio was sent to me by my friend from chennai during last december decode it.</p></center>
            <center><audio src="/sources/morse.wav" controls className='mt-3'></audio></center>
            <div className='task-1'>
            <input
                className="mt-6 mb-6 peer h-full w-1/2 rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50 inputfield"
                type='text'
                required
                value={taskanswers.task5_1}
                onChange={(event) => setTaskAnswers({ ...taskanswers, task5_1: event.target.value })}
            /> 
            <br />
            <button className='button-54' onClick={handleCheck} disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Check'}
                </button>            
            </div>
            <button className="fixed bottom-10 right-20 p-2 rounded-lg text-transparent cursor-not-allowed" onClick={() => alert('My friend is an antiquiary and This was first used in about 1844.')}>
                 Hint
            </button>
        </div>
        
    );
};

export default Task5;


