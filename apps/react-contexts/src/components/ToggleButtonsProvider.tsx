import { useReducer } from "react";
import {
  Action,
  ToggleButton4Context,
  ToggleButton5Context,
  ToggleButton6Context,
  ToggleDispatchContext,
} from "../contexts/toggleButtonContexts";

export default function ToggleButtonsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [buttonsState, dispatch] = useReducer(
    (
      prev: { button4: boolean; button5: boolean; button6: boolean },
      action: Action
    ) => {
      if (action.type === 4) {
        return { ...prev, button4: !prev.button4 };
      }
      if (action.type === 5) {
        return { ...prev, button5: !prev.button5 };
      }
      if (action.type === 6) {
        return { ...prev, button6: !prev.button6 };
      }
      return prev;
    },
    { button4: false, button5: false, button6: false }
  );
  return (
    <div className="flex gap-6">
      <ToggleDispatchContext.Provider value={dispatch}>
        <ToggleButton4Context.Provider value={buttonsState.button4}>
          <ToggleButton5Context.Provider value={buttonsState.button5}>
            <ToggleButton6Context.Provider value={buttonsState.button6}>
              {children}
            </ToggleButton6Context.Provider>
          </ToggleButton5Context.Provider>
        </ToggleButton4Context.Provider>
      </ToggleDispatchContext.Provider>
    </div>
  );
}
