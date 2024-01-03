"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import Hint from "../hint";
import { Textarea } from "../ui/textarea";
import { ElementRef, useRef, useState, useTransition } from "react";
import { updateUser } from "@/actions/user";
import { toast } from "sonner";

interface BioModalProps {
  initialValue: string | null;
}

export function BioModal({ initialValue }: BioModalProps) {

  const closeRef = useRef<ElementRef<"button">>(null)
  const [isPending, startTransition] = useTransition()
  const [value, setValue] = useState(initialValue);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    startTransition(() => {
        updateUser({bio: value})
        .then(() => {
            toast.success("User bio updated")
            closeRef?.current?.click()
        })
        .catch(() => toast.error("somthing went wrong"))
    })
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="ml-auto" variant="link" size="sm">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit user bio</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <Textarea
            placeholder="User bio"
            disabled={false}
            className="resize-none"
            onChange={(e) => setValue(e.target.value)}
            value={value || ""}
          ></Textarea>
          <div className="flex justify-between">
            <DialogClose asChild ref={closeRef}>
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>
            <Button disabled={isPending} type="submit" variant="primary">
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
