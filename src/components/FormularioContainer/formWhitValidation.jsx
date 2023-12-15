import { useState } from "react";

export const formWhitValidation = (FormWrappedComponent) => {

  const NewFormWhitValidation = (props) => {
    const [errors, setErrors] = useState({});
    const validateForm = () => {
      let newErrors = {};
      let isValid = true;

      if (!props.formData.name) {
        newErrors.name = "El campo nombre es obligatorio";
        isValid = false;
      }

      if (!props.formData.phone) {
        newErrors.phone = "El campo teléfono es obligatorio";
        isValid = false;
      }

      if (!props.formData.email) {
        newErrors.email = "El campo email es obligatorio";
        isValid = false;
      }

      if (!props.formData.confirmEmail) {
        newErrors.confirmEmail = "Confirmar email es obligatorio";
        isValid = false;
      }

      if (props.formData.email && props.formData.confirmEmail && props.formData.email !== props.formData.confirmEmail) {
        newErrors.confirmEmail = "El email no coincide";
        isValid = false;
      }

      console.log(props)

      // if (!props.formData.email & confirmEmail & !props.formData.email === confirmEmail) {
      //   newErrors.matchEmail = "El campo email no coincide";
      //   isValid = false;
      // }

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
