"use client";

import React from 'react';
import { useFormStore } from '@/store/formStore';
import Step1AboutYou from '@/steps/Step1AboutYou';
import FormWrapper from '@/components/FormWrapper';
import Header from '@/components/Header';
import StepHeader from '@/steps/StepHeader';
import Step2HairHealth from '@/steps/Step2HairHealth';
import Step3InternalHealth from '@/steps/Step3InternalHealth';
import Step4ScalpAssessment from '@/steps/Step4ScalpAssessment';
import SuccesScreen from '@/steps/SuccessScreen'
import { hairHealthQuestions, internalHealthQuestions } from "@/data/QuestionsData";



export default function Page() {
  const { currentStep, formData, prevStep, subStep, prevSubStep, setSubStep  } = useFormStore();
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1AboutYou />;
      case 2:
        return <Step2HairHealth />; 
      case 3:
          return <Step3InternalHealth />;
      case 4:
          return <Step4ScalpAssessment />;
      case 5: 
          return <SuccesScreen />;    
      default:
        return null;
    }
  };


 const handleBack = () => {
  const { currentStep, subStep, prevSubStep, prevStep, setSubStep } = useFormStore.getState();

  // Define sub-steps for each step
  const subStepsPerStep: Record<number, number> = {
    2: hairHealthQuestions.length,
    3: internalHealthQuestions.length,
  };

  // Case 1: Inside sub-steps, go back within sub-step
  if (subStepsPerStep[currentStep] && subStep > 1) {
    prevSubStep();
    return;
  }

  // Case 2: Go to previous step
  if (currentStep > 1) {
    const previousStep = currentStep - 1;
    const lastSubStep = subStepsPerStep[previousStep] || 1;

    prevStep();

    // Delay setting subStep to ensure prevStep updates first
    setTimeout(() => {
      setSubStep(lastSubStep);
    }, 0);
  }
};


  return (
    <main className="min-h-screen bg-gray-100 grid grid-rows-[auto_1fr] h-screen overflow-hidden">
      <Header name={formData.name} />
      <div className="w-full max-w-2xl mx-auto bg-white shadow-md p-5 overflow-auto space-y-6 md:rounded-lg md:mb-6 md:p-10">
       
        <FormWrapper title={currentStep !== 5 ? "Hair Assessment Form" : ""} description={currentStep !== 5 ? "A quick 4-step form to understand and evaluate your hair and scalp health.": ""}>
        {currentStep !== 5 && (
          <StepHeader currentStep={currentStep}  steps={["About You", "Hair Health", "Internal Health", "Scalp Assessment"]} />
        )}
          
          {renderStep()}

           
        {currentStep > 1 && currentStep !== 5 && (
            <button
              onClick={handleBack}
              className="text-sm text-blue-600 cursor-pointer hover:underline"
            >
              ← Back
            </button>
          )}
          
        </FormWrapper>
      
      </div>
    </main>
  );
}
