import React from 'react'
import { Bold, Italic, Strikethrough, Heading1, Heading2, Heading3, List, Code, ListOrdered, Highlighter, Quote, AlignLeft, AlignCenter, AlignRight, Underline, Sparkles } from 'lucide-react'
import { useAction } from 'convex/react'
import { api } from '../../../convex/_generated/api'
import { useParams } from 'next/navigation'
import { chatSession } from '@/configs/AIModel'

function EditorExtensions({editor}) {

    const { fileId } = useParams(); 
    const searchAI = useAction(api.myAction.search);
    const onAiButtonClick = async () => {
        const selectedText = editor.state.doc.textBetween(
            editor.state.selection.from,
            editor.state.selection.to,
            ' '
        )

        if (selectedText.trim() === '') {
            alert('Please select some text first');
            return;
        }

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

        const AIModelResult = await chatSession.sendMessage(PROMPT);

        const finalAns = AIModelResult.response.text().replace('```', '').replace('html', '').replace('```', '');
        const allText = editor.getHTML();
        editor.commands.setContent(allText + "<p> <strong> Answer:  </strong> </p>" + finalAns);

    }

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
                onClick={() => onAiButtonClick()}
                className="p-2 rounded hover:opacity-80 transition-all bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                title="Generate AI Notes"
            >
                <Sparkles size={16} className='inline-block mb-1'/> Ask AI
            </button>



        </div>
    </div>
  )
}

export default EditorExtensions