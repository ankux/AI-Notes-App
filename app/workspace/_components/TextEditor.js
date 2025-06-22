import React, { useEffect } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import EditorExtensions from './EditorExtensions'
import Underline from '@tiptap/extension-underline'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'

function TextEditor({fileId, onEditorReady}) {

    const notes = useQuery(api.notes.GetNotes, {
        fileId: fileId,
    });

    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: 'Take notes here...',
            }),
            Underline,
            Highlight,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
                alignments: ['left', 'center', 'right'],
                defaultAlignment: 'left',
            }),
        ],
        content: '',
        editorProps: {
            attributes: {
                class: 'focus:outline-none h-screen p-5'
            }
        }
    })

    useEffect(() => {
        if (notes && editor) {
            editor.commands.setContent(notes);
        }
    }, [notes && editor]);

    useEffect(() => {
        if (editor && onEditorReady) {
            onEditorReady(editor);
        }
    }, [editor, onEditorReady]);

    // Show skeleton while notes are being fetched
    if (notes === undefined) {
        return (
            <div>
                {/* Skeleton Toolbar */}
                <div className="border-b border-gray-200 p-2 flex gap-1">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
                    ))}
                    <div className="h-8 w-24 bg-gray-100 rounded ml-4 animate-pulse" />
                </div>
                {/* Skeleton Text Area */}
                <div className="overflow-scroll h-[88vh] bg-gray-50 p-5">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="h-4 w-full max-w-[90%] bg-gray-200 rounded mb-3 animate-pulse" />
                    ))}
                </div>
            </div>
        );
    }

    return (
    <div>
        <EditorExtensions editor={editor} />
        <div className='overflow-scroll h-[88vh]'>
            <EditorContent editor={editor} />
        </div>
    </div>
    )
}

export default TextEditor