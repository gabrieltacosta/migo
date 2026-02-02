// import Link from "next/link";
// import Image from "next/image";
import { GroupForm } from "./group-form";

const Hero = () => {
    return (
        <section className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="px-4 sm:px-6 text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                        <div>
                            <h1 className="mt-4 text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl md:text-6xl">
                                Amigo Secreto Online
                            </h1>
                            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                Organize seu Amigo Secreto online. Não é necessário cadastro,
                                nem telefone, nem e-mail. Compartilhe o link do seu grupo para
                                os participantes entrarem.
                            </p>
                            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                Preencha o formulário
                                <span className="hidden lg:inline"> ao lado </span>
                                <span className="lg:hidden"> abaixo </span>
                                (Obs.: Não é necessário baixar o
                                app. O site foi feito para funcionar bem no celular)
                            </p>
                            {/* <div className="mt-4 sm:mt-5 flex justify-center lg:justify-normal"> */}
                                {/* <div className="mt-16 px-4 sm:mt-24 sm:px-0 lg:col-span-6 lg:mt-0">
                                    <Link
                                        href="https://apps.apple.com/br/app/migo-secreto/id6449503873?l=ptbr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image src={"/apple-store.svg"} alt="apple-store-icon" height={48} width={140} quality={75} />
                                    </Link>
                                </div> */}
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="mt-16 px-4 sm:mt-24 sm:px-0 lg:col-span-6 lg:mt-0">
                        <div className="border border-gray-300 bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden rounded-lg">
                            <div>

                                <GroupForm />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Hero