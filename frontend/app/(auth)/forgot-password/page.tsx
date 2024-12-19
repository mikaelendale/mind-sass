'use client'

import Input from '@/components/Input'
import Label from '@/components/Label'
import { useAuth } from '@/hooks/auth'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'
import Link from 'next/link'

const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
})

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>

const Page = () => {
  const { forgotPassword } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard',
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
  })

  const onSubmit = (data: ForgotPasswordFormValues) => {
    forgotPassword({
      email: data.email,
      setErrors: () => {}, 
      setStatus: () => {}, 
    })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-gray-100">
      <div className="w-full max-w-md p-6 bg-black text-gray-300 rounded shadow-md shadow-gray-500">
        <h2 className="text-xl font-semibold text-center mb-4">
          Forgot Password
        </h2>
        <div className="mb-4 text-sm text-gray-400">
          Forgot your password? No problem. Just let us know your email address,
          and we will email you a password reset link that will allow you to
          choose a new one.
        </div>

        {/* Session Status */}
        <AuthSessionStatus className="mb-4" status={null} />

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Address */}
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              className="block mt-1 w-full px-3 py-2 border rounded-md bg-black text-white"
              placeholder="Enter your email"
              {...register('email')}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-end mt-4">
            <Button type="submit" className="px-4 py-2 text-white bg-indigo-600 rounded-md">
              Email Password Reset Link
            </Button>
          </div>
        </form>
      </div>
        <div className='flex items-center justify-center mt-5'>
            <Link href='/login'>
                <p className='text-gray-300 text-md'>Back to Login</p>
            </Link>
        </div>
    </div>
  )
}

export default Page
