import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'info' | 'error';
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-md w-[calc(100vw-3rem)] pointer-events-none">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </div>
  );
};

const ToastItem: React.FC<{ toast: ToastMessage; onDismiss: (id: string) => void }> = ({
  toast,
  onDismiss,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(toast.id);
    }, 4500);
    return () => clearTimeout(timer);
  }, [toast.id, onDismiss]);

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-fuchsia-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-purple-400 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />,
  };

  const borderColors = {
    success: 'border-fuchsia-500/40 shadow-fuchsia-500/10',
    info: 'border-purple-500/40 shadow-purple-500/10',
    error: 'border-rose-500/40 shadow-rose-500/10',
  };

  const type = toast.type || 'success';

  return (
    <div
      className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl bg-[#120726]/90 backdrop-blur-xl border ${borderColors[type]} shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-5`}
      role="alert"
    >
      {icons[type]}
      <div className="flex-1 text-left min-w-0">
        <h4 className="text-sm font-semibold text-white">{toast.title}</h4>
        {toast.description && (
          <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">{toast.description}</p>
        )}
      </div>
      <button
        onClick={() => onDismiss(toast.id)}
        className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
