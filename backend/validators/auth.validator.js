
import { body } from 'express-validator'

export const registerValidator = [

  body('username')
    .notEmpty().withMessage("El nombre de usuario es obligatorio")
    .isLength({min: 3}).withMessage("El nombre debe tener al menos 3 caracteres"),

  body('email')
    .notEmpty().withMessage("El email es obligatorio")
    .isEmail().withMessage("Debes ingresar un correo válido"),

  body('password')
    .notEmpty().withMessage("La contraseña es obligatoria")
    .isLength({min: 6}).withMessage("La contraseña debe tener mínimo 6 caracteres.")
]

export const loginValidator = [
  body('email')
    .notEmpty().withMessage("El email es obligatorio")
    .isEmail().withMessage("Debes ingresar un correo válido"),

  body('password')
    .notEmpty().withMessage("La contraseña es obligatoria")
]


