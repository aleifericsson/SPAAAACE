import { useGame } from "../hooks/useGame";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Game() {
    const {questions} = useGame();

    const { unityProvider, isQuizMode, curPlanet} = useUnityContext({
        loaderUrl: "Build/3DSolarSystemV2.loader.js",
        dataUrl: "Build/3DSolarSystemV2.data",
        frameworkUrl: "Build/3DSolarSystemV2.framework.js",
        codeUrl: "Build/3DSolarSystemV2.wasm",
      });

      console.log(isQuizMode)

    return (
      <div>
        <Unity className="unity" unityProvider={unityProvider} />
      </div>
    );
  }