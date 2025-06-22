"use client"

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { UserButton, useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";
import { useEffect } from "react";
import { ArrowRight, Sparkles, FileText, Brain, Download, Shield, Zap, CheckCircle, Github } from "lucide-react";
import Link from "next/link";

export default function Home() {

  const { user } = useUser();
  const createUser = useMutation(api.user.createUser)

  useEffect(()=>{
    user && CheckUser();
  }, [user])

  const CheckUser = async () => {
    const result = await createUser({
      email: user?.primaryEmailAddress.emailAddress,
      imageUrl: user?.imageUrl,
      userName: user?.fullName
    })
  }

  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Powered Notes",
      description: "Get intelligent insights and answers from your PDF content using advanced AI technology."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "PDF Integration",
      description: "Upload and analyze PDF documents with seamless text extraction and processing."
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Smart Search",
      description: "Find relevant information instantly with AI-powered semantic search across your documents."
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Export Notes",
      description: "Download your notes in HTML format with all formatting preserved."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Private",
      description: "Your documents and notes are securely stored with enterprise-grade security."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-time Sync",
      description: "Your notes sync automatically across all devices in real-time."
    }
  ];

  const benefits = [
    "Save hours of manual note-taking",
    "Get instant answers from your documents",
    "Organize research efficiently",
    "Collaborate with AI assistance",
    "Access notes anywhere, anytime"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src="/logo-cropped.svg" alt="Logo" width={40} height={40} />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            SmartNotes
          </span>
        </div>
        <div className="flex items-center space-x-4">
          {user ? (
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Go to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <Link href="/sign-in">
              <Button variant="outline" className="mr-2">
                Sign In
              </Button>
            </Link>
          )}
          <UserButton />
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Transform Your PDFs into
            <br />
            <span className="text-gray-900">Intelligent Notes</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Upload PDFs, ask questions, and get AI-powered insights. Create, organize, and export your notes with the power of artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <Link href="/dashboard">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3">
                  Start Taking Notes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            ) : (
              <Link href="/sign-up">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            )}
            <Button size="lg" variant="outline" className="text-lg px-8 py-3">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Everything you need for intelligent note-taking
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to make your research and note-taking process faster, smarter, and more efficient.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-white">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Why choose SmartNotes?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to revolutionize your note-taking?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of users who are already saving time and improving their productivity.
          </p>
          {user ? (
            <Link href="/dashboard">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                Go to Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          ) : (
            <Link href="/sign-up">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image src="/logo-cropped.svg" alt="Logo" width={32} height={32} />
              <span className="text-lg font-bold">SmartNotes</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 SmartNotes. All rights reserved.
            </div>
            <a href="https://github.com/ankux" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
              <span>ankux</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
