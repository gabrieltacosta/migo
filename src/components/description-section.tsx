import { MailOpen, Plus, Share2 } from "lucide-react";
import Link from "next/link";

const Description = () => {
    return (
        <section className="bg-gray-900 pb-32 pt-24 sm:pt-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-blue-400">Fácil de usar</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Sorteio de Amigo Secreto em 3 passos</p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">Chega de estresse ao tentar organizar sorteios</p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        <div className="flex flex-col">
                            <dt className="text-base font-semibold leading-7 text-white">
                                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                                    <Plus className="h-6 w-6 text-white" />
                                </div>
                                Criar o grupo
                            </dt>
                            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                <p className="flex-auto">Para o criar o grupo, basta escolher um nome e descrição e o nome dos participantes. Não é necessário e-mail e nem telefone.</p>
                                <p className="mt-6">
                                    <Link href={"/groups/new"} className="text-sm font-semibold leading-6 text-blue-400">Criar grupo <span aria-hidden="true">→</span></Link>
                                </p>
                            </dd>
                        </div>
                        <div className="flex flex-col">
                        <dt className="text-base font-semibold leading-7 text-white">
                                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                                    <Share2 className="h-6 w-6 text-white" />
                                </div>
                                Compartilhar o link
                            </dt>
                            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                <p className="flex-auto">Ao criar o grupo, você receberá um link do grupo. O link deve ser compartilhado com os participantes, pode ser por WhatsApp, e-mail ou como preferir.</p>
                                <p className="mt-6">
                                    <Link href={"/groups/new"} className="text-sm font-semibold leading-6 text-blue-400">Criar grupo <span aria-hidden="true">→</span></Link>
                                </p>
                            </dd>
                        </div>
                        <div className="flex flex-col">
                        <dt className="text-base font-semibold leading-7 text-white">
                                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                                    <MailOpen className="h-6 w-6 text-white" />
                                </div>
                                Revelar amigo
                            </dt>
                            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                <p className="flex-auto">Para o criar o grupo, basta escolher um nome e descrição e o nome dos participantes. Não é necessário e-mail e nem telefone.</p>
                                <p className="mt-6">
                                    <Link href={"/groups/new"} className="text-sm font-semibold leading-6 text-blue-400">Criar grupo <span aria-hidden="true">→</span></Link>
                                </p>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    );
}

export default Description;