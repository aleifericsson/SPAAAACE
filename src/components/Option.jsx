import Card from "react-bootstrap/Card";
import "../css/Trivia.css";

function TextExample({ question }) {
  return (
    <Card
      style={{ width: "18rem", height: "10rem" }}
      className="option-container"
    >
      <Card.Body>
        <Card.Title className="option">{question}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default TextExample;
