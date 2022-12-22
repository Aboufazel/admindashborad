import {createBrowserRouter, RouterProvider} from "react-router-dom";
import IndexLayout from "../layout/IndexLayout";


const Root = () => {
    const router = createBrowserRouter(
        [
            {
                path:"/",
                element:<IndexLayout/>,
                children:[
                    {path:"/",

                    },{
                        path:"",
                    }
                ]

            }
        ]
    )
  return(
      <RouterProvider router={router}/>
  )
}

export default Root;