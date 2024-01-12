"use client"

import { FC, ReactNode } from 'react'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';

interface ProvidersProps {
    children: ReactNode
}

const Providers: FC<ProvidersProps> = ({children}) => {
    const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default Providers