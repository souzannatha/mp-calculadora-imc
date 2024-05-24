export function calculateIMC(weight: number, height: number): number {
  return weight / (height * height);
}

export function imcResult(imc: number): string {
  if (imc < 17) {
    return "Muito abaixo do peso";
  } else if (imc >= 17 && imc < 18.49) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.99) {
    return "Peso normal";
  } else if (imc >= 25 && imc < 29.99) {
    return "Acima do peso";
  } else if (imc >= 30 && imc < 34.99) {
    return "Obesidade I";
  } else if (imc >= 35 && imc < 39.99) {
    return "Obesidade II (severa)";
  } else {
    return "Obesidade III (mórbida)";
  }
}
