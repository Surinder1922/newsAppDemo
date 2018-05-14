import AllUrl from "../urls/AllUrl";

export default function getCatagory()
{

    return fetch(AllUrl.BASE_URL).then((res)=>res.json()

)

}

