import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from '@chakra-ui/react';
import { useField } from 'formik';
import React, { InputHTMLAttributes } from 'react';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  // eslint-disable-next-line no-unused-vars
  size: _,
  ...props
}: InputFieldProps) => {
  const [field, { error, touched }] = useField(props);

  return (
    <FormControl
      isInvalid={!!error || !!touched}
      width={{ base: '100%', md: '50%' }}
      p={2}
    >
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input {...field} {...props} id={field.name} />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default InputField;
