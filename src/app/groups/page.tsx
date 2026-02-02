"use client"

import { Button } from "@/components/ui/button";
import { shuffleSecretSanta } from "@/app/_actions/draw";

const groupsPage = () => {

    const names = [
        "Gabriel",
        "João",
        "Manuel",
        "Thiago"
    ]

    const onClick = () => {
        const sorteados = shuffleSecretSanta(names)
        console.log(sorteados)
    }

    return (
        <div>
            <Button onClick={onClick}>
                Sortear
            </Button>
        </div>
    );
}

export default groupsPage