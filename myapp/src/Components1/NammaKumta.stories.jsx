import React from "react";
import NammaKumta from "./NammaKumta"

export default{
    title:"Components1/NammaKumta",
    component:NammaKumta,
};
const Template=(args)=><NammaKumta {...args}/>
export const nammaKumta=Template.bind()