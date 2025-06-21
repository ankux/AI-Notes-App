'use client'

import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { useQuery } from 'convex/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const page = () => {
  const { user } = useUser();

  const userEmail = user?.primaryEmailAddress?.emailAddress;

  const userFiles = useQuery(
    api.fileStorage.GetUserFiles,
    userEmail ? { userEmail } : undefined
  );

  return (
    <div>
      <h2 className='font-bold text-3xl'> Workspace </h2>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols4 xl:grid-cols-5 gap-5 mt-10'>
        {userFiles?.length > 0 ? userFiles?.map((file, index) => (
          <Link href={`/workspace/${file.fileId}`} key={index}>
            <div className='flex flex-col items-center justify-center gap-2 p-4 border rounded-lg shadow-md cursor-pointer'>
              <Image src={'/pdf.png'} alt={file.fileName} width={50} height={50} />
              <h2 className='mt-3 text-lg font-medium'>{file.fileName}</h2>
            </div>
          </Link>
        )) : 
          [1,2,3,4,5,6,7,8].map((item, index) => (
            <div key={index} className='bg-slate-200 rounded-md h-[150px] animate-pulse'>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default page