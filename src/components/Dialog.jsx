import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle, Description, DialogBackdrop } from "@headlessui/react";

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="button-b">
        Open Dialog
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/50" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="max-w-lg w-full space-y-4 bg-white border rounded-lg p-8 shadow-lg">
            <DialogTitle></DialogTitle>
            <Description></Description>
            <p></p>
            <div className="flex gap-4 justify-end">
              <button onClick={() => setIsOpen(false)} className="button-b"></button>
              <button onClick={() => setIsOpen(false)} className="button-b"></button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

export default Example;