import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import "./Pesquisa.css";

// Imagens das plantas
import cacto from "../assets/cacto.jpg";
import rosa from "../assets/rosa.jpg";

function Pesquisa() {

  const [plantas, setPlantas] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    buscarPlantas();
  }, []);

  const buscarPlantas = async () => {
    try {
      const response = await api.get("/plants");
      console.log("Plantas recebidas:", response.data);
      setPlantas(response.data);
    } catch (error) {
      console.log("Erro ao buscar plantas:", error);
    }
  };

  const plantasFiltradas = plantas.filter((planta) =>
    planta.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  // Cada planta recebe sua própria imagem
  const imagensPlantas = {
    "cacto": cacto,
    "rosa": rosa
  };

  return (
    <>
      {/* Barra de navegação */}
      <Navbar />

      <main className="pesquisa-container">

        <h1 className="pesquisa-titulo">
          Encontre sua planta
        </h1>

        <p className="pesquisa-subtitulo">
          Pesquise por uma planta para conhecer nossos produtos.
        </p>

        {/* Área de pesquisa */}
        <div className="barra-pesquisa">

          <input
            type="text"
            placeholder="Digite o nome da planta..."
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
          />

          <button>
            🔍
          </button>

        </div>

        {/* Lista de resultados */}
        <div className="plantas-container">

          {plantasFiltradas.length > 0 ? (

            plantasFiltradas.map((planta) => {

              const nomePlanta = planta.nome.toLowerCase();

              return (
                <div
                  className="planta-card"
                  key={planta.id_plantas}
                >

                  {/* Imagem própria de cada planta */}
                  <img
                    src={imagensPlantas[nomePlanta]}
                    alt={planta.nome}
                    className="planta-imagem"
                  />

                  <div className="planta-info">

                    <h2>{planta.nome}</h2>

                    <p className="planta-preco">
                      R$ {planta.preco}
                    </p>

                  </div>

                </div>
              );

            })

          ) : (

            <p className="sem-resultado">
              Nenhuma planta encontrada.
            </p>

          )}

        </div>

      </main>
    </>
  );
}

export default Pesquisa;