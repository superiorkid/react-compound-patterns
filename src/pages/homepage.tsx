import { FlyOut } from "../components/fly-out";

const Homepage = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="aspect-square border flex justify-center items-center relative"
        >
          <p>hello world</p>

          <div className="absolute top-2 right-2">
            <FlyOut>
              <FlyOut.Toggle />
              <FlyOut.List>
                <FlyOut.Item>Detail</FlyOut.Item>
                <FlyOut.Item>Edit</FlyOut.Item>
                <FlyOut.Item>Delete</FlyOut.Item>
              </FlyOut.List>
            </FlyOut>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
