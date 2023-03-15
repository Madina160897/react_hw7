import { createBrowserRouter } from "react-router-dom";
import { EntrancePage, MainPage, ErrorPage, HelpPage } from "./routes/index"

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/posts', element: <EntrancePage />,
        children: [{ path: '/posts/:postId', element: <HelpPage /> }]
    },
]);

export default router;