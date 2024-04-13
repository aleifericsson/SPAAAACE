import Solar3D from "../components/Solar3D";
import "../css/solar3d.css"
import Button from 'react-bootstrap/Button';

export default function Home() {

    return (
      <div className="solar-window">
        <Solar3D />
        <div className="black-thing"></div>
        <div className = "tit-container">
            <div className="big-title">Think you know the solar system?</div>
            <div className="small-title"><Button variant="outline-warning" type="submit" href="/game">PLAY OUR GAME</Button>{' '} to test your knowledge, or...</div>
            <div className="small-title"><Button variant="outline-warning" type="submit" href="/fact-machine">USE THE FACT MACHINE</Button>{' '} to expand your brain.</div>
        </div>
      </div>
    );
  }