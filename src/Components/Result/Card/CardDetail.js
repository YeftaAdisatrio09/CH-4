import React from "react";

const CardDetail = (props) => {
    return (
        <div>
            {props.lable}:{props.value}
        </div>
    );
};

export default CardDetail;
