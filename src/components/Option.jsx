import Card from "react-bootstrap/Card";
import "../css/Trivia.css";

function TextExample({ opt }) {
  return (
    <Card
      style={{ width: "18rem", height: "10rem" }}
      className="option-container"
    >
      <Card.Body>
        <Card.Title className="option">{opt}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default TextExample;
