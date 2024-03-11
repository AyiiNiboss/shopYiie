import { useEffect, useState } from "react"
import Card from "../Fragments/Card"
import { getCategoriesProducts } from "../../services/product.service"

const categories = [
    {
        id: 1,
        name: "electronics",
        img: "https://down-id.img.susercontent.com/file/dcd61dcb7c1448a132f49f938b0cb553_tn",
    },
    {
        id: 2,
        name: "jewelery",
        img: "https://down-id.img.susercontent.com/file/1f18bdfe73df39c66e7326b0a3e08e87_tn",
    },
    {
        id: 3,
        name: "men's clothing",
        img: "https://down-id.img.susercontent.com/file/04dba508f1ad19629518defb94999ef9_tn",
    },
    {
        id: 4,
        name: "women's clothing",
        img: "https://down-id.img.susercontent.com/file/6d63cca7351ba54a2e21c6be1721fa3a_tn",
    }
]

const CategoriesLayout = () => {
    console.log(categories)
    return (
        <>
            <div className="container mx-auto">
                <Card data={categories}></Card>
            </div>
        </>
    )
}

export default CategoriesLayout