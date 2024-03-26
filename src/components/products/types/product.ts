export interface Product {
    id?: number
    name: string
    image: string | undefined
    price: number
    onClick: (id: string | undefined) => void
}

