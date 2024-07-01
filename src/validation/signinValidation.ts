import { z } from "zod";
const signinSchema = z.object({
  email: z.string().min(3, { message: "Email address is required" }).email(),
  password: z.string().min(8, { message: "Password is required" }),
});

type signinpTypes = z.infer<typeof signinSchema>;
export { signinSchema, type signinpTypes };
