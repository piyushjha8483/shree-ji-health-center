import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-200 border-t-amber-600 rounded-full animate-spin mx-auto mb-4" />
          <p className="h-font text-amber-700 text-lg">Loading...</p>
          <p className="hi text-gray-500 text-sm mt-1">राधे राधे 🙏</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return children;
}
