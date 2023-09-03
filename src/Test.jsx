


This is my project structure,

import React from 'react';

const Test = () => {
    return <div>
        <NavComp />
        <div>
            <LeftSideBarComp />
            <MainComp>
                <IntoComp />
            </MainComp>
        </div>
    </div>;
};

export default Test;



 Now i have CREACT button in NavComp,
 1. If i click on that I need to render <CreateComp /> insteaf of  <IntoComp /> inside  <MainComp>
2. please implement using react-router-dom



const NavComp = () => {
    return <div>
       <div>
        logo
       </div>
       <div>
        <button>create</button>
       </div>
    </div>;
};

export default NavComp;