import React, { createContext } from 'react';

const Shoes = [
    {
        id: 1,
        title: "Nike Shoes 01",
        src: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
        description: "UI/UX designing, html css tutorials",
        context: "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 23,
        color: ["red", "crimson", "teal"],
        count: 1
    },
    {
        id: 2,
        title: "Nike Shoes 02",
        src: "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
        description: "UI/UX designing, html css tutorials",
        context: "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 23,
        color: ["red", "black", "crimson", "teal"],
        count: 1
    },
    {
        id: 3,
        title: "Nike Shoes 03",
        src: "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
        description: "UI/UX designing, html css tutorials",
        context: "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 23,
        color: ["red", "black", "crimson", "teal"],
        count: 1
    },
    {
        id: 4,
        title: "Nike Shoes 04",
        src: "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
        description: "UI/UX designing, html css tutorials",
        context: "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 23,
        color: ["red", "black", "crimson", "teal"],
        count: 1
    },
    {
        id: 5,
        title: "Nike Shoes 05",
        src: "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
        description: "UI/UX designing, html css tutorials",
        context: "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 23,
        color: ["red", "black", "crimson", "teal"],
        count: 1
    },
    {
        id: 6,
        title: "Nike Shoes 06",
        src: "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
        description: "UI/UX designing, html css tutorials",
        context: "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 23,
        color: ["red", "black", "crimson", "teal"],
        count: 1
    },
]
const dataContext = createContext(Shoes);
export default dataContext;

export function DataProvider({ children }) {
    return (
        <dataContext.Provider value={Shoes}>
            {children}
        </dataContext.Provider>
    )
}

