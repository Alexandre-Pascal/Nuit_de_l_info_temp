import './question.scss'
import React, { useRef, useState } from 'react';
import Separator from "../components/Separator";
import data from "../jsons/secours.json";

const testIcon = (iconColor = "#fff") => {
    return (
        <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_35_151)">
                <path
                    d="M50.9958 22.3531C50.472 21.8185 49.5316 21.8185 49.0078 22.3531C47.9744 23.4061 38.9155 32.7957 38.9155 38.5954C38.9155 44.3951 47.9744 53.7848 49.0078 54.8378C49.2706 55.1042 49.6281 55.2543 50.0018 55.2543C50.3754 55.2543 50.733 55.1042 50.9958 54.8378C52.0292 53.7848 61.0881 44.3951 61.0881 38.5954C61.0881 32.7957 52.0292 23.4061 50.9958 22.3531Z"
                    fill={iconColor}
                />
                <path
                    d="M43.0704 54.7843C38.9691 50.6812 25.9198 50.4452 24.4467 50.4309C24.1124 50.4309 23.7137 50.5757 23.4491 50.8403C23.1845 51.1013 23.0379 51.4643 23.0397 51.8397C23.054 53.3129 23.2882 66.3604 27.3894 70.4599C31.4907 74.5611 44.5364 74.7953 46.0114 74.8096C46.015 74.8096 46.0185 74.8096 46.0239 74.8096C46.0328 74.8096 46.0436 74.8096 46.0507 74.8096C46.8284 74.8239 47.472 74.1946 47.472 73.4205C47.472 73.2739 47.4506 73.1398 47.4112 73.0093C47.3612 70.358 46.9178 58.6281 43.0704 54.7843Z"
                    fill={iconColor}
                />
                <path
                    d="M76.5509 50.8421C76.2881 50.5793 75.9109 50.4291 75.5533 50.4327C74.0784 50.447 61.0291 50.683 56.9314 54.786C52.8301 58.8819 52.5941 71.9312 52.5816 73.4044C52.578 73.7816 52.7246 74.1392 52.9892 74.4056C53.2503 74.6666 53.606 74.8132 53.9761 74.8132C53.9797 74.8132 53.9833 74.8132 53.9868 74.8132C55.4636 74.7989 68.5093 74.5647 72.6088 70.4634C76.7118 66.364 76.9478 53.3164 76.9603 51.8433C76.9621 51.4625 76.8155 51.1031 76.5509 50.8421Z"
                    fill={iconColor}
                />
                <path
                    d="M50 0C22.4336 0 0.00357056 22.4318 0.00357056 49.9982C0.00357056 77.5664 22.4318 100 50 100C77.5682 100 99.9964 77.5664 99.9964 49.9982C99.9964 22.4318 77.5682 0 50 0ZM50 90.7159C27.5432 90.7159 9.277 72.4515 9.277 49.9982C9.277 27.5396 27.5432 9.27701 50 9.27701C72.4568 9.27701 90.7212 27.5414 90.7212 49.9982C90.7212 72.4515 72.455 90.7159 50 90.7159Z"
                    fill={iconColor}
                />
            </g>
            <defs>
                <clipPath id="clip0_35_151">
                    <rect width="100" height="100" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

const plantIcon = testIcon();
function Question() {
    const [currentQuestionId, setCurrentQuestionId] = useState(1);

    const handleNextQuestion = () => {
        const nextId = currentQuestionId + 1;
        setCurrentQuestionId(nextId);
    };

    const question = getQuestion(currentQuestionId);
    const currentRefArray = useRef([]);

    return (
        <div className="find-answer__question">
            {question && (
                <>
                    <QuestionCard question={question} />
                    <div className="find-answer__answer">
                        {question.reponses.map((response, index) => (
                            <AnswerCard
                                key={response.id}
                                answer={response}
                                onSelect={
                                    (answer) => {
                                        if (checkAnswer(answer)) {
                                            currentRefArray.current[index].style.border = "10px solid green";
                                        } else {
                                            currentRefArray.current[index].style.border = "10px solid red";
                                        }
                                    }
                                
                                }
                                ref={currentRef => (currentRefArray.current.push(currentRef))}

                                onClick={() => {
                                    console.log(currentRefArray[index]);
                                }}
                            
                                />
                        ))}
                    </div>
                    <Separator icone={plantIcon} />
                    <button onClick={handleNextQuestion}>Next Question</button>
                </>
            )}
        </div>
    );
}

export default Question;

function getQuestion(id) {
    if (data && data.questions) {
        const question = data.questions.find((q) => q.id === id);
        return question || null;
    } else {
        console.error("Data is missing the 'questions' property or it is not an object.");
        return null;
    }
}
function QuestionCard({ question }) {
    if (!question) {
        return (
            <div className="find-answer__question-card">
                <p className="find-answer__error-message">Question not found</p>
            </div>
        );
    }

    return (
        <div className="find-answer__question-card">
            <h2 className="find-answer__question-title">{question.libelle}</h2>
            <p className="find-answer__question-description">
            </p>
        </div>
    );
}


const AnswerCard = React.forwardRef(({ answer, onSelect }, ref) => {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(true);
        onSelect(answer);
    };

    return (
        <div
            className={`find-answer__answer-card ${selected ? (answer.estBonneQuestion ? 'correct' : 'incorrect') : ''}`}
            onClick={handleClick}
            ref={ref}
        >
            <h2 className="find-answer__answer-title">{answer.titre}</h2>
            <p className="find-answer__answer-description">{answer.description}</p>
        </div>
    );
});

function checkAnswer(answer) {
    return answer.estBonneQuestion;
}