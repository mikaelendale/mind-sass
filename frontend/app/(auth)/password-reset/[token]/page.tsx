'use client'

import Input from '@/components/Input'
import Label from '@/components/Label'
import { useAuth } from '@/hooks/auth'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'

const passwordResetSchema = z
  .object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'Passwords must match',
    path: ['passwordConfirmation'],
  })

type PasswordResetFormValues = z.infer<typeof passwordResetSchema>

const PasswordReset = () => {
  const searchParams = useSearchParams()
  const { resetPassword } = useAuth({ middleware: 'guest' })

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PasswordResetFormValues>({
    resolver: zodResolver(passwordResetSchema),
  })

  const onSubmit = (data: PasswordResetFormValues) => {
    resetPassword({
      email: data.email,
      password: data.password,
      password_confirmation: data.passwordConfirmation,
      setErrors: () => {}, // Handle errors as needed
      setStatus: () => {}, // Handle status as needed
    })
  }

  useEffect(() => {
    const email = searchParams.get('email')
    if (email) {
      setValue('email', email)
    }
  }, [searchParams, setValue])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md p-6 bg-black rounded shadow-md shadow-gray-500">
        <h2 className="text-xl font-semibold text-center mb-4">Reset Password</h2>

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
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              className="block mt-1 w-full px-3 py-2 border rounded-md bg-black text-white"
              placeholder="Enter your new password"
              {...register('password')}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <Label htmlFor="passwordConfirmation">Confirm Password</Label>
            <Input
              id="passwordConfirmation"
              type="password"
              className="block mt-1 w-full px-3 py-2 border rounded-md bg-black text-white"
              placeholder="Confirm your new password"
              {...register('passwordConfirmation')}
            />
            {errors.passwordConfirmation && (
              <p className="text-red-500 text-sm mt-1">
                {errors.passwordConfirmation.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-end mt-4">
            <Button type="submit" className="px-4 py-2 text-white bg-indigo-600 rounded-md">
              Reset Password
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PasswordReset
