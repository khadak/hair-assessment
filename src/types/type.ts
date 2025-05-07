type BaseMProps = {
    title: string;
    description: string;
    children: React.ReactNode;
};

export type StepHeaderProps =  {
  currentStep: number;
  steps: string[];
}

export type FromDataType = {
    name: string;
    phone: string;
    age: string;
    gender: string;
    profilePhoto?: string;
}

export type FormState = {
    formData: FromDataType;
    errors: FormErrorType;
    currentStep: number;
    subStep: number;
    updateField: (name: string, value: string) => void;
    updateErrors: (errors: FormErrorType) => void;
    nextStep: () => void;
    prevStep: () => void;
    nextSubStep: () => void;
    prevSubStep: () => void;
    resetSubStep: () => void;
    setSubStep: (subStep: number) => void;
    resetForm: () => void;
    isSubmitted: boolean;
    setSubmitted: (value: boolean) => void;
  }


export type FormErrorType = {
    name?: string;
    phone?: string;
    age?: string;
    gender?: string;
}

export type StepProp = {
    formData: FromDataType;
    errors: FormErrorType;
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=> void;
    onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onNext: () => void;
}

export type OptionType = {
    label: string;
    icons?: string[];
};

export type QuestionType = {
    question: string;
    name: string;
    options: OptionType[];
  };


export type CTAButtonProps = {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    className?: string; 
}

export type FormWrapperProps = BaseMProps;

export type  QuestionCardProps = BaseMProps;

export type  HeaderProps =  {
    name: string
}

export type  ImagePreviewProps = {
  imageSrc: string;
  onChange: () => void;
  onSubmit: () => void;
}

export type ImageUploadProps = {
    onImageSelect: (dataUrl: string) => void;
}

export type InputProps = {
    id?: string;
    name: string,
    label: string;
    value: string;
    placeholder: string;
    required?: boolean;
    type?: string;
    error?: string;
    maxLength?: number;
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?:(e: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
} 


export type RadioProps = {
    label: string;
    name?: string;
    options: OptionType[];
    value?: string;
    error?: string;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>)=> void,
    style?: React.CSSProperties;
    className?: string;
    imgWidth?: string;
    imgHeigth?: string;
    labelPaddingY?: string;
    labelUppercase?: boolean
}