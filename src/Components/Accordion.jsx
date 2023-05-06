import { useState } from "react";


const Accordion = ({questions}) => {
    const [open, setOpen]= useState(false);
    const {title, info} = questions
    const openAccordion = () => {

        setOpen((open)=> !open);

    }

    return (
        <div className="border-[1px] px-[1.5rem] py-[1rem] rounded-md shadow-md ">
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-[1rem]">{title}</h3> 
                <button onClick={openAccordion} className={`font-bold text-[1.2rem] bg-purple-500 rounded-full ${open? "px-[0.8rem]" : "px-[0.6rem]"} py-[1px]`}>{open? '-' : '+'}</button>
            </div>
            <p className={ `${open? "visible " : "hidden"} mt-[1rem]`}>{info}</p>
        </div>
    )
}

export default Accordion;