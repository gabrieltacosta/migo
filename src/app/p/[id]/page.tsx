import { CATEGORY_LABELS } from "@/app/_constants/categories";
import ClipboardButton from "@/components/clipboard-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import prisma from "@/lib/prisma";

const ParticipantPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const participantId = (await params).id as string;
  const participant = await prisma.participant.findUnique({
    where: { id: participantId },
    select: { name: true },
  });

  const groupId = await prisma.participant.findUnique({
    where: { id: participantId },
    select: { groupId: true },
  });

  const group = await prisma.group.findFirst({
    where: { id: groupId?.groupId },
    select: { id: true, name: true, category: true },
  });

  const shareUrl = `${process.env.NEXT_PUBLIC_URL}/groups/${groupId?.groupId}`;

  return (
    <div>
      <main className="container mx-auto">
        <div className="bg-white">
          <div className="mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8">
            <div className="mx-auto flex flex-col items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:gap-y-24">
              <div className="w-full">
                <div className="mx-auto max-w-2xl">
                  <div>
                    <p className="text-base font-semibold leading-7 text-blue-600">
                      Informações do grupo
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold text-gray-600">
                        {group &&
                          group.category &&
                          CATEGORY_LABELS[
                            group.category as keyof typeof CATEGORY_LABELS
                          ]}
                      </p>
                    </div>
                    <h2 className="mt-2 text-3xl font-bold text-gray-900">
                      {group?.name}
                    </h2>
                  </div>
                  <div className="pt-8">
                    <p className="text-base font-semibold leading-7 text-blue-600">
                      Link do grupo
                    </p>
                    <ClipboardButton shareUrl={shareUrl} />
                  </div>
                  <div className="pt-8">
                    <div className="w-full">
                      <form method="POST" className="hidden">
                        <Input type="hidden" name="password" id="password" />
                        <Button id="form-submit" type="submit"></Button>
                      </form>
                      <div>
                        <p className="text-base font-semibold leading-7 text-blue-600">
                          Confirmação
                        </p>
                        <h2 className="mt-2 text-2xl font-bold text-gray-900">
                          Você é{" "}
                          <span className="text-blue-600">
                            {participant?.name}
                          </span>
                          ?
                        </h2>
                        <div className="flex gap-4 pt-4">
                          <Button
                            type="button"
                            className="rounded-full bg-white px-12 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                            Não
                          </Button>
                          <Button
                            type="button"
                            className="rounded-full bg-blue-600 px-12 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                          >
                            Sim
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ParticipantPage;
