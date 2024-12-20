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
  passwordConfirmation: z
    .string()
    .min(6, 'Password confirmation must be at least 6 characters long'),
}).refine(data => data.password === data.passwordConfirmation, {
  message: 'Passwords do not match',
  path: ['passwordConfirmation'],
})

type RegisterFormValues = z.infer<typeof registerSchema>

const Register = () => {
  const { register: authRegister } = useAuth({
    middleware: 'guest',
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
      password_confirmation: data.passwordConfirmation,
      setErrors: () => {},
    })
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
            <div className="flex flex-col items-center justify-center gap-2">
              <Button className="w-full rounded-md">
                Signup with Google
              </Button>
              <Button className="w-full rounded-md">
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
