import { AbstractControl, ValidationErrors } from "@angular/forms";

export function confirmPassCheck(pass: string, confirmpass: string) {
  return (control: AbstractControl): ValidationErrors | null => {
    const input1 = control.get(pass);
    const input2 = control.get(confirmpass);

    if (input1 && input2 && input1.value !== input2.value) {
      return { mismatch: true };
    }

    return null;
  }
}
