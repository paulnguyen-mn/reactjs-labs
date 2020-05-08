import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

RadiosField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  options: PropTypes.array,
};

RadiosField.defaultProps = {
  label: '',
  options: [],
};

function RadiosField(props) {
  const { field, label, options } = props;
  const { name, value } = field;

  return (
    <FormGroup tag="fieldset">
      {label && <legend>{label}</legend>}

      {options.map(option => (
        <FormGroup check>
          <Label check htmlFor={option.value}>
            <Input
              {...field}

              id={option.value}
              name={name}
              type="radio"
              value={option.value}
              checked={option.value === value}
            />

            {option.label}
          </Label>
        </FormGroup>
      ))}
    </FormGroup>
  );
}

export default RadiosField;