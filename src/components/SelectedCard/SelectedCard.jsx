import React from "react";
import styles from "./SelectedCard.module.scss";

const SelectedCard = ({ data }) => {
    return (
        <div className={styles.wrapper}>
            <div>
                <img src={data?.picture?.medium} alt="img" />
                <div>
                    <h1>
                        {data?.name?.title +
                            ". " +
                            data?.name?.first +
                            " " +
                            data?.name?.last}
                    </h1>
                    <br />
                    <span>{data?.location?.street?.number + ", "}</span>
                    <span>
                        {data?.location?.street?.name +
                            ", " +
                            data?.location?.city +
                            ", " +
                            data?.location?.state +
                            ", "}
                    </span>

                    <span>{data?.location?.country + ", "}</span>

                    <span>{data?.location?.postcode}</span>

                    <h3>
                        {data?.location?.timezone?.offset +
                            " - " +
                            data?.location?.timezone?.description}
                    </h3>
                    <h3>{data?.gender}</h3>
                </div>
            </div>
        </div>
    );
};

export default SelectedCard;
