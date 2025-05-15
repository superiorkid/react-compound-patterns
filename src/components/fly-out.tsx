import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

type FlyOutContextType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const FlyOutContext = createContext<FlyOutContextType | undefined>(undefined);

export function FlyOut({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <FlyOutContext.Provider value={{ open, setOpen }}>
      <div className="relative inline-block text-left">{children}</div>
    </FlyOutContext.Provider>
  );
}

function useFlyOutContext() {
  const context = useContext(FlyOutContext);
  if (!context) {
    throw new Error("useFlyOutContext must be used within FlyOut");
  }
  return context;
}

function Toggle() {
  const { open, setOpen } = useFlyOutContext();
  return (
    <button
      onClick={() => setOpen(!open)}
      className="inline-flex justify-center w-full px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
    >
      Actions
    </button>
  );
}

function List({ children }: { children: React.ReactNode }) {
  const { open } = useFlyOutContext();
  return (
    open && (
      <ul className="absolute right-0 z-10 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg">
        {children}
      </ul>
    )
  );
}

function Item({ children }: { children: React.ReactNode }) {
  return (
    <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
      {children}
    </li>
  );
}

FlyOut.Toggle = Toggle;
FlyOut.List = List;
FlyOut.Item = Item;
