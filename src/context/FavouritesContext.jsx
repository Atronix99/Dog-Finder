import React, { useEffect } from 'react'
import { createContext, useState } from 'react'

export const FavouritesContext = createContext();

export function FavouritesProvider({children}) {
    const [favorites, setFavorites] = useState(()=>{
        const saved = localStorage.getItem("favorites");
        return saved? JSON.parse(saved) : [];
    })

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites])

    return(
        <FavouritesContext.Provider value={{favorites, setFavorites}}>
            {children}
        </FavouritesContext.Provider>
    )
}



export default FavouritesContext