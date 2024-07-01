import { z } from "zod";
const signupSchema = z
  .object({
    firstName: z
      .string()
      .min(3, { message: "First name must be 3 character at least" }),
    lastName: z
      .string()
      .min(3, { message: "Last name must be 3 character at least" }),
    email: z.string().min(3, { message: "Email address is required" }).email(),
    password: z
      .string()
      .min(8, { message: "Password should be 8 character at least" })
      .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
        message: "Password should contain at least 1 special character",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and Confirm Password dose not match",
    path: ["confirmPassword"],
  });
type signupTypes = z.infer<typeof signupSchema>;
export { signupSchema, type signupTypes };
