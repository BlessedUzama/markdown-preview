import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError : false}
    }  

    
    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an Error:", error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
              <div className="p-4 m-4 border border-red-500 rounded bg-red-50 text-red-700">
                <h2 className="font-bold mb-2">Something went wrong.</h2>
                <p>Please try again later or refresh the page.</p>
              </div>
            );
        }
        return this.props.children
    }
}

export default ErrorBoundary