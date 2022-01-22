import { createContext, Dispatch, SetStateAction, useState } from "react";
interface Item {
    id: string;
    nombre: string;
    category: string;
    url: string;
    price: number;
    quantity: number
}

interface FoodInterface {
    food: Item[],
    setFood: Dispatch<SetStateAction<Item[]>>,
    visible: boolean,
    setVisible: Dispatch<SetStateAction<boolean>>
}

export const FoodContext = createContext<FoodInterface>({
    food: [],
    setFood: () => { },
    visible: false,
    setVisible:()=>{}
});

export const FoodProvider = ({ children }: any) => {
    const [food, setFood] = useState<Item[]>([]);
    const [visible, setVisible] = useState(false);
    return (
        <FoodContext.Provider
            value={{
                food,
                setFood,
                visible,
                setVisible
            }}
        >
            {children}
        </FoodContext.Provider>
    )
}