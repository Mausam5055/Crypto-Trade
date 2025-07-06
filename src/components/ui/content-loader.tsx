
import { Skeleton } from "./skeleton";

interface ContentLoaderProps {
  type: 'text' | 'image' | 'video' | 'card' | 'button';
  lines?: number;
  className?: string;
}

export const ContentLoader = ({ type, lines = 1, className = "" }: ContentLoaderProps) => {
  switch (type) {
    case 'text':
      return (
        <div className={`space-y-2 ${className}`}>
          {Array.from({ length: lines }).map((_, i) => (
            <Skeleton 
              key={i} 
              className={`h-4 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`} 
            />
          ))}
        </div>
      );
    
    case 'image':
      return (
        <Skeleton className={`w-full h-64 rounded-lg ${className}`} />
      );
    
    case 'video':
      return (
        <div className={`relative ${className}`}>
          <Skeleton className="w-full h-96 rounded-2xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
        </div>
      );
    
    case 'card':
      return (
        <div className={`p-6 space-y-4 ${className}`}>
          <div className="flex items-center space-x-4">
            <Skeleton className="w-12 h-12 rounded-xl" />
            <Skeleton className="h-6 w-32" />
          </div>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      );
    
    case 'button':
      return (
        <Skeleton className={`h-12 w-32 rounded-2xl ${className}`} />
      );
    
    default:
      return <Skeleton className={`h-4 w-full ${className}`} />;
  }
};
