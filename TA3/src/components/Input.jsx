import  { useState } from 'react'; // Importa useState desde React

const Input = () => {
  // Estado para almacenar el valor del input
  const [inputValue, setInputValue] = useState('');

  // Función para manejar el cambio en el input
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Escribe algo aquí..."
      />
      <p>La información ingresada es: {inputValue}</p>
    </div>
  );
};

export default Input;
