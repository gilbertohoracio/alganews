import { useEffect } from "react"
import { useLocation, useParams } from "react-router"

function useQuery(){
    return new URLSearchParams(useLocation().search)
}

export default function CalcView (){
     const params = useParams<{a: string, b: string}>()
     const query = useQuery()
    
     useEffect(() => {
         console.log(params)
         console.log(query.get('operacao'))
        },[])

    return <div>
        <h4>Soma: {Number(params.a) + Number(params.b)}</h4>
    </div>
}