import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
};

InputField.defaultProps = {
  label: '',
};

function InputField(props) {
  const { field, form, label, ...extraProps } = props;
  const { name, value, onChange, onBlur } = field;
  const { touched, errors } = form;

  console.log('ExtraProps: ', extraProps);

  return (
    <FormGroup>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}

        {...field}
        {...extraProps}

        invalid={touched.name && !!errors.name}
      />

      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default InputField;