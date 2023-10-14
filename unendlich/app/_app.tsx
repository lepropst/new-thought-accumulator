import { ThemeProvider } from "next-themes"
import { AppProps } from "next/app"

function App({ Component, pageProps }:AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      storageKey="nightwind-mode"
      defaultTheme="system" // default "light"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
