import { Button } from "@/components/ui/button"
import { MoveLeft, Star } from "lucide-react"
import Link from "next/link"

export default async function Page({ params }) {
    const { productId } = await params
    const URL = `https://dummyjson.com/products/${productId}`
    const res = await fetch(URL)
    const data = await res.json()
    console.log(data)
    return (
        <div className="bg-gray-200 h-screen">
            <div className="absolute top-7 left-7">
                <Link href='/'><Button><MoveLeft /></Button></Link>
            </div>
            <div className="grid grid-cols-2 gap-0">
                <div>
                    <img src={data.images}
                        className="h-137.5 w-auto"
                    />
                </div>
                <div className="relative top-36 flex flex-col gap-8">
                    <p className="text-[18px]">
                        {data.title} | {data.category} | {data.tags} | {data.brand} | width:{data.dimensions.width} height:{data.dimensions.height} depth:{data.dimensions.depth}
                    </p>
                    <div className="flex flex-col">
                        <span className=" line-through text-sm">${data.price}</span>
                        <span>${data.discountPercentage}</span>
                        <span className="flex items-center gap-1">
                            <Star />
                            {data.rating}
                        </span>
                    </div>

                    <div>
                        <p>{data.description}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

