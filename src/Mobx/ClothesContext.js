import { useLocalStore } from 'mobx-react';
import React from 'react';
import { createClothesStore } from './clothesStore';

const ClothesContext = React.createContext(null);

export const ClothesProvider = ({ children }) => {
  const clothesStore = useLocalStore(createClothesStore);
  return (
    <ClothesContext.Provider value={clothesStore}>
      {children}
    </ClothesContext.Provider>
  );
};

export const useClothesStore = () => React.useContext(ClothesContext);
