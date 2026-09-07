'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        // Last-resort recovery UI for client-only conversation failures.
        <div className="flex flex-col items-center justify-center min-h-[320px] p-8 text-center">
          <div className="max-w-md">
            <h2 className="text-lg font-semibold text-destructive mb-3">
              Something went wrong
            </h2>
            <p className="text-muted-foreground text-sm mb-4">
              An error occurred while loading the conversation. Please try refreshing the page.
            </p>
            {this.state.error && (
              <p className="text-xs text-muted-foreground/80 font-mono bg-destructive/10 border border-destructive/20 rounded-lg p-2.5 mb-6 text-left overflow-auto max-h-32 whitespace-pre-wrap break-words">
                {this.state.error.message || String(this.state.error)}
              </p>
            )}
            <div className="flex items-center justify-center gap-3">
              <Button
                variant="outline"
                onClick={() => this.setState({ hasError: false, error: undefined })}
              >
                Try Again
              </Button>
              <Button onClick={() => window.location.reload()}>
                Refresh Page
              </Button>
            </div>
          </div>
        </div>
      );
    }

    // Happy path: render the wrapped conversation subtree unchanged.
    return this.props.children;
  }
}
