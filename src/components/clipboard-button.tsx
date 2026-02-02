"use client"

import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface ClipboardButtonProps {
    shareUrl: string;
}

const ClipboardButton = ({ shareUrl }: ClipboardButtonProps) => {

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareUrl)
        toast("Link copiado para a área de transferência.", { position: "top-center" })
    }
  return (
    <div>
      <div className="flex gap-2">
        <Input readOnly value={shareUrl} className="bg-background" />
        <Button onClick={copyToClipboard}>Copiar</Button>
      </div>
    </div>
  );
};

export default ClipboardButton;
