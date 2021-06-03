import React from 'react';
import ItemsCarousel from "../../../node_modules/react-items-carousel";
import { useEffect, useState } from 'react';

const ItemList = (props) => {

        //setting a state for the carousel of items.
        const [activeItemIndex, setActiveItemIndex] = useState(0);
        //icon to go back forth through carousel.
        const chevronWidth = 40;


    return (
        <div style={{ padding: `0 ${chevronWidth}px` }}>
        <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={5}
        gutter={20}
        leftChevron={<button>{"<"}</button>}
        rightChevron={<button>{">"}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
        >
        {props.children}
       </ItemsCarousel>
       </div>
    );
};

export default ItemList;