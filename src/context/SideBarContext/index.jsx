/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

// Create a context
export const SideBarContext = createContext();

// Create a provider component
export function SideBarProvider({ children }) {
    const [showLeftSideBar, setShowLeftSideBar] = useState(false);

    const updateLeftSidebar = flg => {
        setShowLeftSideBar(flg);
    };

    return <SideBarContext.Provider value={{ showLeftSideBar, updateLeftSidebar }}>{children}</SideBarContext.Provider>;
}
