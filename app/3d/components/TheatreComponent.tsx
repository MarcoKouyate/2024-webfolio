import React from "react";

import { getProject } from "@theatre/core";
import { SheetProvider, editable } from "@theatre/r3f";
import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";
import theatre from "./theatre";
import { threadId } from "worker_threads";
import Scene_3D from "./Scene_3D";

if (
  process.env.NODE_ENV === "development" &&
  !theatre.isInit &&
  typeof window !== "undefined"
) {
  studio.initialize();
  studio.extend(extension);
  studio.ui.hide(); // Hidden by default
  theatre.isInit = true;
}

const TheatreComponent = () => {
  if (theatre.isInit) {
    return (
      <>
        <SheetProvider sheet={getProject("Project").sheet("Sheet")}>
          <Scene_3D />
        </SheetProvider>
      </>
    );
  } else {
    return <Scene_3D />;
  }
};

export default TheatreComponent;
