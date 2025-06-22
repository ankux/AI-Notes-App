"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import WorkspaceHeader from '../_components/WorkspaceHeader';
import PdfViewer from '../_components/PdfViewer';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import TextEditor from '../_components/TextEditor';
import { Laptop, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Workspace = () => {
    const {fileId} = useParams();
    const [editor, setEditor] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
          setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const fileInfo = useQuery(api.fileStorage.GetFileRecord, {
        fileId: fileId
    })

    const handleEditorReady = (editorInstance) => {
        setEditor(editorInstance);
    };

    if (isMobile) {
        return (
          <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm">
              <Laptop className="h-16 w-16 mx-auto text-blue-500 mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Desktop View Recommended
              </h2>
              <p className="text-gray-600 mb-8">
                The workspace is best experienced on a larger screen. Please switch to a desktop or tablet for full functionality.
              </p>
              <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        );
    }

    return (
        <div>
            <WorkspaceHeader fileName={fileInfo?.fileName} editor={editor} fileId={fileId} />
            <div className='grid grid-cols-2 gap-5'>
                <div>
                    <TextEditor fileId={fileId} onEditorReady={handleEditorReady}/>
                </div>
                <div>
                    <PdfViewer fileUrl={fileInfo?.fileUrl} />
                </div>
            </div>
        </div>
    )
}

export default Workspace