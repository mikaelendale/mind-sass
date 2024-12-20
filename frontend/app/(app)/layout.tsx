/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useAuth } from '@/hooks/auth'
// import Navigation from '@/app/(app)/Navigation'
import Loading from '@/app/(app)/Loading'

const AppLayout = ({ children }:any) => {
    const { user } = useAuth({ middleware: 'guest' })

    if (!user) {
        return <Loading />
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {/* <Navigation user={user} /> */}

            <main>{children}</main>
        </div>
    )
}

export default AppLayout
