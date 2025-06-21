import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import EditorExtensions from './EditorExtensions'
import Underline from '@tiptap/extension-underline'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'

function TextEditor() {
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
    
    return (
    <div>
        <EditorExtensions editor={editor} />
        <div>
            <EditorContent editor={editor} />
        </div>
    </div>
    )
}

export default TextEditor