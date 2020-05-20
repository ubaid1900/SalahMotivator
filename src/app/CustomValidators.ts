import {ValidationErrors} from '@angular/forms';

export class CustomValidators {
  
    static validateNumberOfAttachments(num: number): ValidationErrors {
      const message = {
        attachments: {
          message: `Only ${num} attachments are allowed`
        }
      };
      return message;
    }
  }