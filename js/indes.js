// Función para calcular el área de un círculo dado su radio
function calcularAreaCirculo(radio) {
    const pi = Math.PI;
    const area = pi * Math.pow(radio, 2);
    return area;
  }
  
  // Ejemplo de uso de la función
  const radioCirculo = 5;
  const areaCirculo = calcularAreaCirculo(radioCirculo);
  console.log(`El área del círculo con radio ${radioCirculo} es: ${areaCirculo.toFixed(2)}`);