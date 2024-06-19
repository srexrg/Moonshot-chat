"use client";

import { useCompletion } from "@ai-sdk/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function ChatBot() {
  const {
    completion,
    input,
    stop,
    isLoading,
    handleInputChange,
    handleSubmit,
  } = useCompletion();

  const renderCompletionText = (text: string) => {
    return text.split("**").map((chunk, index) => {
      return index % 2 === 0 ? (
        <span key={index}>{chunk}</span>
      ) : (
        <strong key={index}>{chunk}</strong>
      );
    });
  };

  return (
    <div className="mx-auto w-full max-w-md py-8 px-4 md:px-0 flex flex-col items-center space-y-4">
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md w-full">
        <span className="font-bold">Bot:</span>{" "}
        {renderCompletionText(completion)}
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <div className="relative">
          <Input
            type="text"
            className="input input-bordered w-full pr-10 pl-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
            value={input}
            onChange={handleInputChange}
          />
          <kbd className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
            ↵
          </kbd>
        </div>
        <div className="flex justify-between space-x-4">
          <Button
            disabled={isLoading}
            type="submit"
            className="btn btn-primary w-full py-2 rounded-lg"
          >
            {isLoading ? "Sending..." : "Send"}
          </Button>
        </div>
      </form>
    </div>
  );
}
