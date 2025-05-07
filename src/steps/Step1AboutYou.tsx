"use client";

import React from "react";
import Input from "@/components/Input";
import Radio from "@/components/Radio";
import CTAButton from "@/components/CTAButton";
import { validateField } from "@/utility/validation";
import { useFormStore } from '@/store/formStore';
import { gender } from "@/data/QuestionsData";




const Step1AboutYou = () => {
  const { formData, errors, updateField, updateErrors, nextStep } = useFormStore();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateField(name, value);

    const error = validateField(name, value);
    updateErrors({ ...errors, [name]: error });
  };
  const isStepValid = () => {
    const fieldNames: (keyof typeof formData)[] = ['name', 'phone', 'age', 'gender'];
    const currentErrors:  { [K in keyof typeof formData]?: string } = {};

    fieldNames.forEach((field) => {
      const error = validateField(field, formData[field] ?? '');
      if (error) currentErrors[field] = error;
    });

    updateErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleNext = () => {
    if (isStepValid()) {
      nextStep();
    }
  };

  return(
    <>
          <Input
          label="Name"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          error={errors.name}
          maxLength={51}
          />
          <div className="flex mb-0 md:flex-row gap-4">
            <div className="flex-1">
                <Input 
                label="Mobile Number" 
                name="phone" 
                id="phone"
                value={formData.phone} 
                placeholder="Enter your Mobile Number"
                error={errors.phone}
                maxLength={11}
                onChange={handleChange}
                />
            </div>
              <Input
                label="Age"
                name="age"
                id="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter your Age"
                error={errors.age}
                style={{ width: '10ch', boxSizing: 'content-box' }}
              />
          </div>
         
            <Radio
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              options={gender}
              error={errors.gender}
              imgHeigth="14"
              imgWidth="14"
              labelPaddingY="py-3"
              labelUppercase={true}
             
            />

      <CTAButton className="w-full mt-6 py-4 font-bold text-lg text-transform: uppercase"  label="Next" onClick={handleNext} />
        
    </>
)

}
export default Step1AboutYou;
