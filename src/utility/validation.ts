export const validateField = (name: string, value: string): string | undefined => {
  switch (name) {
    case 'name':
      if (!value.trim()) return 'Name is required.';
      if (!/^[A-Za-z ]+$/.test(value)) return 'Name should only contain letters.';
      if (value.length < 2 || value.length > 50) return 'Name must be 2–50 characters.';
      break;
    case 'age':
      if (!value.trim()) return 'Age is required.';
      if (!/^\d+$/.test(value)) return 'Age must be a number.';
      if(value.length >3) return "Max 3 digit allowed"
      break;
    case 'phone':
      if (!value.trim()) return 'Phone is required.';
      if (!/^\d{10}$/.test(value)) return 'Phone must be 10 digits.';
      break;

    case 'gender':
      if(!value.trim()) return 'Gender is required'  
  }
  return undefined;
};