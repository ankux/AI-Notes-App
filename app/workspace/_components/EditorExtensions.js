import React from 'react'
import { Bold, Italic, Strikethrough, Heading1, Heading2, Heading3, List, Code, ListOrdered, Highlighter, Quote, AlignLeft, AlignCenter, AlignRight, Underline } from 'lucide-react'


function EditorExtensions({editor}) {
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

        </div>
    </div>
  )
}

export default EditorExtensions