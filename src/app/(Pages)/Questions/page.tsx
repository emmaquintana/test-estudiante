"use client"

import React, { useRef, useState } from 'react';
import { Questions } from '@/assets/util/Info/QA';
import styles from './page.module.css';
import animations from '@/assets/animations/animations.module.css'
import FloatingDialog from '@/assets/components/FloatingDialog';
import replaceWithLoadingScreen from '@/assets/util/Functions/ReplaceWithLoadingScreen';
import dynamic from 'next/dynamic';
import OptionButtonSkeleton from '@/assets/components/OptionButtonSkeleton';
import { useRouter } from 'next/navigation';
import BarSkeleton from '@/assets/components/BarSkeleton';

const OptionButton = dynamic(() => import('@/assets/components/OptionButton'), {
    ssr: false,
    loading: () => <OptionButtonSkeleton />
});

const WrapperText = dynamic(() => import('@/assets/components/WrapperText'), {
    ssr: false,
    loading: () => {
        return (
            <>
                <BarSkeleton 
                    styles={{
                        width: '80vw', 
                        height: '80px', 
                        borderRadius: '10px', 
                        display: 'flex', 
                        flexDirection: 'column',
                        alignItems: 'center', 
                        justifyContent: 'center',
                        gap: '25%',                         
                    }}
                >
                    <BarSkeleton styles={{width: '95%', height: '20px', borderRadius: '10px'}} variant='ligther' />
                    <BarSkeleton styles={{width: '95%', height: '20px', borderRadius: '10px'}} variant='ligther' />
                </BarSkeleton>
            </>
        )
    }
});

const NextButton = dynamic(() => import('@/assets/components/NextButton'), {
    ssr: false,
    loading: () => <BarSkeleton styles={{padding: '2rem', borderRadius: '50%'}} />
});

/*
The following test works with a score model.
This means, there's no a CORRECT answer. An answer will
be classified by Perfect, Regular or Bad. For each of these
classifications, there's a score (number type)
*/
export default function Home() {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [questionId, setQuestionId] = useState(0);
    const [score, setScore] = useState(0);
    const [isFloatingMessageDisplayed, setIsFloatingMessageDisplayed] = useState(false);
    const sectionRef = useRef<HTMLBodyElement>(null);
    const router = useRouter();

    /**Handles which's the selected button for apply styles and logic*/
    function handleSelectedButton(id: number) {
        setSelectedOption(id);
    }

    /**Returns current desc question*/
    function getQuestion() {
        return Questions[questionId].desc;
    }

    /**Returns the options using the <OptionButton> component*/
    function getOptions() {
        let options: JSX.Element[] | undefined;

        options = Questions[questionId].options?.map((option) => {
            return (
                <OptionButton
                    id={option.id}
                    key={option.id}
                    onClick={handleSelectedButton}
                    className={`${styles.optionButtons}`}
                    isSelected={selectedOption === option.id}
                >
                    <h2>
                        {option.desc}
                    </h2>
                </OptionButton>
            )
        });

        return options;
    }

    /**Handles the test when next button is clicked*/
    function handleNextClick() {
        if (selectedOption && sectionRef.current) {
            // If there's a selected option, the score updates itself.
            updateScore();

            // Floating message disappear if was displayed previously.
            setIsFloatingMessageDisplayed(false);

            // Handles animation
            sectionRef.current.classList.remove(animations.fadeOutToIn);
            sectionRef.current.classList.add(animations.fadeInToOut);

            sectionRef.current.addEventListener('animationend', () => {
                if (questionId !== Questions.length - 1) {
                    // Goes to the next question                                
                    setQuestionId(questionId + 1);
                    setSelectedOption(null);
                }
                else {
                    // End of the test: Goes to the test's result                                                                         
                    replaceWithLoadingScreen(sectionRef);

                    // It works. I don't know how
                    setScore((prevScore) => {
                        router.push(`Questions/Result?score=${prevScore}`);
                        return prevScore;
                    });

                }
            }, { once: true });

            // Handles animation. Fade out doesn't remove if it's the last question
            if (questionId !== Questions.length - 1) {

                sectionRef.current.addEventListener('animationend', () => {
                    sectionRef.current?.classList.remove(animations.fadeInToOut);
                }, { once: true });

                sectionRef.current.addEventListener('animationend', () => {
                    sectionRef.current?.classList.add(animations.fadeOutToIn);
                }, { once: true });
            }
        }
        else {
            // if there's no a selected option, then a shake animation
            // is activated during 500ms. 
            // Also, a floating dialog message is displayed.
            if (sectionRef.current) {
                sectionRef.current.classList.add(animations.shake);

                sectionRef.current.addEventListener('animationend', () => {
                    sectionRef.current?.classList.remove(animations.shake);
                }, { once: true });
            }
            setIsFloatingMessageDisplayed(true)
        }
    }

    /** Process score */
    function updateScore() {
        if (selectedOption) {
            setScore((prevScore) => {
                const selectedOptionObj = Questions[questionId].options?.[selectedOption - 1];

                if (selectedOptionObj && 'score' in selectedOptionObj) {
                    const scoreToAdd = selectedOptionObj.score as number;
                    return prevScore + scoreToAdd;
                }

                return prevScore;
            });
        }
    }    

    return (
        <section className={`${styles.container} ${animations.fadeOutToIn}`} ref={sectionRef}>
            <div>
                <WrapperText>
                    <h2 className={styles.questionTitle}>
                        Pregunta Nro. {questionId + 1} <i>/</i> {Questions.length}
                    </h2>
                    <h3 className={styles.questionDesc}>
                        {getQuestion()}
                    </h3>
                </WrapperText>
            </div>
            <div className={styles.optionButtonsContainer}>
                {getOptions()}
            </div>
            <NextButton
                pulseAnimation={selectedOption !== null}
                onClick={handleNextClick}
                className={styles.nextBtn}
                styles={selectedOption !== null ? {backgroundColor: 'rgb(12, 200, 0)', color: '#fff', transition: '.5s'} : {}}
            />
            <div className={styles.floatingDialogContainer}>
                {isFloatingMessageDisplayed &&
                    <FloatingDialog>Selecciona una opcion</FloatingDialog>
                }
            </div>
        </section>
    )
}