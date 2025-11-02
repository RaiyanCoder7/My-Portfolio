import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bot, X, Send } from "lucide-react";
import { Card } from "@/components/ui/card";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hey there! 👋 I'm Raiyan's AI assistant. Want to know about his projects or skills?" }
  ]);

  const quickReplies = [
    "Show me Raiyan's projects",
    "What technologies does he know?",
    "How can I contact him?"
  ];

  const handleQuickReply = (reply: string) => {
    setMessages(prev => [...prev, { role: "user", text: reply }]);
    
    // Simple response logic
    setTimeout(() => {
      let response = "";
      if (reply.includes("projects")) {
        response = "Raiyan has worked on Athleticore (athlete management), Stock Market Sentiment Analysis, and WallyCart (AR shopping experience). Scroll up to see more details!";
      } else if (reply.includes("technologies")) {
        response = "Raiyan is proficient in Firebase, MongoDB, Express.js, React, Node.js, Python, Java, Gemini API, Vertex AI, Streamlit, and DSA!";
      } else if (reply.includes("contact")) {
        response = "You can reach Raiyan at mdraiyanrazakhan123@gmail.com or connect on LinkedIn. Scroll down to the contact section!";
      }
      setMessages(prev => [...prev, { role: "bot", text: response }]);
    }, 500);
  };

  return (
    <>
      {/* Floating chat button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg hover:shadow-glow animate-float z-50"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </Button>

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 md:w-96 glass border-border/50 shadow-2xl z-50 animate-scale-in">
          <div className="p-4 border-b border-border/50 flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">AI Assistant</h3>
          </div>

          <div className="h-80 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.role === "user"
                      ? "bg-primary text-white"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-border/50">
            <div className="space-y-2">
              {quickReplies.map((reply, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="w-full text-left justify-start border-primary/30 hover:border-primary hover:bg-primary/10"
                  onClick={() => handleQuickReply(reply)}
                >
                  {reply}
                </Button>
              ))}
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default ChatBot;
