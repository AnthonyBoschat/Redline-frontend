import ENV from "./constants/env.js";

function App() {

  const developpeurs = ["Clémence Tafforeau", "Benoit Monteiro", "Florian Fouilleul", "Anthony Boschat"]
  

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center px-48 py-32 bg-white rounded-md shadow shadow-black/10">
        <h1 className="text-4xl font-bold mb-2 text-blue-950">Bienvenue sur {ENV.APP_NAME} Front</h1>
        <h2 className="text-xl text-gray-700 mb-4">L'application de prise de notes moderne</h2>
        <div className="flex flex-col mt-6">
          <span className="text-gray-500 *:max-w-xl text-center">
            Réalisé par
          </span>
          <div className="gap-5 mt-4 grid grid-cols-2 gap-y-2 gap-x-4">
            {developpeurs.map(dev => (
              <span className="hover:cursor-pointer hover:shadow-md hover:shadow-black/10 hover:text-blue-950 hover:bg-white hover:outline hover:outline-blue-950 transition duration-200 text-center py-2 px-8 bg-blue-950 text-white rounded-md">
                {dev}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App
