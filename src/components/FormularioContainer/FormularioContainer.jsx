import { useState } from "react";

import { Form } from "./Form.jsx";
import formWhitValidation from "./formWhitValidation.jsx";

const FormWhitValidation = formWhitValidation(Form);

// Contenedor del formulario
const FormularioContainer = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
  });

  const handleOnChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <FormWhitValidation
      formData={formData}
      handleOnChange={handleOnChange} />
  );
};

export default FormularioContainer;
