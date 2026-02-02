"use client"

import { Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export default function ShareLink({ groupId }: { groupId: string }) {
    const shareUrl = `${window.location.origin}/groups/${groupId}`

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareUrl)
        toast("Link copiado para a área de transferência.", { position: "top-center" })
    }

    return (
        <div className="container mx-auto bg-primary/10 p-6 rounded-xl border-2 border-dashed border-primary/30 text-center">
            <h3 className="font-bold text-lg mb-2">Seu grupo foi criado! 🎁</h3>
            <p className="text-sm text-muted-foreground mb-4">Envie este link para os participantes entrarem:</p>
            <div className="flex gap-2">
                <Input readOnly value={shareUrl} className="bg-background" />
                <Button onClick={copyToClipboard}>
                    Copiar
                </Button>
            </div>
            <Button className="w-full mt-4 bg-[#25D366] hover:bg-[#128C7E]" onClick={() => window.open(`https://wa.me/5512981674608?text=Entre no nosso Amigo Secreto: https://amigo-secreto.hawkdev.cloud`)}>
                <Share2 className="mr-2 h-4 w-4" /> Compartilhar no WhatsApp
            </Button>
        </div>
    )
}