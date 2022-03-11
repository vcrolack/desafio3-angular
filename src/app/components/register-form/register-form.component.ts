import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm!: FormGroup;
  dataEnviada!: string;
  mostrarNotificacion: boolean = false;

  mensajesErrores = {
    nombre: [
      {type: "required", message: "El nombre es obligatorio"},
      {type: "maxlength", message: "El nombre debe de tener 25 caracteres máximo."},
      {type: "minlength", message: "El nombre debe de tener 2 caracter mínimo."},
    ],
    apellido: [
      {type: "required", message: "El apellido es obligatorio"},
      {type: "maxlength", message: "El apellido debe tener 25 caracter máximo."},
      {type: "minlength", message: "El apellido debe tener 2 caracter mínimo."}
    ],
    email: [
      {type: "required", message: "El email es obligatorio."},
      {type: "pattern", message: "El email ingresado no es válido."}
    ],
    contrasena: [
      {type: "required", message: "La contraseña es obligatoria."},
      {type: "maxlength", message: "La contraseña debe de tener 30 caracteres máximo"},
      {type: "minlength", message: "La contraseña debe de tener 5 caracteres mínimo"}
    ]
  }

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      nombre: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25),
      ])
      ),
      apellido: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25),
      ])
      ),
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"),
      ])
      ),
      contrasena: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ])
      ),
    })
  }

  ngOnInit(): void {
  }

  registerUser(data: any) {
    this.mostrarNotificacion = true;
    this.dataEnviada = `¡Has enviado tu información con éxito, ${data.nombre}!`
    setTimeout(() => this.mostrarNotificacion = false, 3000);
    this.registerForm.reset();
  }

}
