import { Box, Button, Checkbox, Flex } from '@chakra-ui/react';
import axios from 'axios';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { RequiredStringSchema } from 'yup/lib/string';
import InputField from './InputField';

export type IFieldType = 'text' | 'textarea' | 'radio' | 'checkbox' | 'select';

export interface IField {
  type?: IFieldType;
  options?: string[];
  label: string;
  name: string;
  initialValue: string;
  rule: RequiredStringSchema<string, Record<string, any>>;
}

interface SubmitFormProps {
  data: IField[];
  submit: string;
  afterSubmit: string;
  api: string;
  agreement?: string;
}

const SubmitForm: React.FC<SubmitFormProps> = ({
  data,
  submit,
  afterSubmit,
  api,
  agreement
}) => {
  const [hasAgreed, setHasAgreed] = useState(false);

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const initialValues = data.reduce((pre, cur) => {
    pre[cur['name']] = cur['initialValue'];
    return pre;
  }, {});

  const generateShape = data.reduce((pre, cur) => {
    pre[cur['name']] = cur['rule'];
    return pre;
  }, {});

  const submitValidation = Yup.object().shape(generateShape);

  return (
    <>
      {hasSubmitted ? (
        <Box
          textAlign="center"
          fontSize={{ base: '12px', md: 'inherit' }}
          bg="gray.100"
          py={2}
        >
          {afterSubmit}
        </Box>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={submitValidation}
          onSubmit={async (values, actions) => {
            if ((agreement && hasAgreed) || !agreement) {
              try {
                const { data } = await axios.post(
                  `${process.env.NEXT_PUBLIC_API_URL}${api}`,
                  values
                );

                if (data) {
                  actions.setSubmitting(false);
                  setHasSubmitted(true);
                }
              } catch (e) {
                console.log(e);
              }
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Flex wrap="wrap">
                {data &&
                  data.map((x) => (
                    <InputField
                      key={x.label}
                      label={x.label}
                      name={x.name}
                      type={x.type}
                      options={x.options}
                    />
                  ))}
              </Flex>

              {agreement && (
                <Checkbox
                  py={{ base: 5, md: 10 }}
                  colorScheme="red"
                  isChecked={hasAgreed}
                  onChange={(e) => setHasAgreed(e.target.checked)}
                >
                  {agreement}
                </Checkbox>
              )}

              <Button
                mt={5}
                w={{ base: '50vw', md: '300px' }}
                display="block"
                mx="auto"
                color="white"
                bg="red.600"
                _hover={{ bgColor: 'red.600' }}
                isLoading={isSubmitting}
                type="submit"
              >
                {submit}
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default SubmitForm;
