import React from "react";
import styles from "./Card.module.scss";

const Card = ({ id, selected, setSelected, props }) => {
    const selectData = () => {
        if (selected === id) return;
        setSelected(id);
    };

    return (
        <div
            onClick={selectData}
            className={
                selected === id ? styles.selectedWrapper : styles.wrapper
            }
        >
            <h3>
                {props?.gender} . {props?.nat}
            </h3>
            <h2>
                {props?.name?.title +
                    ". " +
                    props?.name?.first +
                    " " +
                    props?.name?.last}
            </h2>
            <p>{props?.email}</p>
        </div>
    );
};

export default Card;
