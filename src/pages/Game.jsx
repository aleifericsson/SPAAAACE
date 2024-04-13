import { useGame } from "../hooks/useGame";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Game() {
    const {questions} = useGame();

    const { unityProvider, isQuizMode, curPlanet} = useUnityContext({
        loaderUrl: "Build/Sample2DSPaceNoBroccolli.loader.js",
        dataUrl: "Build/Sample2DSPaceNoBroccolli.data",
        frameworkUrl: "Build/Sample2DSPaceNoBroccolli.framework.js",
        codeUrl: "Build/Sample2DSPaceNoBroccolli.wasm",
      });

      console.log(isQuizMode)

    return (
      <div>
        <Unity className="unity" unityProvider={unityProvider} />
      </div>
    );
  }