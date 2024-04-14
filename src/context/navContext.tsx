import React, { createContext, useState, useContext } from 'react';

interface MenuContextType {
  menuOpen: boolean;
  toggle: () => void;
  isChecked: boolean;
}

export const MenuContext = createContext<MenuContextType>({
  menuOpen: false,
  toggle: () => {},
  isChecked: false
});

export const MenuContextProvider: React.FC = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const toggle = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    setIsChecked((prevIsChecked) => !prevIsChecked);
  };

  return (
    <MenuContext.Provider value={{ menuOpen, toggle, isChecked }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  return useContext(MenuContext);
};
