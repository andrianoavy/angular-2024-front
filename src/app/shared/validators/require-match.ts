import { AbstractControl } from "@angular/forms";

export function requireMatch(control: AbstractControl) {
  const selection: any = control.value;
  if (typeof selection === "string") {
    return { incorrect: true };
  }
  return null;
}
