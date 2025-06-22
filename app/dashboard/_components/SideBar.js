'use client'

import { Button } from '@/components/ui/button'
import { Progress } from "@/components/ui/progress"
import { Layout, Shield, Check, Crown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import UploadPdfDialog from './UploadPdfDialog'
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { useQuery } from 'convex/react';
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const SideBar = () => {
    const { user } = useUser();
    const path = usePathname();

    const userEmail = user?.primaryEmailAddress?.emailAddress;
    const userInfo = useQuery(api.user.getUserInfo, userEmail ? { userEmail } : undefined);
  
    const userFiles = useQuery(
      api.fileStorage.GetUserFiles,
      userEmail ? { userEmail } : undefined
    );

  return (
    <div className='shadow-md h-screen p-7'>
        <div className='flex items-center space-x-2'>
          <Image src={'/logo-cropped.svg'} alt='logo' width={40} height={40} />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            SmartNotes
          </span>
        </div>

        <div className='mt-10'>

            <UploadPdfDialog isMaxLimit={(userFiles?.length >= 5 ? true : false) && !userInfo?.upgrade}>
                <Button className='w-full'>+ Upload PDF</Button>
            </UploadPdfDialog>

            <Link href='/dashboard'>
                <div className={`flex gap-2 items-center p-3 mt-5 hover:bg-slate-100 rounded-lg cursor-pointer ${path === '/dashboard' ? 'bg-slate-100' : ''}`}>
                    <Layout/>
                    <h2>Workspace</h2>
                </div>
            </Link>

            {userInfo?.upgrade ? (
                <div className='flex gap-2 items-center p-3 mt-1 bg-green-50 text-green-700 rounded-lg'>
                    <Crown className='text-green-600'/>
                    <h2>Pro Plan</h2>
                    <Check className='ml-auto text-green-600' size={16}/>
                </div>
            ) : (
                <Link href='/dashboard/upgrade'>
                    <div className={`flex gap-2 items-center p-3 mt-1 hover:bg-slate-100 rounded-lg cursor-pointer ${path === '/dashboard/upgrade' ? 'bg-slate-100' : ''}`}>
                        <Shield/>
                        <h2>Upgrade</h2>
                    </div>
                </Link>
            )}
        </div>

        {!userInfo?.upgrade && <div className='absolute bottom-24 w-[80%]'>
            <Progress value={(userFiles?.length / 5) * 100} />
                <p className='text-sm mt-1'>{userFiles?.length} out of 5 PDF Uploaded</p>
                <p className='text-sm text-gray-400 mt-2'>Upgrade to upload more PDF</p>
            </div> 
        }

    </div>
  )
}

export default SideBar