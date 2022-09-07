import React, { useCallback, useState } from "react";

export const useFetchData = () => {
  const [transformedData, setTransformedData] =
    useState<React.SetStateAction<any>>();
  const [loading, setLoading] = useState(false);

  const kFetch = useCallback(async (_url: any) => {
    setLoading(true);
    try {
      const response = await fetch(_url);

      if (!response) {
        console.log("error");
      }
      const data = await response.json();
      //   console.log(data)

      setTransformedData(data.Items);
    } catch (err) {
      console.log("error", err);
    }
    setLoading(false);
  }, []);
  return { transformedData, loading, kFetch, setTransformedData };
  //     const[HomeData,setHomeData]=useState<React.SetStateAction<any>>()

  //     const dataFetch=useCallback(async(_url:any)=>{
  //         console.log("data ftech mehtod entry")
  //         try{

  //                 const response=await fetch(_url)

  //                 if(!response){
  //                     console.log("error")
  //                 }
  //                 const data=await response.json();
  //                 setHomeData(data)
  //                 console.log("Use fetch Data",data)

  //         }
  //         catch(error){
  //             console.log("error",error)
  //         }
  //     },[])

  //     // console.log("Use fetch Data",HomeData)

  //   return ({HomeData,dataFetch,setHomeData}
  //   )
};
