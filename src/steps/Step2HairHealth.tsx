"use client";

import React from "react";
import { useFormStore } from "@/store/formStore";
import Radio from "@/components/Radio";
import { hairHealthQuestions } from "@/data/QuestionsData";
import { motion, AnimatePresence } from "framer-motion";


const Step2HairHealth =  ()=> {
    const { formData, updateField, subStep, nextSubStep, nextStep } = useFormStore();
    
  
    const current = hairHealthQuestions[subStep - 1];
    const currentValue = formData[current.name as keyof typeof formData] || '';
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      updateField(name, value);


    if (subStep < hairHealthQuestions.length) {
      nextSubStep();
    } else {
      nextStep();
    }


    
    };

      return(
        <>
          <AnimatePresence mode="wait">
           <motion.div
           key={subStep}
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: -50 }}
           transition={{ duration: 0.3 }}
         >
       
             <Radio
                label={current.question}
                name={current.name}
                options={current.options}
                value={currentValue}
                onChange={handleChange}
                className={`grid gap-4 md:grid-cols-2`}
                />
                </motion.div>
       </AnimatePresence>
        </>
      )
}

export default Step2HairHealth;