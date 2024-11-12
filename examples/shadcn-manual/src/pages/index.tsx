import * as React from 'react';
import { createFileRoute } from '@umijs/tnf/router';
import { Terminal } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../components/Alert';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div className="w-1/2 mx-auto">
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          This is a demo of shadcn/ui(manual installation) in tnf.
        </AlertDescription>
      </Alert>
    </div>
  );
}
