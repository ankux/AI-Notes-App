'use client'

import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { useQuery } from 'convex/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import UploadPdfDialog from './_components/UploadPdfDialog';

const Page = () => {
  const { user } = useUser();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const userEmail = user?.primaryEmailAddress?.emailAddress;

  const userFiles = useQuery(
    api.fileStorage.GetUserFiles,
    userEmail ? { userEmail } : undefined
  );

  const handleUpload = () => {
    UploadPdfDialog();
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h2 className='font-bold text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-8'> 
        Workspace 
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5'>
        {userFiles?.length > 0 ? userFiles?.map((file, index) => (
          <Link href={`/workspace/${file.fileId}`} key={index}>
            <div className='flex flex-col items-center justify-center gap-2 p-3 sm:p-4 border rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-200 min-h-[120px] sm:min-h-[150px]'>
              <Image 
                src={'/pdf.png'} 
                alt={file.fileName} 
                width={40} 
                height={40} 
                className="sm:w-[50px] sm:h-[50px]"
              />
              <h2 className='mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg font-medium text-center line-clamp-2'>
                {file.fileName}
              </h2>
            </div>
          </Link>
        )) : 
          (isMobile ? [1,2,3] : [1,2,3,4,5,6,7,8]).map((item, index) => (
            <div key={index} className='bg-slate-200 rounded-md h-[120px] sm:h-[150px] animate-pulse'>
            </div>
          ))
        }
      </div>

      {userFiles?.length === 0 && (
        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <Image 
              src="/pdf.png" 
              alt="No files" 
              width={80} 
              height={80} 
              className="mx-auto mb-4 opacity-50"
            />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No PDF files yet
            </h3>
            <p className="text-gray-600 mb-6">
              Upload your first PDF to start taking intelligent notes with AI assistance.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Page