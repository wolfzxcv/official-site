import {
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Textarea
} from '@chakra-ui/react';
import { useField } from 'formik';
import React, { InputHTMLAttributes, useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import { IFieldType } from './SubmitForm';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLTextAreaElement> &
  InputHTMLAttributes<HTMLSelectElement> &
  IFieldCommonProps;

export type IFieldCommonProps = {
  label?: string;
  name: string;
  type?: IFieldType;
  options?: IOption[];
  placeholder?: string;
  variant?: string;
  formControlWidth?: FormControlProps['width'];
};

export type IOption = string | IOptionObject;

type IOptionObject = {
  id: string;
  value: string;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  // eslint-disable-next-line no-unused-vars
  size: _,
  type = 'text',
  options,
  placeholder = '',
  variant = 'outline',
  formControlWidth = { base: '100%', md: type === 'textarea' ? '100%' : '50%' },
  ...props
}: InputFieldProps) => {
  const [field, { error, touched }] = useField(props);

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const isString = (value) => {
    return typeof value === 'string';
  };

  return (
    <FormControl
      isInvalid={!!error && !!touched}
      width={formControlWidth}
      p={2}
    >
      {label && <FormLabel htmlFor={field.name}>{label}</FormLabel>}
      {type === 'text' && (
        <Input
          {...field}
          {...props}
          id={field.name}
          placeholder={placeholder}
          variant={variant}
        />
      )}
      {type === 'password' && (
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            {...field}
            {...props}
            id={field.name}
            type={show ? 'text' : 'password'}
            placeholder={placeholder}
            variant={variant}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="md" onClick={handleClick}>
              {show ? <BiShow /> : <BiHide />}
            </Button>
          </InputRightElement>
        </InputGroup>
      )}
      {type === 'textarea' && (
        <Textarea
          resize="none"
          {...field}
          {...props}
          id={field.name}
          placeholder={placeholder}
          variant={variant}
        />
      )}
      {type === 'radio' && options && (
        <RadioGroup
          colorScheme="green"
          {...field}
          id={field.name}
          variant={variant}
          // @ts-ignore
          {...(props as unknown)}
        >
          <Stack spacing="24px">
            {options.map((x) => (
              <Radio
                {...field}
                key={isString(x) ? x : x['id']}
                value={isString(x) ? x : x['id']}
              >
                {isString(x) ? x : x['value']}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      )}
      {type === 'checkbox' && options && (
        <CheckboxGroup
          colorScheme="green"
          variant={variant}
          {...field}
          // @ts-ignore
          {...(props as unknown)}
          onChange={(values) => console.log(values)}
        >
          <Stack spacing="24px">
            {options.map((x) => (
              <Checkbox
                {...field}
                key={isString(x) ? x : x['id']}
                value={isString(x) ? x : x['id']}
              >
                {isString(x) ? x : x['value']}
              </Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      )}

      {type === 'select' && options && options.length && (
        <Select
          {...field}
          {...props}
          placeholder={
            isString(options[0]) ? options[0] : options[0]['value'] || ''
          }
          variant={variant}
          id={field.name}
        >
          {options.map((x, index) => {
            if (index !== 0) {
              return (
                <option
                  key={isString(x) ? x : x['id']}
                  value={isString(x) ? x : x['id']}
                >
                  {isString(x) ? x : x['value']}
                </option>
              );
            }
          })}
        </Select>
      )}
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default InputField;
