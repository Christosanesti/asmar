import { cn } from "@/app/lib/utils";
import { useChat } from "ai/react";
import { X } from "lucide-react";
import { Input } from "../ui/input";

export default function ChatBot() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
  } = useChat();
  return (
    <div className={cn("bottom-0 right-0 z-10 w-full   p-1 xl:right-36")}>
      <div className="">پیغام</div>
      <form onSubmit={handleSubmit} className="m-3 flex gap-2" dir="rtl">
        <Input
          value={input}
          onChange={handleInputChange}
          placeholder="متن سوال خود را بپرسید..."
        />

        <button
          className="rounded-lg bg-gray-100 text-sans text-lg p-1"
          type="submit"
        >
          ارسال
        </button>
      </form>
    </div>
  );
}

{
  /* function ChatMessage({message}: {message: }) */
}
