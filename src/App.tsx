import Card from "./Card";
import Login from "./Login";

function App() {
  return (
    <main>
      <div className="flex h-screen w-full flex-col p-3 md:flex-row md:p-10">
        <div className="md:w-2/4">
          <Card />
        </div>
        <div className="py-10 pl-[7%] pr-[7%] md:w-2/4 md:pl-[10%]">
          <Login />
        </div>
      </div>
    </main>
  );
}

export default App;
