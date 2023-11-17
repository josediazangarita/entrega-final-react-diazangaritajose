import { useState } from "react";

export const formWhitValidation = (FormWrappedComponent) => {

  const NewFormWhitValidation = (props) => {
    const [errors, setErrors] = useState({});
    const validateForm = () => {
      let newErrors = {};
      let isValid = true;

      if (!props.formData.nombre) {
        newErrors.nombre = "El campo nombre es obligatorio";
        isValid = false;
      }

      if (!props.formData.email) {
        newErrors.email = "El campo email es obligatorio";
        isValid = false;
      }

      setErrors(newErrors);
      return isValid;
    }


    return (
      <FormWrappedComponent
        {...props}
        errors={errors}
        validateForm={validateForm}
      />
    );

  };
  return NewFormWhitValidation
}

export default formWhitValidation;
