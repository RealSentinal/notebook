"use client"
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, Plus, Trash } from "lucide-react";

interface note {
  id: number
  text: string
  createdAt: Date
}

export default function Home() {
  const [data, setData] = useState<note[]>(localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes") as string) : [])
  const [task, setTask] = useState("")
  const input = useRef<HTMLInputElement>(null)

  const remove = () => {

  }

  const add = () => {
    if (!task) return
    const newNote: note = {
      id: data.length + 1,
      text: task,
      createdAt: new Date()
    }
    const storedNotes = localStorage.getItem("notes")
    const existingNotes: note[] = storedNotes ? JSON.parse(storedNotes) : [];
    const newNotes = [...existingNotes, newNote];
    localStorage.setItem("notes", JSON.stringify(newNotes));

    setData([...data, newNote])
    setTask("")
    if (input.current) input.current.value = ""
  }

  return (
    <main className="flex justify-start items-center w-screen h-screen flex-col bg-zinc-900 p-10">
      <div className="w-[900px] flex flex-row gap-2 m-4">
        <Input ref={input} placeholder="Add note" onChange={(e) => setTask(e.target.value)} />
        <Button onClick={add} className="bg-zinc-700 hover:bg-zinc-600 flex items-center justify-center"><Plus /></Button>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-2">
        {data.length > 0 ? data.map((note) => (
          <div key={note.id} className="bg-neutral-400 w-[900px] h-20 p-4 rounded-full flex flex-row justify-between">
            <p className="text-2xl ml-3 flex items-center justify-center">{note.text}</p>
            <div className="mr-4 flex flex-row gap-2">
              <Button className="flex items-center justify-center rounded-full w-14 h-14"><Pencil /></Button>
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
