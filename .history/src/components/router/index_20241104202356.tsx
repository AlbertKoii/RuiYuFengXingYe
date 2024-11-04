import { useRoutes, Navigate } from "react-router-dom"
import React, { ReactElement, Suspense } from "react"

const MainLayout = React.lazy(() =>
  import("../components/common/layout/MainLayout").then(({ MainLayout }) => ({
    default: MainLayout,
  }))
)

const IndexPage = React.lazy(() =>
  import("../pages").then(({ IndexPage }) => ({
    default: IndexPage,
  }))
)

const AccountPage = React.lazy(() =>
  import("../pages/account").then(({ AccountPage }) => ({
    default: AccountPage,
  }))
)

const CollectionPage = React.lazy(() =>
  import("../pages/collection").then(({ CollectionPage }) => ({
    default: CollectionPage,
  }))
)

const NFTDetailPage = React.lazy(() =>
  import("../pages/nft").then(({ NFTDetailPage }) => ({
    default: NFTDetailPage,
  }))
)

const CreateNFTPage = React.lazy(() =>
  import("../pages/create").then(({ CreateNFTPage }) => ({
    default: CreateNFTPage,
  }))
)

const CreateCollectionPage = React.lazy(() =>
  import("../pages/create_collection").then(({ CreateCollectionPage }) => ({
    default: CreateCollectionPage,
  }))
)

const NotFoundPage = React.lazy(() =>
  import("../pages/404").then(({ NotFoundPage }) => ({
    default: NotFoundPage,
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
