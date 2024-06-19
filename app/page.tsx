import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-100 text-gray-800">
      <header className="w-full py-6 bg-gray-800 text-white shadow-lg">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl font-bold">Welcome to ChatBot</h1>
          <p className="mt-2 text-lg">Your personal AI assistant</p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-6 md:px-12 py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Chat with our AI</h2>
          <div className="border-t border-gray-300 mt-4 pt-4">
            <p className="text-gray-600">
              Please Login to Continue
            </p>
          </div>
        </div>
      </main>

      <footer className="w-full py-6 bg-gray-800 text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="text-sm">&copy; 2024 ChatBot. All rights reserved.</p>
          <div className="mt-2">
            <a href="#!" className="text-blue-400 hover:text-blue-500 mx-2">
              Privacy Policy
            </a>
            <a href="#!" className="text-blue-400 hover:text-blue-500 mx-2">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
