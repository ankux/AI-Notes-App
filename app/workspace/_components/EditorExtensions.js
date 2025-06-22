import React, { useState } from 'react'
import { Bold, Italic, Strikethrough, Heading1, Heading2, Heading3, List, Code, ListOrdered, Highlighter, Quote, AlignLeft, AlignCenter, AlignRight, Underline, Sparkles, Download, Loader2 } from 'lucide-react'
import { useAction, useMutation } from 'convex/react'
import { api } from '../../../convex/_generated/api'
import { useParams } from 'next/navigation'
import { chatSession } from '@/configs/AIModel'
import { toast } from 'sonner'
import { useUser } from '@clerk/nextjs'

function EditorExtensions({editor}) {

    const { fileId } = useParams(); 
    const searchAI = useAction(api.myAction.search);
    const saveNotes = useMutation(api.notes.AddNotes);
    const {user} = useUser();
    const [isAiLoading, setIsAiLoading] = useState(false);

    // Function to handle the AI button click
    const onAiButtonClick = async () => {
        const selectedText = editor.state.doc.textBetween(
            editor.state.selection.from,
            editor.state.selection.to,
            ' '
        )

        if (selectedText.trim() === '') {
            toast.error('Please select some text first');
            return;
        }

        setIsAiLoading(true);

        try {
            const result = await searchAI({
                query: selectedText,
                fileId: fileId
            });

            const unformattedAns = JSON.parse(result);

            let allUnformattedAns = '';
            unformattedAns && unformattedAns.forEach(item => {
                allUnformattedAns += item.pageContent;
            });

            const PROMPT = "For the given question/query: " + selectedText + " and the following notes/references: " + allUnformattedAns + " , generate a response relevant to the question/query and the notes/references provided. The response should be in HTML format without it's boilerplate.";

            // Send the prompt to the AI model
            const AIModelResult = await chatSession.sendMessage(PROMPT);

            // Get the final answer from the AI model
            const finalAns = AIModelResult.response.text().replace('```', '').replace('html', '').replace('```', '');
            const allText = editor.getHTML();
            editor.commands.setContent(allText + "<p> <strong> Answer:  </strong> </p>" + finalAns);
            
            // Save the notes to the database
            saveNotes({
                notes: editor.getHTML(),
                fileId: fileId,
                createdBy: user?.primaryEmailAddress?.emailAddress
            });

            toast.success('AI response added successfully!');
        } catch (error) {
            console.error('Error getting AI response:', error);
            toast.error('Failed to get AI response. Please try again.');
        } finally {
            setIsAiLoading(false);
        }
    }

    // Function to handle download as HTML
    const handleDownload = () => {
        if (!editor) {
            toast.error('Editor not ready');
            return;
        }

        const notesContent = editor.getHTML();
        if (!notesContent || notesContent.trim() === '') {
            toast.error('No notes to download');
            return;
        }

        // Create a blob with the HTML content
        const blob = new Blob([notesContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        
        // Create a temporary link element and trigger download
        const link = document.createElement('a');
        link.href = url;
        link.download = `notes-${fileId}.html`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Clean up the URL object
        URL.revokeObjectURL(url);
        
        toast.success('Notes downloaded successfully!');
    };

  return editor && (
    <div className="border-b border-gray-200 p-2">
        <div className="flex gap-1">
            <button
                onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
                className={`p-2 rounded hover:bg-gray-100 transition-colors ${
                    editor?.isActive('heading', { level: 1 }) ? 'bg-gray-200 text-gray-900' : 'text-gray-600'
                }`}
                title="Heading 1"
            >
                <Heading1 size={16} />
            </button>
            
            <button
                onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
                className={`p-2 rounded hover:bg-gray-100 transition-colors ${
                    editor?.isActive('heading', { level: 2 }) ? 'bg-gray-200 text-gray-900' : 'text-gray-600'
                }`}
                title="Heading 2"
            >
                <Heading2 size={16} />
            </button>

            <button
                onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
                className={`p-2 rounded hover:bg-gray-100 transition-colors ${
                    editor?.isActive('heading', { level: 3 }) ? 'bg-gray-200 text-gray-900' : 'text-gray-600'
                }`}
                title="Heading 3"
            >
                <Heading3 size={16} />
            </button>
            
            <button
                onClick={() => editor?.chain().focus().toggleBold().run()}
                className={`p-2 rounded hover:bg-gray-100 transition-colors ${
                    editor?.isActive('bold') ? 'bg-gray-200 text-gray-900' : 'text-gray-600'
                }`}
                title="Bold"
            >
                <Bold size={16} />
            </button>
            
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={`p-2 rounded hover:bg-gray-100 transition-colors ${
                    editor.isActive('italic') ? 'bg-gray-200 text-gray-900' : 'text-gray-600'
                }`}
                title="Italic"
            >
                <Italic size={16} />
            </button>
            
            <button
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                className={`p-2 rounded hover:bg-gray-100 transition-colors ${
                    editor.isActive('underline') ? 'bg-gray-200 text-gray-900' : 'text-gray-600'
                }`}
                title="Underline"
            >
                <Underline size={16} />
            </button>

            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={`p-2 rounded hover:bg-gray-100 transition-colors ${
                    editor.isActive('strike') ? 'bg-gray-200 text-gray-900' : 'text-gray-600'
                }`}
                title="Strikethrough"
            >
                <Strikethrough size={16} />
            </button>

            <button
                onClick={() => editor.chain().focus().toggleCode().run()}
                className={`p-2 rounded hover:bg-gray-100 transition-colors ${
                    editor.isActive('code') ? 'bg-gray-200 text-gray-900' : 'text-gray-600'
                }`}
                title="Code"
            >
                <Code size={16} />
            </button>

            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`p-2 rounded hover:bg-gray-100 transition-colors ${
                    editor.isActive('orderedList') ? 'bg-gray-200 text-gray-900' : 'text-gray-600'
                }`}
                title="Ordered List"
            >
                <ListOrdered size={16} />
            </button>

            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`p-2 rounded hover:bg-gray-100 transition-colors ${
                    editor.isActive('bulletList') ? 'bg-gray-200 text-gray-900' : 'text-gray-600'
                }`}
                title="Bullet List"
            >
                <List size={16} />
            </button>

            <button
                onClick={() => editor.chain().focus().toggleHighlight().run()}
                className={`p-2 rounded hover:bg-gray-100 transition-colors ${
                    editor.isActive('highlight') ? 'bg-gray-200 text-gray-900' : 'text-gray-600'
                }`}
                title="Highlight"
            >
                <Highlighter size={16} />
            </button>

            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={`p-2 rounded hover:bg-gray-100 transition-colors ${
                    editor.isActive('blockquote') ? 'bg-gray-200 text-gray-900' : 'text-gray-600'
                }`}
                title="Blockquote"
            >
                <Quote size={16} />
            </button>

            <button
                onClick={() => editor.chain().focus().setTextAlign('left').run()}
                className={`p-2 rounded hover:bg-gray-100 transition-colors ${
                    editor.isActive({ textAlign: 'left' }) ? 'bg-gray-200 text-gray-900' : 'text-gray-600'
                }`}
                title="Align Left"
            >
                <AlignLeft size={16} />
            </button>

            <button
                onClick={() => editor.chain().focus().setTextAlign('center').run()}
                className={`p-2 rounded hover:bg-gray-100 transition-colors ${
                    editor.isActive({ textAlign: 'center' }) ? 'bg-gray-200 text-gray-900' : 'text-gray-600'
                }`}
                title="Align Center"  
            >
                <AlignCenter size={16} />
            </button>

            <button
                onClick={() => editor.chain().focus().setTextAlign('right').run()}
                className={`p-2 rounded hover:bg-gray-100 transition-colors ${
                    editor.isActive({ textAlign: 'right' }) ? 'bg-gray-200 text-gray-900' : 'text-gray-600'
                }`}
                title="Align Right"
            >
                <AlignRight size={16} />
            </button>
            
            <button
                onClick={() => handleDownload()}
                className={`p-2 rounded hover:bg-gray-100 transition-colors ${
                    editor.isActive({ textAlign: 'right' }) ? 'bg-gray-200 text-gray-900' : 'text-gray-600'
                }`}
                title="Download Notes"
            >
                <Download size={16} className='inline-block mb-1'/> 
            </button>

            <button
                onClick={() => onAiButtonClick()}
                disabled={isAiLoading}
                className={`p-1 pl-3 pr-3 rounded transition-all shadow-md ${
                    isAiLoading 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-80'
                } text-white`}
                title="Generate AI Notes"
            >
                {isAiLoading ? (
                    <Loader2 size={16} className='inline-block mb-1 animate-spin'/>
                ) : (
                    <Sparkles size={16} className='inline-block mb-1'/>
                )}
                {isAiLoading ? 'Thinking...' : 'Ask AI'}
            </button>
        </div>
    </div>
  )
}

export default EditorExtensions