
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

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  remember: z.boolean().optional(),
})

type LoginFormValues = z.infer<typeof loginSchema>

const Login = () => {
  const { login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard',
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginFormValues) => {
    login({
      ...data,
      setErrors: () => {},
      setStatus: () => {},
    })
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-black text-white">
      {/* Left Column */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex items-center justify-center'>
                <Image 
                    alt='logo'
                    src='/assets/images/studimg-black.png'
                    width={300}
                    height={300}
                />
            </div>
            {/* Email Address */}
            <div className='mt-[-3rem] gap-3 flex flex-col'>
              <Label htmlFor="email" >Email</Label>
              <Input
                id="email"
                type="email"
                className="block mt-1 w-full px-3 py-2 bg-black text-white rounded-sm"
                placeholder='Studmind@gmail.com'
                
                {...register('email')}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="mt-4 flex flex-col gap-3">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                className="block mt-1 w-full px-3 py-2 bg-black text-white rounded-sm"
                placeholder='password'
                {...register('password')}
                
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember Me */}
            <div className="block mt-4">
              <label
                htmlFor="remember_me"
                className="inline-flex items-center"
              >
                <input
                  id="remember_me"
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  {...register('remember')}
                />
                <span className="ml-2 text-sm text-gray-600">
                  Remember me
                </span>
              </label>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end mt-4">
              <Link
                href="/forgot-password"
                className="underline text-sm  hover:text-gray-300"
              >
                Forgot your password?
              </Link>
              <Button className="ml-3 mind-button px-[2rem] py-2 text-md rounded-sm" type="submit" >
                Login
              </Button>
            </div>
            <div className='mt-2'>
                <p className=' text-gray-300'>
                    New to studmind.ai?
                    <Link href='/register' className='ml-1 underline '>Create Account </Link>
                </p>
            </div>
          </form>
        </div>
      </div>

      {/* Right Column */}
      <div className="hidden lg:flex w-1/2  items-center justify-center">
        <AuthBar/>
      </div>
    </div>
  )
}

export default Login
