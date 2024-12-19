'use client'

import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

// Define a schema for potential future extensibility
const resendVerificationSchema = z.object({})

const Page = () => {
  const { logout, resendEmailVerification } = useAuth({
    middleware: 'auth',
    redirectIfAuthenticated: '/dashboard',
  })

  const [status, setStatus] = useState<string | null>(null)

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(resendVerificationSchema),
  })

  const handleResendVerification = () => {
    resendEmailVerification({ setStatus })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h2 className="text-xl font-semibold text-center mb-4">
          Email Verification
        </h2>

        <p className="mb-4 text-sm text-gray-600">
          Thanks for signing up! Before getting started, could you verify your
          email address by clicking on the link we just emailed to you? If you
          didn’t receive the email, we will gladly send you another.
        </p>

        {status === 'verification-link-sent' && (
          <div className="mb-4 font-medium text-sm text-green-600">
            A new verification link has been sent to the email address you
            provided during registration.
          </div>
        )}

        <form onSubmit={handleSubmit(handleResendVerification)}>
          <div className="mt-4 flex items-center justify-between">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Resend Verification Email'}
            </Button>

            <button
              type="button"
              className="underline text-sm text-gray-600 hover:text-gray-900"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Page
