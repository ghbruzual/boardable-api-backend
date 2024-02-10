import { z } from "zod";

export const SignUpSchema = z.object({
  username: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string"
  }),
  password: z.string({
    required_error: "Email is required",
    invalid_type_error: "Name must be a string"
  }).min(8, { 
    message: "Must be 8 or longer"
  }),
});

export type UserParams = z.infer<typeof SignUpSchema>;