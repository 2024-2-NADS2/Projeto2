import React, { createContext, useState } from 'react';


//Contexto para atualizar o estado de pesquisa 
export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
            {children}
        </SearchContext.Provider>
    )
}
