import { lazy } from "react";

export default async function importDemo(file){
    return lazy(()=>import(`../components/${file}`))
}

