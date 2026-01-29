import { Gift } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#3e2670]">
      <h2 className="sr-only">Footer</h2>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pb-8 pt-16 sm:pt-24 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <Gift className="w-8 h-8 text-white" />
              <p className="text-sm leading-6 text-gray-300">
                Migo Secreto - Amigo Secreto Online
              </p>
              <div className="flex space-x-6">
                <Link href={"/"} className="text-gray-500 hover:text-gray-400">
                  <span className="sr-only">Português</span>
                  <span className="text-lg">🇧🇷</span>
                </Link>
                <Link href={"/"} className="text-gray-500 hover:text-gray-400">
                  <span className="sr-only">Inglês</span>
                  <span className="text-lg">🇺🇸</span>
                </Link>
                <Link href={"/"} className="text-gray-500 hover:text-gray-400">
                  <span className="sr-only">Espanhol</span>
                  <span className="text-lg">🇪🇸</span>
                </Link>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Navegação
                  </h3>
                  <ul>
                    <li>
                      <Link
                        href={"/"}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        Amigo Secreto no WhatsApp
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/"}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        Criar Amigo Secreto
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/"}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        Meus Grupos
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Links
                  </h3>
                  <ul>
                    <li>
                      <Link
                        href={"/"}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        Entre em Contato
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/"}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        Privacidade
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Categorias
                  </h3>
                  <ul className="mt-6 space-y-4">
                    <li>
                      <Link
                        href={"/"}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        Amigo Chocolate
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <p className="text-sm font-semibold leading-6 text-transparent">
                    -
                  </p>
                  <ul className="mt-6 space-y-4">
                    <li>
                      <Link
                        href={"/"}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        Amigo Páscoa
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-gray-400">
              © 2026 Migo Secreto. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
