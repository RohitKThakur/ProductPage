import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Star } from 'lucide-react'
export function CardImage({
    title, category, price, rating, images, brand
}) {
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
                src={images}
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
                <CardAction>
                    <Badge variant="secondary"><Star className="text-yellow-500" />{rating}</Badge>
                </CardAction>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                    <h3>{brand}</h3>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <h5>{category}</h5>
                <p>${price}</p>
            </CardContent>
            <CardFooter>
                <Button className="w-full">View</Button>
            </CardFooter>
        </Card>
    )
}
