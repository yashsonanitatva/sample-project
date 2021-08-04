import { useState } from "react";

import { ThemeName } from "@theme/theme";

const themes: ThemeName[] = ["light", "dark"];

export const useThemeToggleState = (initialTheme: ThemeName) => {
  const [state, setState] = useState(themes.indexOf(initialTheme));

  const toggleTheme = () => {
    setState((s) => (s + 1 >= themes.length ? 0 : s + 1));
  };

  return { current: themes[state], toggleTheme };
};
