import TestimonialsCard from "./testimonials-card";
import { Card, CardContent, CardDescription, CardFooter } from "./ui/card";
import Image from "next/image";

const Testimonials = () => {
    return (
        <section className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
            <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
                <div className="ml-[max(50%,38rem)] aspect-1313/771 w-7xl bg-linear-to-tr from-[#ff80b5] to-[#9089fc]"></div>
            </div>
            <div className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end">
                <div className="-ml-88 aspect-1313/771 w-7xl flex-none origin-top-right rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"></div>
            </div>
            <div className="mx-auto max-w-7xl h-auto px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Testemunhos</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Veja o que estão falando sobre o Migo Secreto</p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-cols-4">
                    <TestimonialsCard name="Maíra R." description="Muito fácil de usar, simples, soreteio deu super certo. E o melhor é que não precisa baixar aplicativo!" imageUrl="https://i.pravatar.cc/" />
                    <TestimonialsCard name="Maíra R." description="Muito fácil de usar, simples, soreteio deu super certo. E o melhor é que não precisa baixar aplicativo!" imageUrl="https://i.pravatar.cc/" />
                    <TestimonialsCard name="Maíra R." description="Muito fácil de usar, simples, soreteio deu super certo. E o melhor é que não precisa baixar aplicativo!" imageUrl="https://i.pravatar.cc/" />
                    <TestimonialsCard name="Maíra R." description="Muito fácil de usar, simples, soreteio deu super certo. E o melhor é que não precisa baixar aplicativo!" imageUrl="https://i.pravatar.cc/" />
                    <TestimonialsCard name="Maíra R." description="Muito fácil de usar, simples, soreteio deu super certo. E o melhor é que não precisa baixar aplicativo!" imageUrl="https://i.pravatar.cc/" />
                    <TestimonialsCard name="Maíra R." description="Muito fácil de usar, simples, soreteio deu super certo. E o melhor é que não precisa baixar aplicativo!" imageUrl="https://i.pravatar.cc/" />
                </div>
            </div>
        </section>
    )
}

export default Testimonials;


// "https://migosecreto.com/img/webp/t_maira_r.webp"

// “Muito fácil de usar, simples, soreteio deu super certo. E o melhor é que não precisa baixar aplicativo!”

// Maíra R.