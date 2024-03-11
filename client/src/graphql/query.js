import {gql} from "@apollo/client"
 
 export const Food_dta=gql`
getfood{
    id,
    name,
    image ,
    description,
    ingredients,
    type,
    recipe
}

`

