import React from "react";
import ModalWrapper from "../../app/common/modals/ModalWrapper";
import {Formik, Form} from "formik";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import MytextInput from '../../app/common/form/MyTextInput';
import { useDispatch } from "react-redux";
import { signInUser } from "./authAction";
import { closeModal } from "../../app/common/modals/modalReducer";

export default function LoginForm() {
    const dispatch =useDispatch();
  return (
    <ModalWrapper size='mini' header='Sign in to Re-vent'>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().required().email(),
          password: Yup.string().required(),
        })}
        onSubmit={(values, {setSubmitting}) => {
          dispatch(signInUser(values));
          setSubmitting(false);
          dispatch(closeModal());
        }}
      >
          {({isSubmitting, isValid, dirty}) => (
              <Form className='ui form'>
                  <MytextInput name='email' placeholder='Email address' />
                  <MytextInput name='password' placeholder='Password' type='password' />
                  <Button loading={isSubmitting} 
                  disabled={!isValid || !dirty || isSubmitting }
                  type='submit'
                  fluid
                  size='large'
                  color='teal'
                  content='Login'
                  />
              </Form>
          )}
      </Formik>
    </ModalWrapper>
  );
}
