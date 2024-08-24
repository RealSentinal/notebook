import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash, Pencil } from "lucide-react";

interface note {
  id: number
  text: string
  createdAt: Date
}

export default function Home() {

  const exampleData: note[] = [
    {
      id: 1,
      text: "Test",
      createdAt: new Date()
    },
    {
      id: 2,
      text: "Test 2",
      createdAt: new Date()
    }
  ]

  return (
    <main className="flex justify-start items-center w-screen h-screen flex-col bg-zinc-900 p-10">
      <div className="w-[900px] flex flex-row gap-2 m-4">
        <Input placeholder="Add note" />
        <Button className="bg-zinc-700 hover:bg-zinc-600 flex items-center justify-center"><Plus /></Button>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-2">
        {exampleData.length > 0 ? exampleData.map((note) => (
          <div key={note.id} className="bg-neutral-400 w-[900px] h-20 p-4 rounded-full flex flex-row justify-between">
            <p className="text-2xl ml-3 flex items-center justify-center">{note.text}</p>
            <div className="mr-4 flex flex-row gap-2">
              <Button className="flex items-center justify-center rounded-full w-14 h-14"><Trash /></Button>
            </div>
          </div>
        )) : (
          <p className="text-2xl text-white mt-20">No notes</p>
        )}
      </div>
    </main>
  );
}
