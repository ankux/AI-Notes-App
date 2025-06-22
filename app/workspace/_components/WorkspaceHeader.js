import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React, { useState } from 'react'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useUser } from '@clerk/nextjs'
import { toast } from 'sonner'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const WorkspaceHeader = ({fileName, editor, fileId}) => {
  const [isSaveDialogOpen, setIsSaveDialogOpen] = useState(false);
  const saveNotes = useMutation(api.notes.AddNotes);
  const { user } = useUser();

  const handleSaveClick = () => {
    if (!editor) {
      toast.error('Editor not ready');
      return;
    }
    setIsSaveDialogOpen(true);
  };

  const handleConfirmSave = async () => {
    try {
      const notesContent = editor.getHTML();
      
      await saveNotes({
        notes: notesContent,
        fileId: fileId,
        createdBy: user?.primaryEmailAddress?.emailAddress || 'anonymous'
      });

      toast.success('Notes saved successfully!');
      setIsSaveDialogOpen(false);
    } catch (error) {
      console.error('Error saving notes:', error);
      toast.error('Failed to save notes');
    }
  };

  return (
    <>
      <div className='p-4 flex justify-between shadow-md'>
          <div className='flex items-center space-x-2'>
            <Image src={'/logo-cropped.svg'} alt='logo'  width={40} height={40}/>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SmartNotes
            </span>
          </div>
          <h1 className='text-xl font-bold'>{fileName}</h1>
          <div className='flex gap-2 items-center'>
            <Button onClick={handleSaveClick} disabled={!editor}>
              Save Notes
            </Button>
            <UserButton/>
          </div>
      </div>

      <Dialog open={isSaveDialogOpen} onOpenChange={setIsSaveDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Save Notes</DialogTitle>
            <DialogDescription>
              Are you sure you want to save the current notes? This will overwrite any existing notes for this file.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsSaveDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleConfirmSave}>
              Save Notes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default WorkspaceHeader