"use client";
import {useState} from 'react';

const Task4 = ({ taskanswers, setTaskAnswers, step, handleIncrementStep }) => {
    const [validationResults, setValidationResults] = useState({
        answer1: false,
        answer2: false,
        answer3: false
    });

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
        }
    };

    return (
        <div className='task-2'>
            <div>
                <input
                    type='text'
                    placeholder='Flag 1'
                    required
                    value={taskanswers.task4_1}
                    onChange={(event) => setTaskAnswers({ ...taskanswers, task4_1: event.target.value })}
                />
                <button disabled={validationResults.answer1} onClick={() => {
                    soloCheck(taskanswers.task4_1, 1);
                }}>Check</button>
{validationResults.answer1 && <span>Correct!</span>}
            </div>
            <br />
            <div>
                <input
                    type='text'
                    placeholder='Flag 2'
                    required
                    value={taskanswers.task4_2}
                    onChange={(event) => setTaskAnswers({ ...taskanswers, task4_2: event.target.value })}
                />
                <button disabled={validationResults.answer2} onClick={() => {
                    soloCheck(taskanswers.task4_2, 2);
                }}>Check</button>
{validationResults.answer2 && <span>Correct!</span>}
            </div>
            <br />
            <div>
                <input
                    type='text'
                    placeholder='Flag 3'
                    required
                    value={taskanswers.task4_3}
                    onChange={(event) => setTaskAnswers({ ...taskanswers, task4_3: event.target.value })}
                />
                <button disabled={validationResults.answer3} onClick={() => {
                    soloCheck(taskanswers.task4_3, 3);
                }}>Check</button>
{validationResults.answer3 && <span>Correct!</span>}
            </div>
            <br />
            <button onClick={handleCheck}>Check All</button>
        </div>
    );

};
export default Task4;
