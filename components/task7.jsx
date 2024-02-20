import React from 'react';

const Task7 = ({ taskanswers, setTaskAnswers, step, handleIncrementStep }) => {
    const handleCheck = () => {
        const userAnswer = taskanswers.task7_1;
        try{
            fetch("/api/task7", {
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
        }
    };

    return (
        <div className='task-3'>
            <input
                type='text'
                placeholder='Flag 1'
                required
                value={taskanswers.task7_1}
                onChange={(event) => setTaskAnswers({ ...taskanswers, task7_1: event.target.value })}
            /> <br />
            <button onClick={handleCheck}>Check</button>
        </div>
    );
};

export default Task7;
