import { Link, useParams } from "react-router-dom";
import "../styles/style.css";

import jonSnow from "../assets/jon-snow.jpg";
import daenerys from "../assets/daenerys-targaryen.jpg";
import jaime from "../assets/jaime-lannister.jpeg";
import tyrion from "../assets/tyrion-lannister.jpg";

function MemberDetail() {
  const { id } = useParams();

  const members = {
    1: {
      name: "Jon Snow",
      image: jonSnow,
      location: "Winterfell - 24 años",
      skills: ["Javascript", "MySQL", "NodeJs", "C# .NET"],
      movies: ["Interstellar", "Good Will Hunting", "El Padrino"],
      music: ["José Larralde", "Soledad", "Joaquín Sabina"],
      quote: "Quiero pelear del lado que pelea por los que viven.",
    },
    2: {
      name: "Daenerys Targaryen",
      image: daenerys,
      location: "Essos - 22 años",
      skills: ["HTML", "CSS", "React", "JavaScript"],
      movies: ["El Señor de los Anillos", "Matrix", "Avatar"],
      music: ["Coldplay", "Imagine Dragons", "The Weeknd"],
      quote:
        "Cuando mis dragones crezcan, vamos a recuperar lo que me robaron y destruiremos a aquellos que me hicieron daño!",
    },
    3: {
      name: "Jaime Lannister",
      image: jaime,
      location: "Casterly Rock - 32 años",
      skills: ["Figma", "Adobe XD", "Sketch", "Photoshop"],
      movies: ["Depredador", "Lo que el viento se llevo", "Das Boot"],
      music: ["Jorge Cafrune y Marito", "Los Kjarkas", "Jose Luis Perales"],
      quote:
        "Los héroes siempre serán recordados. Los mejores y los peores. Y algunos que fueron un poco de ambos.",
    },
    4: {
      name: "Tyrion Lannister",
      image: tyrion,
      location: "Casterly Rock - 32 años",
      skills: ["Selenium", "Jest", "Cypress", "Postman"],
      movies: ["Forrest Gump", "Pulp Fiction", "El Club de la Pelea"],
      music: ["Frank Sinatra", "Dean Martin", "Nat King Cole"],
      quote:
        "Nunca olvides lo que eres. El resto del mundo no lo hará. Úsalo como una armadura y nunca podrá usarse para hacerte daño.",
    },
  };

  const member = members[id];

  const showQuote = () => {
    alert(`Frase de ${member.name}:\n\n"${member.quote}"`);
  };

  if (!member) {
    return <div>Miembro no encontrado</div>;
  }

  return (
    <div className="member-page">
      <div className="member-card">
        <div className="member-photo">
          <img src={member.image} alt={member.name} />
        </div>
        <h2>{member.name}</h2>
        <p className="member-subtitle">{member.location}</p>

        <div className="member-information">
          <h3>Habilidades</h3>
          <ul>
            {member.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="member-information">
          <h3>Películas favoritas</h3>
          <ul>
            {member.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>

        <div className="member-information">
          <h3>Música favorita</h3>
          <ul>
            {member.music.map((artist, index) => (
              <li key={index}>{artist}</li>
            ))}
          </ul>
        </div>

        <div className="member-buttons">
          <button onClick={showQuote} className="btn">
            Mi frase
          </button>
          <Link to="/" className="btn">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MemberDetail;
