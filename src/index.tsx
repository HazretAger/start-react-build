import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from './app/routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import './app/styles/global.scss';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <Router />
    </StrictMode>
  </QueryClientProvider>
);
