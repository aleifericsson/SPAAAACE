// import Card from "react-bootstrap/Card";
// import "../css/Trivia.css";

// function TextExample({ answer, onClick, isSelected, isCorrect }) {
//   // Determine background color based on the correctness of the answer
//   const backgroundColor = isSelected ? (isCorrect ? "green" : "red") : "white";

//   return (
//     <Card
//       style={{ width: "18rem", height: "10rem", backgroundColor }}
//       className="option-container"
//       onClick={onClick}
//     >
//       <Card.Body>
//         <Card.Title className="option">{answer}</Card.Title>
//       </Card.Body>
//     </Card>
//   );
// }

// export default TextExample;

import Card from "react-bootstrap/Card";
import "../css/Trivia.css";

function TextExample({ answer, onClick, isSelected, isCorrect, disabled }) {
  const backgroundColor = isSelected ? (isCorrect ? "green" : "red") : "white";

  return (
    <Card
      style={{backgroundColor }}
      className={`option-container ${disabled ? "disabled-option" : "enabled-option"}`}
      onClick={!disabled ? onClick : undefined}
    >
      <Card.Body>
        <Card.Title className="option">{answer}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default TextExample;
