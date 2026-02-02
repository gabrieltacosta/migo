const FaqSection = () => {
    return (
        <section className="max-2xl mx-auto px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8 bg-white">
            <div className="max-w-xl">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Perguntas frequentes (FAQ)</h2>
                <p className="mt-4 text-base text-gray-500">Caso você não ache a resposta para sua dúvida, entre em contato através do e-mail oi@migosecreto.com.</p>
            </div>
            <dl className="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
                <div>
                    <dt className="text-base font-medium text-gray-900">
                        Como fazer amigo secreto por whatsapp?
                    </dt>
                    <dd className="mt-3 text-sm text-gray-500">
                        Ao criar um grupo de amigo secreto aqui, será gerado um link para cada participante e um texto com todos os links para você compartilhar no seu grupo de WhatsApp de amigo secreto.
                    </dd>
                </div>
                <div>
                    <dt className="text-base font-medium text-gray-900">
                        É possível o organizador ou outros participantes verem meu amigo secreto?
                    </dt>
                    <dd className="mt-3 text-sm text-gray-500">
                        Só é possível outros participantes verem seu amigo secreto se eles descobrirem a senha que você registrou.
                    </dd>
                </div>
                <div>
                    <dt className="text-base font-medium text-gray-900">
                        Preciso lembrar a senha que eu registrei?
                    </dt>
                    <dd className="mt-3 text-sm text-gray-500">
                        Quando você registra sua senha, ela fica guardada no seu navegador. Ao acessar o seu link novamente com o mesmo navegador, você não vai precisar digitar a senha.
                    </dd>
                </div>
                <div>
                    <dt className="text-base font-medium text-gray-900">
                        Esqueci a senha do meu link, e agora?
                    </dt>
                    <dd className="mt-3 text-sm text-gray-500">
                        No momento não é possível resetar a senha, o ideal é criar outro sorteio de amigo secreto e re-enviar o link para todas as pessoas.
                    </dd>
                </div>
                <div>
                    <dt className="text-base font-medium text-gray-900">
                        Abri o meu link pela primeira vez, mas já tem uma senha registrada.
                    </dt>
                    <dd className="mt-3 text-sm text-gray-500">
                        Algum outro participante provavelmente usou o seu link e registrou uma senha sem querer. Você pode trocar de link com a pessoa, ou criar um novo grupo.
                    </dd>
                </div>
            </dl>
        </section>
    )
}

export default FaqSection