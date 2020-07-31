import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormFieldWrapper = styled.div`

`;

const Label = styled.label`

`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 3.5625rem;
  font-size: 1.125rem;

  outline: 0;
  border: 0;
  borter-top: 0.25rem solid transparent;
  border-bottom: 0.25rem solid #53585D;
  padding: 1rem 1rem;
  margin-bottom: 2.8125rem;

  resize: none;
  border-radius: 0.25rem;
  transition: border-color .3s;

  &:focus {
    border-bottom-color: var(--primary);
  }
`;

function FormField({
  label, type, value, name, onChange,
}) {
  const fieldId = `id_${name}`;
  const tag = type === 'textarea' ? 'textarea' : 'input';

  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        {label}
        <Input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default FormField;
