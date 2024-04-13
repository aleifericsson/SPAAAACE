import Card from "react-bootstrap/Card";
import "../css/Trivia.css";

function TextExample({ answer, onClick }) {
  return (
    <Card
      style={{ width: "18rem", height: "10rem" }}
      className="option-container"
      onClick={onClick}
    >
      <Card.Body>
        <Card.Title className="option">{answer}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default TextExample;
