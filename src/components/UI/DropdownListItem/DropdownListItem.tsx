import React from "react";
import { Link } from "react-router-dom";

type DropdownListItemProps = {
    children: string;
    link: string;
    className: string;
};

const DropdownListItem = ({
    children,
    link,
    className,
}: DropdownListItemProps): JSX.Element => {
    return (
        <li>
            <Link to={link} className={className}>
                {children}
            </Link>
        </li>
    );
};

export default DropdownListItem;
