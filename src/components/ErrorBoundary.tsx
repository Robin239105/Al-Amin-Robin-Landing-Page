import React, { ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className="min-h-screen bg-bg-dark flex items-center justify-center p-4 text-center">
          <div className="max-w-md space-y-6">
            <h1 className="text-4xl font-bold text-accent-primary">Oops! Something went wrong.</h1>
            <p className="text-gray-400">
              The application encountered an unexpected error. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-accent-primary text-white rounded hover:bg-accent-primary/80 transition-colors font-mono"
            >
              Refresh Page
            </button>
            {error && (
              <pre className="mt-8 p-4 bg-bg-card border border-border-default rounded text-left text-xs text-red-400 overflow-auto max-h-40">
                {error.toString()}
              </pre>
            )}
          </div>
        </div>
      );
    }

    return children;
  }
}
