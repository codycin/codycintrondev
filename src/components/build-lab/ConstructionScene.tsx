import { Code2 } from "lucide-react";

export function ConstructionScene() {
  return (
    <div className="construction-scene" aria-hidden="true">
      <div className="construction-scene__grid" />
      <div className="construction-scene__crane">
        <div className="construction-scene__mast" />
        <div className="construction-scene__arm" />
        <div className="construction-scene__cable" />
        <div className="construction-scene__module">
          <Code2 size={28} />
        </div>
      </div>
      <div className="construction-scene__rail" />
      <div className="construction-scene__status">
        <span /> SYSTEMS IN MOTION
      </div>
    </div>
  );
}
