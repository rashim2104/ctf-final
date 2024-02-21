"use client";
import {useState} from 'react';

const Task3 = ({ taskanswers, setTaskAnswers, step, handleIncrementStep }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleCheck = async() => {
        const userAnswer = taskanswers.task3_1;
        setIsLoading(true); // Set loading state to true
        try{
            fetch("/api/task3", {
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
            <center>
               <p className='bg-black p-3 w-3/4 bg-opacity-50'>
                    Seems like you have cleared the Previous round -_- Here you go with a  
                    <a href="/sources/photos.zip" download> Zip file <span className='text-3xl'>&#x1F4E6;</span></a>
                    . Try to solve the Puzzle and Come up with the flag :)
                 </p>
            </center>

            <input
            className="mt-6 mb-6 peer h-full w-1/2 rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50 inputfield"
                type='text'
                // placeholder='Flag 1'
                required
                value={taskanswers.task3_1}
                onChange={(event) => setTaskAnswers({ ...taskanswers, task3_1: event.target.value })}
            /> <br />
            <div className='flex flex-col  items-center'>
            <button className='button-54 items-center' onClick={handleCheck} disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Check'}
            </button>
            <button className="fixed bottom-0 right-10 p-2 rounded-lg text-transparent cursor-not-allowed" onClick={() => alert('Each story has its own perspective! - Mansoor Ali Khan 23\'')}>
                 Hint
            </button>
            </div>
        </div>
    );
};

export default Task3;
