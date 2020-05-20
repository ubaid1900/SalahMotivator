import { ValidationErrors, FormControl } from '@angular/forms';

export class CustomValidators {

  static validateNumberOfAttachments(num: number): ValidationErrors {
    const message = {
      attachments: {
        message: `Only ${num} attachments are allowed`
      }
    };
    return message;
  }

  static noSpaces(num: number) {
    return (c: FormControl) => {
      const spacesRegex = `^\\s{${num},}$`;
      const regex = new RegExp(spacesRegex);
      const isJustSpaces = regex.test(c.value);
      if (isJustSpaces) {
        return { spaces: true };
      }
    };
  }
}