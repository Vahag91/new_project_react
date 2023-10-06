import React from "react";

export default function Esim({isActive}){

    return (
        <div className={isActive?"active":null}></div>
    )
}