import { Gift, MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-white z-40">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="https://migosecreto.com" className="-m-1.5 p-1.5">
            <span className="sr-only">Migo Secreto</span>
            <Gift className="w-8 h-8 text-primary" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <div className="flex items-center gap-8 -my-1.5">
            <Link
              href="/groups/new"
              className="ml-auto rounded-full bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Criar Grupo
            </Link>
            <Button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              data-svelte-h="svelte-wr3coh"
            >
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Button asChild variant={"ghost"} className="text-sm rounded-full font-semibold px-3 py-2 leading-6 text-gray-900">
            <Link
            href="/groups"
          >
            Meus Grupos
          </Link>
          </Button>
          
          <Link
            href="/blog"
            className="hidden text-sm font-semibold leading-6 text-gray-900"
          >
            Blog
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="flex justify-end gap-2">
            <Button asChild className="rounded-full bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-offset-[clamp(4px,calc(4px + .7vw),8px)] focus-visible:outline-blue-600">
              <Link
                href="/groups/new"
                className=""
              >
                Criar Grupo
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
