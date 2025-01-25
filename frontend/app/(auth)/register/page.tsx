'use client'

import Input from '@/components/Input'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import AuthBar from '@/components/shared/AuthBar'

const registerSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  // passwordConfirmation: z
  //   .string()
  //   .min(6, 'Password confirmation must be at least 6 characters long'),
})
  // .refine(data => data.password === data.passwordConfirmation, {
  // message: 'Passwords do not match',
  // path: ['passwordConfirmation'],
// })

type RegisterFormValues = z.infer<typeof registerSchema>

const Register = () => {
  const { register: authRegister } = useAuth({
    middleware: 'auth',
    redirectIfAuthenticated: '/dashboard',
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = (data: RegisterFormValues) => {
    authRegister({
      name: data.name,
      email: data.email,
      password: data.password,
      // password_confirmation: data.passwordConfirmation,
      setErrors: () => {},
    })
    console.log(data);
  }

  return (
    <div className="flex flex-col lg:flex-row h-full bg-black text-white">
      {/* Left Column */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          <div className="flex flex-col gap-2 items-center justify-center text-center">
            <Image
              alt="logo"
              src="/assets/images/studimg-black.png"
              width={300}
              height={300}
              className="mb-[-3rem]"
            />
            <div className="pb-[3rem]">
              <h1 className="text-2xl font-bold text-white">Create an account</h1>
              <p className="text-balance text-sm text-muted-foreground text-white">
                Fill in the details below to register your account
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div className="mt-[-3rem] gap-3 flex flex-col">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                className="block mt-1 w-full px-3 py-2 bg-black text-white rounded-sm"
                placeholder="Your Name"
                {...register('name')}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div className="mt-4 gap-3 flex flex-col">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                className="block mt-1 w-full px-3 py-2 bg-black text-white rounded-sm"
                placeholder="Studmind@gmail.com"
                {...register('email')}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="mt-4 gap-3 flex flex-col">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                className="block mt-1 w-full px-3 py-2 bg-black text-white rounded-sm"
                placeholder="Password"
                {...register('password')}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="mt-4 gap-3 flex flex-col">
              <Label htmlFor="passwordConfirmation">Confirm Password</Label>
              <Input
                id="passwordConfirmation"
                type="password"
                className="block mt-1 w-full px-3 py-2 bg-black text-white rounded-sm"
                placeholder="Confirm Password"
                {...register('passwordConfirmation')}
              />
              {errors.passwordConfirmation && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.passwordConfirmation.message}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-center mt-4">
              <Button
                className="ml-3 mind-button px-[2rem] py-2 w-full text-md rounded-sm"
                type="submit"
              >
                Register
              </Button>
            </div>
            <div className="relative my-1 text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
              <span className="relative z-10 bg-black text-white px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
              <Button className="w-full rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-5 w-5 mr-2">
                      <path fill="#EA4335" d="M24 9.5c3.36 0 6.09 1.18 8.01 3.09l5.92-5.92C34.53 3.7 29.74 2 24 2 14.82 2 7.1 7.94 4.05 16.02l6.93 5.38C12.46 15.5 17.74 9.5 24 9.5z" />
                      <path fill="#34A853" d="M24 44c5.48 0 10.09-1.82 13.46-4.95l-6.68-5.47c-1.86 1.25-4.26 2.02-6.78 2.02-5.18 0-9.57-3.51-11.15-8.24l-7.03 5.44C7.94 39.8 15.4 44 24 44z" />
                      <path fill="#4A90E2" d="M44 24c0-1.57-.14-3.08-.41-4.55H24v9.14h11.32c-.5 2.56-1.91 4.73-3.92 6.24l6.68 5.47C41.51 36.44 44 30.76 44 24z" />
                      <path fill="#FBBC05" d="M6.98 14.76l7.03 5.44C15.16 14.97 19.28 12 24 12c3.36 0 6.09 1.18 8.01 3.09l5.92-5.92C34.53 3.7 29.74 2 24 2 14.82 2 7.1 7.94 4.05 16.02z" />
                      <path fill="none" d="M0 0h48v48H0z" />
                  </svg>
                  Signup with Google
              </Button>
              <Button className="w-full rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                      fill="currentColor"
                      />
                  </svg>
                  Signup with GitHub
              </Button>
            </div>
            <div className="text-center mt-4">
              <Link
                href="/login"
                className="underline text-sm hover:text-gray-300"
              >
                Already registered? Login here.
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right Column */}
      <div className="hidden lg:flex w-1/2 items-center justify-center">
        <AuthBar />
      </div>
    </div>
  )
}

export default Register
