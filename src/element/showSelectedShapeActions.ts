import { AppState } from "../types";
import { NonDeletedExcalidrawElement } from "./types";
import { getSelectedElements } from "../scene";

export const showSelectedShapeActions = (
  appState: AppState,
  elements: readonly NonDeletedExcalidrawElement[],
) =>
  Boolean(
    !appState.readonly &&
      (appState.editingElement ||
        getSelectedElements(elements, appState).length ||
        appState.elementType !== "selection"),
  );
