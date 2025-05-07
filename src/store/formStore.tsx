import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { FormState } from '@/types/type';


export const useFormStore = create<FormState>()(
  persist(
    (set) => ({
      formData: {
        name: '',
        phone: '',
        age: '',
        gender: '',
      },
      errors: {},
      currentStep: 1,
      subStep: 1,

      updateField: (name, value) =>
        set((state) => ({
          formData: { ...state.formData, [name]: value },
        })),

      updateErrors: (errors) => set({ errors }),
      nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
      prevStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),
      nextSubStep: () => set((state) => ({ subStep: state.subStep + 1 })),
      prevSubStep: () => set((state) => ({ subStep: Math.max(state.subStep - 1, 1) })),
      resetSubStep: () => set({ subStep: 1 }),
      setSubStep: (subStep) => set({ subStep }),
      resetForm: () =>
        set(() => ({
          formData: {
            name: '',
            phone: '',
            age: '',
            gender: '',
          },
          errors: {},
          currentStep: 1,
          subStep: 1,
        })),
      isSubmitted: false,
      setSubmitted: (value) => set({ isSubmitted: value }),
    }),
    {
      name: 'form-storage', // localStorage key
      partialize: (state) => ({
        formData: state.formData,
        currentStep: state.currentStep,
        subStep: state.subStep,
        isSubmitted: state.isSubmitted,
      }),
    }
  )
);