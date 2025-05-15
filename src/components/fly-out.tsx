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
      {children}
    </FlyOutContext.Provider>
  );
}

function useFlyOutContext() {
  const context = useContext(FlyOutContext);
  if (!context) {
    throw new Error(`useFlyOutContext must be used within FlyOut`);
  }
  return context;
}

function Toggle() {
  const { open, setOpen } = useFlyOutContext();
  return <button onClick={() => setOpen(!open)}>Open</button>;
}

function List({ children }: { children: React.ReactNode }) {
  const { open } = useFlyOutContext();
  return open && <ul>{children}</ul>;
}

function Item({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}

FlyOut.Toggle = Toggle;
FlyOut.List = List;
FlyOut.Item = Item;
