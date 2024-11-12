import { useRoutes, Navigate } from "react-router-dom"
import React, { ReactElement, Suspense } from "react"
import Home from "@/pages/Home"


const MainLayout = React.lazy(() =>
  import("@/pages/Home").then(({ Home }) => ({
    default: Home,
  }))
)

export const RouterMap = (): ReactElement | null =>
  useRoutes([
    {
      path: "/",
      element: (
        <Suspense>
          <Home />
        </Suspense>
      ),
      children: [
        // {
        //   path: "/account",
        //   element: (
        //     <Suspense>
        //       <AccountPage />
        //     </Suspense>
        //   ),
        // },
      ],
    },
    {
      path: "/404",
      element: (
        <Suspense>
          <NotFoundPage />
        </Suspense>
      ),
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ])
