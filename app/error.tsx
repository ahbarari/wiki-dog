'use client';

import React from 'react';
import { NextPage } from 'next';

interface ErrorPageProps {
    error: Error;
    reset: () => void;
}

const ErrorPage: NextPage<ErrorPageProps> = ({ error, reset }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-red-600">Something went wrong!</h1>
            <p className="mt-4 text-lg">{error.message}</p>
            <button
                onClick={() => reset()}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Try Again
            </button>
        </div>
    );
};

export default ErrorPage;
