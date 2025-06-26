import React from "react"
import ReactDOM from "react-dom/client"
import { Toaster } from "sonner"
import AppWrapper from "./AppWrapper"
import { I18nProvider } from "./i18n-context"

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <I18nProvider>
      <AppWrapper />
      <Toaster />
    </I18nProvider>
  </React.StrictMode>
)
