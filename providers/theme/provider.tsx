"use client";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import React from "react";

export const AppTheme = React.createContext({ toggleTheme: () => {} });


export default function AppThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = React.useState<`light` | `dark`>(`light`);
  const colorMode = React.useMemo(
    () => ({
      toggleTheme: () => {
        setMode((prevMode) => (prevMode === `light` ? `dark` : `light`));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          primary: {
            main: `#2d98a6`,
            light: `#ccf0eb`,
            dark: `#2d98a6`,
          },
        },
        typography: {
          h5: {
            fontWeight: 'bold'
          },
          button: {
            textTransform: `capitalize`,
            
          },
        },
        components: {
          MuiAppBar: {
            defaultProps: { color: `default` },
          },
          MuiFormLabel: {
            
            styleOverrides: {
             
              asterisk: { color: `red` },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <AppTheme.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </AppTheme.Provider>
  );
}
export function useAppTheme() {
  const ctx = React.useContext(AppTheme);
  return ctx.toggleTheme;
}
