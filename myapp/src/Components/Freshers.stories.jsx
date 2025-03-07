import React from "react";
import Freshers from "./Freshers"

export default{
    title:"Components/Freshers",
    component:Freshers,
};
const Template=(args)=><Freshers {...args}/>
export const freshers=Template.bind();