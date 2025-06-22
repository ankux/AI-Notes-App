# SmartNotes - AI-Powered PDF Note-Taking App

[![Next.js](https://img.shields.io/badge/Next.js-15.1.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![LangChain](https://img.shields.io/badge/LangChain-%20AI-blue?style=for-the-badge&logo=langchain&logoColor=white)](https://www.langchain.com/)
[![Convex](https://img.shields.io/badge/Convex-1.18.2-orange?style=for-the-badge)](https://convex.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![ShadCN](https://img.shields.io/badge/ShadCN-UI-black?style=for-the-badge&logo=radixui&logoColor=white)](https://ui.shadcn.com/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-parr?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)
[![PayPal](https://img.shields.io/badge/PayPal-Payments-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.com/)



> Transform your PDFs into intelligent notes with AI-powered insights, semantic search, and real-time collaboration.


## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm
- Convex account
- Clerk account
- Google AI API key

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/ankux/ai-notes-app.git
   cd ai-notes-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file:
   ```env
   # All environment variables are listed below
   ```

4. **Set up Convex**
   ```bash
   npx convex dev
   ```
   
   Add your environment variables to Convex dashboard:
   - Go to your Convex project dashboard
   - Navigate to Settings → Environment Variables
   - Add `GEMINI_API_KEY` with your API key

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
ai-notes-app/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication pages
│   ├── api/                      # API routes
│   │   └── pdf-loader/           # PDF processing API
│   ├── dashboard/                # Main dashboard
│   │   ├── _components/          # Dashboard components
│   │   └── upgrade/              # Pro plan features
│   ├── workspace/                # Note-taking workspace
│   │   ├── _components/          # Editor components
│   │   └── [fileId]/             # Dynamic file pages
│   ├── globals.css               # Global styles
│   ├── layout.js                 # Root layout
│   └── page.js                   # Landing page
├── components/                   # Reusable UI components
│   └── ui/                       # shadcn/ui components
├── convex/                       # Convex backend
│   ├── _generated/               # Auto-generated types
│   ├── fileStorage.js            # File storage functions
│   ├── myAction.js               # AI actions
│   ├── notes.js                  # Notes CRUD operations
│   ├── schema.js                 # Database schema
│   └── user.js                   # User management
├── configs/                      # Configuration files
├── lib/                          # Utility functions
└── public/                       # Static assets
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `CONVEX_DEPLOYMENT` | Deployment used by `npx convex dev` | ✅ |
| `NEXT_PUBLIC_CONVEX_URL` | Convex deployment URL | ✅ |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key | ✅ |
| `CLERK_SECRET_KEY` | Clerk secret key | ✅ |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | assign this `/sign-in` | ✅ |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | assign this `/sign-up` | ✅ |
| `NEXT_PUBLIC_GEMINI_API_KEY` | Google Gemini API key | ✅ |
| `NEXT_PUBLIC_PAYPAL_CLIENT_ID` | Paypal payments API key | ✅ |



### Convex Setup

1. **Initialize Convex**
   ```bash
   npx convex dev
   ```

2. **Deploy to production**
   ```bash
   npx convex deploy
   ```

3. **Set environment variables in Convex dashboard**
   - `GEMINI_API_KEY` for AI embeddings

## 📖 Usage

### Getting Started

1. **Sign up/Login**: Create an account or sign in with Clerk
2. **Upload PDF**: Drag and drop or select a PDF file
3. **AI Processing**: Wait for the AI to process and embed your document
4. **Start Taking Notes**: Use the rich text editor to take notes
5. **Ask AI**: Use the "Ask AI" feature to get insights from your documents

### Features Guide

#### 📄 PDF Upload
- Supported formats: PDF
- Maximum file size: 10MB (configurable)
- Automatic text extraction and processing
- Progress tracking during upload

#### ✍️ Note Taking
- Rich text editor with formatting options
- Real-time auto-save
- Export notes in HTML format
- Collaborative editing (coming soon)

#### 🤖 AI Features
- **Ask AI**: Select text and ask questions
- **Semantic Search**: Find relevant content across documents
- **Smart Insights**: Get AI-generated summaries and key points

#### 🔍 Search & Organization
- Search across all your documents
- Filter by file type, date, or tags
- Organize files in folders (coming soon)


## 🤝 Contributing.

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Style

- Follow the existing code style
- Use Javascript for new features
- Add comments wherever necessary




## 🔮 Roadmap

- [ ] **Collaborative Editing**: Real-time collaboration on notes
- [ ] **Advanced AI Features**: Document summarization and key point extraction
- [ ] **Mobile App**: Native iOS and Android applications
- [ ] **API Access**: REST API for third-party integrations
- [ ] **Advanced Search**: Filters, tags, and advanced search operators
- [ ] **Export Options**: PDF, Markdown, and Word document export
- [ ] **Offline Support**: Offline note-taking with sync when online
- [ ] **Team Features**: Team workspaces and shared documents

---

<div align="center">
  <p>Made by <a href="https://github.com/ankux">ankux</a></p>
  <p>
    <a href="https://github.com/ankux/ai-notes-app/stargazers">
      <img src="https://img.shields.io/github/stars/ankux/ai-notes-app" alt="Stars">
    </a>
    <a href="https://github.com/ankux/ai-notes-app/network">
      <img src="https://img.shields.io/github/forks/ankux/ai-notes-app" alt="Forks">
    </a>
    <a href="https://github.com/ankux/ai-notes-app/issues">
      <img src="https://img.shields.io/github/issues/ankux/ai-notes-app" alt="Issues">
    </a>
  </p>
</div>
