import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Progress, Jumbotron, Button, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputField from '../../components/CustomFields/InputField';
import RadiosField from '../../components/CustomFields/RadiosField';


ContactPage.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

function ContactPage(props) {
  const { match, location, history } = props;
  console.log({ match, location, history });

  const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     // setProgress(10);

  //     setProgress(value => {
  //       // console.log('Current progress: ', value)
  //       if (value === 95) {
  //         clearInterval(timer);
  //       }

  //       return value + 5;
  //     });
  //   }, 500);

  //   // clean up function
  //   return () => {
  //     clearInterval(timer);
  //   }
  // }, [])

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required ông ơi! :P'),

    wine: Yup.string()
      .when('gender', {
        is: 'male',
        then: Yup.string().required('Uống rượu gì a ơi!!!'),
        otherwise: Yup.string(),
      }),

    color: Yup.string()
      .when('gender', {
        is: 'female',
        then: Yup.string().required('Thích màu gì chị ơi!!!'),
        otherwise: Yup.string(),
      }),

    gender: Yup.string().min(10, 'Ngan qua di :P')
  })

  const handleFormSubmit = (values, formikBag) => {
    console.log('Form submit: ', { values, formikBag });
  };

  const initialValues = {
    name: 'Hau Nguyen',
    gender: 'male',
    age: 18,
    color: '',
    wine: '',
  };

  return (
    <div className="container">
      <Jumbotron>
        <h1 className="display-3">How to use Formik!</h1>
        <p className="lead">Working with form without tears! :P</p>
      </Jumbotron>

      <Progress value={progress} max={100} />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {form => {
          const { dirty, isValid, values, errors, touched } = form;

          console.groupCollapsed('Form updating');
          console.log({ dirty, isValid, values, errors });
          console.groupEnd();

          return (
            <Form>

              <Field
                name="name"
                component={InputField}

                label="Name"
                type="text"
                placeholder="Eg: your name"
              />

              {/* <FormGroup>
                <Label htmlFor="nameControl">Name</Label>
                <Field
                  id="nameControl"
                  name="name"
                  as={Input}

                  invalid={touched.name && !!errors.name}
                  placeholder="Eg: your name"
                />

                <ErrorMessage name="name" component={FormFeedback} />
              </FormGroup> */}

              <Field
                name="age"
                component={InputField}

                label="Age"
                type="number"
                placeholder="Eg: your age"
              />

              {/* <FormGroup>
                <Label htmlFor="ageControl">Age</Label>
                <Field
                  id="ageControl"
                  name="age"
                  as={Input}

                  type="number"
                  placeholder="How old are you?"
                />
              </FormGroup> */}

              <Field
                name="gender"
                component={RadiosField}

                label="Gender"
                options={[
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' },
                ]}
              />

              {/* <FormGroup tag="fieldset">
                <legend>Gender</legend>

                <FormGroup check>
                  <Label check htmlFor="genderMale">
                    <Field
                      id="genderMale"
                      name="gender"
                      as={Input}

                      type="radio"
                      value="male"
                    />
                    Male
                  </Label>
                </FormGroup>

                <FormGroup check>
                  <Label check htmlFor="genderFemale">
                    <Field
                      id="genderFemale"
                      name="gender"
                      as={Input}

                      type="radio"
                      value="female"
                    />
                    Female
                  </Label>
                </FormGroup>
              </FormGroup> */}

              {values.gender === 'male' && (
                <FormGroup>
                  <Label htmlFor="wine">Favorite wine</Label>
                  <Field
                    id="wine"
                    name="wine"
                    as={Input}

                    invalid={touched.wine && !!errors.wine}
                    placeholder="Eg: your favorite wine"
                  />

                  <ErrorMessage name="wine" component={FormFeedback} />
                </FormGroup>
              )}

              {values.gender === 'female' && (
                <FormGroup>
                  <Label htmlFor="color">Favorite color</Label>
                  <Field
                    id="color"
                    name="color"
                    as={Input}

                    placeholder="Eg: your favorite color"
                  />
                </FormGroup>
              )}

              <FormGroup>
                <Button type="submit" color="primary">Submit</Button>
              </FormGroup>

            </Form>
          )
        }}
      </Formik>
    </div>
  );
}

export default ContactPage;