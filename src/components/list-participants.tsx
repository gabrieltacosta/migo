import prisma from "@/lib/prisma";
import Link from "next/link";

interface listParticipantsProps {
  groupId: string;
}

const ListParticipants = async ({ groupId }: listParticipantsProps) => {
  const group = await prisma.group.findFirst({
    where: {
      id: groupId,
    },
    include: {
      participants: true,
    },
  });

  const participants = group?.participants;

  return (
    <ul className="grid grid-cols-1 gap-1 rounded-lg border p-2 md:grid-cols-2">
      {participants?.map((p) => (
        <li key={p.id}>
          <Link
            href={`${process.env.NEXT_PUBLIC_URL}/p/${p.id}`}
            className="flex items-center justify-between rounded-lg px-2 py-1 hover:bg-blue-50"
          >
            <div className="flex items-center space-x-4">
              <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-sm">
                😄
              </span>
              <div>
                <p className="text-sm font-medium text-gray-900">{p.name}</p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListParticipants;
