import React from 'react'
import { useAppRoutes } from './hooks'

import { routes } from './routes/routes'

type AppLayoutProps = {
    children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
    
    const appRoutes = useAppRoutes(routes)

    return (
        <>
            {appRoutes}
            {children}
        </>
    )
}