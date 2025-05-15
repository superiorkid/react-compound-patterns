import { FlyOut } from "./components/fly-out";

function App() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen">
      <nav className="py-4 border-b">
        <p className="text-2xl font-bold text-center">
          React Compound Patterns
        </p>
      </nav>

      <div className="grid grid-cols-3 mt-12 gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="aspect-square bg-rose-300 flex justify-center items-center relative"
          >
            <p className="text-xl font-semibold">
              Compound pattern {index + 1}
            </p>

            <FlyOut>
              <FlyOut.Toggle className="absolute top-2 right-2" />
              <FlyOut.List>
                <FlyOut.Item>Detail</FlyOut.Item>
                <FlyOut.Item>Edit</FlyOut.Item>
                <FlyOut.Item>Delete</FlyOut.Item>
              </FlyOut.List>
            </FlyOut>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
