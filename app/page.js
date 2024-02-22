"use client";

import React , {useState} from 'react';
const VideoBG = '/videos/VideoBG.mp4';
import Task1 from '@/components/task1';
import Task2 from '@/components/task2';
import Task3 from '@/components/task3';
import Task4 from '@/components/task4';
import Task5 from '@/components/task5';
import Task6 from '@/components/task6';
import Task7 from '@/components/task7';


function Form() {

    const [step, setStep] = useState(4);

    const TaskTitles = ["Chumma", "Inspect", "VisualCrypto", "NestedHex", "MorseCode", "QR", "MP3", "Congratulations"];
    const [taskanswers, setTaskAnswers] = useState({
        task1_1:"",
        task2_1:"",
        task2_2:"",
        task2_3:"",
        task3_1:"",
        task4_1:"",
        task4_2:"",
        task4_3:"",
        task5_1:"",
        task5_2:"",
        task6_1:"",
        task7_1:"",
    });

    const handleIncrementStep = () => {
        if(step < TaskTitles.length - 1){
            setStep((prevStep) => prevStep + 1);
        }
    };

    const PageDisplay = () => {
        switch (step) {
            case 0:
                return (
                <Task1 
                taskanswers={taskanswers} 
                setTaskAnswers={setTaskAnswers}  
                step={step}
                handleIncrementStep={handleIncrementStep}/>);
            case 1:
                return (
                    <Task2 
                    taskanswers={taskanswers} 
                    setTaskAnswers={setTaskAnswers}  
                    step={step}
                    handleIncrementStep={handleIncrementStep}/>);
            case 2:
                return (
                    <Task3 
                    taskanswers={taskanswers} 
                    setTaskAnswers={setTaskAnswers}  
                    step={step}
                    handleIncrementStep={handleIncrementStep}/>);
            case 3:
                return (
                    <Task4 
                    taskanswers={taskanswers} 
                    setTaskAnswers={setTaskAnswers}  
                    step={step}
                    handleIncrementStep={handleIncrementStep}/>);
            case 4:
                return (
                    <Task5 
                    taskanswers={taskanswers} 
                    setTaskAnswers={setTaskAnswers}  
                    step={step}
                    handleIncrementStep={handleIncrementStep}/>);
            case 5:
                return (
                    <Task6 
                    taskanswers={taskanswers} 
                    setTaskAnswers={setTaskAnswers}  
                    step={step}
                    handleIncrementStep={handleIncrementStep}/>);
            case 6:
                return (
                    <Task7 
                    taskanswers={taskanswers} 
                    setTaskAnswers={setTaskAnswers}  
                    step={step}
                    handleIncrementStep={handleIncrementStep}/>);
            case 7:
                return (
                    <div>
                        <h1>Congratulations! You have completed all the tasks.</h1>
                    </div>
                );
            default:
                return null;
        }        
    }

    return (
        <div className='form'>
            <video autoPlay loop muted playsInline>
            <source src={VideoBG} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
            <div className='form-container'>
            <div className={`header ${step === 3 ? 'mt-40' : ''}`}>
                <div className="hero-container">
                   <div className="environment"></div>
                   <h2 className="hero glitch layers evntname" data-text="CTF Challenge"><span className='evntname'>CTF Challenge</span></h2>
                 </div>
                </div>
                <div className='title'>
                <div className='rainbow-wrapper'>
                    {/* <center><h2 className='rainbow-text'>{TaskTitles[step]}</h2></center> */}
                </div>
                </div>
                <div className='blur-background'></div>
                <div className='body'>{PageDisplay()}</div>
                <div className='footer'>
                </div>
            </div>
            </div>
    );
}

export default Form;

