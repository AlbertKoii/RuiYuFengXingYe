import { useRoutes, Navigate } from "react-router-dom"
import React, { ReactElement, Suspense } from "react"
import Home from "@/pages/Home/Index"


const MainLayout = React.lazy(() =>
  import("@/pages/Home/Index").then(({ Home }) => ({
    default: Home,
  }))
)

export const RouterMap = (): ReactElement | null =>
  
)
