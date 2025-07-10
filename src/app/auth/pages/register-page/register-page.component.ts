import { FormUtils } from './../../../utils/form-utils';
import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.pattern(FormUtils.namePattern)],
    ],
    email: [
      '',
      [Validators.required, Validators.pattern(FormUtils.emailPattern)],
    ],
    userName: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(FormUtils.notOnlySpacesPattern),
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
  });

  onSubmit() {
    this.myForm.markAllAsTouched();

    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }
}
