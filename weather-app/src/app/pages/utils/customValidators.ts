import { FormGroup } from '@angular/forms';

// Función para validar la contraseña
// Entran dos valores por parametro
export function comparePassword(passwordControlName: string, confirmPasswordControlName: string) {
  return (formGroup: FormGroup) => {
    // Asignamos dos controladores a nuestros valores por param
    const passwordControl = formGroup.controls[passwordControlName];
    const confirmPasswordControl = formGroup.controls[confirmPasswordControlName];
    //  Control de errores
    if (confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMatch']) {
      return;
    }
    // Setter Errores
    if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMatch: true });
    } else {
        confirmPasswordControl.setErrors(null);
    }
  };
}