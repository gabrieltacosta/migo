"use client"

import { Share2 } from "lucide-react";
import { Button } from "./ui/button";

interface ClipboardButtonProps {
    shareUrl: string;
}

const WhatsappButton = ({ shareUrl }: ClipboardButtonProps) => {
  return (
    <Button
      className="w-full my-4 bg-[#25D366] hover:bg-[#128C7E]"
      onClick={() =>
        window.open(
          `https://wa.me/?text=Entre no nosso Amigo Secreto: %0A%0A${shareUrl}`,
        )
      }
    >
      <Share2 className="mr-2 h-4 w-4" /> Compartilhar no WhatsApp
    </Button>
  );
};

export default WhatsappButton;
