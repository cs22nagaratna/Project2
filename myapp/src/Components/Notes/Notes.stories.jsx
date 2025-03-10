import React from "react";
import Notes from "./Notes"

export default{
    title:"Components/Notes",
    component:Notes,
};
const Template=(args)=><Notes {...args}/>
export const notes=Template.bind()