import { AbstractControl, ValidatorFn } from "@angular/forms";

export function avoidWord(regex: RegExp):ValidatorFn{
  return (formControl:AbstractControl):{[errorName:string]:any}|null => {
    const notAllowed = regex.test((formControl.value).toLowerCase());
    if(notAllowed){
      return{
        prohibited:{value: formControl.value}
      }
    }else{
      return null;
    }
  }
}