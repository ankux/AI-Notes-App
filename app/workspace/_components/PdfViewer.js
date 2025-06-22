import React, { useState } from 'react'
import { Loader2 } from 'lucide-react'

const PdfViewer = ({fileUrl}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
        setIsLoading(false);
    };

    const handleError = () => {
        setIsLoading(false);
        setHasError(true);
    };

    if (!fileUrl) {
        return (
            <div className="h-[90vh] w-full flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2 text-gray-400" />
                    <p className="text-gray-500">Loading PDF...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative">
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
                    <div className="text-center">
                        <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2 text-gray-400" />
                        <p className="text-gray-500">Loading PDF...</p>
                    </div>
                </div>
            )}
            
            {hasError && (
                <div className="h-[90vh] w-full flex items-center justify-center bg-gray-50">
                    <div className="text-center">
                        <p className="text-red-500 mb-2">Failed to load PDF</p>
                        <p className="text-gray-500 text-sm">Please try refreshing the page</p>
                    </div>
                </div>
            )}

            <iframe 
                src={fileUrl + "#toolbar=0"} 
                className='h-[90vh] w-full'
                onLoad={handleLoad}
                onError={handleError}
                style={{ opacity: isLoading ? 0 : 1 }}
            />
        </div>
    )
}

export default PdfViewer