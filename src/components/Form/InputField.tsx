import {
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Textarea
} from '@chakra-ui/react';
import { useField } from 'formik';
import React, { InputHTMLAttributes } from 'react';
import { IFieldType } from './SubmitForm';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLTextAreaElement> &
  InputHTMLAttributes<HTMLSelectElement> & {
    label: string;
    name: string;
    type?: IFieldType;
    options?: string[];
  };

const InputField: React.FC<InputFieldProps> = ({
  label,
  // eslint-disable-next-line no-unused-vars
  size: _,
  type = 'text',
  options,
  ...props
}: InputFieldProps) => {
  const [field, { error, touched }] = useField(props);

  return (
    <FormControl
      isInvalid={!!error && !!touched}
      width={{ base: '100%', md: type === 'textarea' ? '100%' : '50%' }}
      p={2}
    >
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      {type === 'text' && <Input {...field} {...props} id={field.name} />}
      {type === 'textarea' && (
        <Textarea resize="none" {...field} {...props} id={field.name} />
      )}
      {type === 'radio' && options && (
        <RadioGroup id={field.name} {...field} {...props}>
          <Stack spacing="24px">
            {options.map((x) => (
              <Radio key={x} value={x}>
                {x}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      )}
      {type === 'checkbox' && options && (
        <CheckboxGroup colorScheme="green" {...field} {...props}>
          <Stack spacing="24px">
            {options.map((x) => (
              <Checkbox key={x} value={x}>
                {x}
              </Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      )}

      {type === 'select' && options && options.length && (
        <Select {...field} {...props} placeholder={options[0]} id={field.name}>
          {options.map((x, index) => {
            if (index !== 0) {
              return <option key={x}>{x}</option>;
            }
          })}
        </Select>
      )}
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default InputField;
