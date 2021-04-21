import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import selectCard from './cardsSlice.js'

export default function Card() {
    const cards = useSelector(selectCard);

    return (
        <div className="card-container">
            <div className="card-title"></div>
            <img className="card-image" />
            <div className="card-information"></div>
        </div>
    )
}