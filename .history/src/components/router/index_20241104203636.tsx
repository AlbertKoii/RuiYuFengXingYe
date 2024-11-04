import { useRoutes, Navigate } from "react-router-dom"
import React, { ReactElement, Suspense } from "react"

const MainLayout = React.lazy(() =>
  import("@/pages/Home").then(({ MainLayout }) => ({
    default: MainLayout,
  }))
)


export const RouterMap = (): ReactElement | null =>
  useRoutes([
    {
      path: "/",
      element: (
        <Suspense>
          <IndexPage />
        </Suspense>
      ),
    },
    {
      element: (
        <Suspense>
          <MainLayout />
        </Suspense>
      ),
      children: [
        {
          path: "/account",
          element: (
            <Suspense>
              <AccountPage />
            </Suspense>
          ),
        },
        {
          path: "/create_collection",
          element: (
            <Suspense>
              <CreateCollectionPage />
            </Suspense>
          ),
        },
        {
          path: "/create_nft",
          element: (
            <Suspense>
              <CreateNFTPage />
            </Suspense>
          ),
        },
        {
          path: "/nft/:address/:tokenId",
          element: (
            <Suspense>
              <NFTDetailPage />
            </Suspense>
          ),
        },
        {
          path: "/collection/:collectionId",
          element: (
            <Suspense>
              <CollectionPage />
            </Suspense>
          ),
        },
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
