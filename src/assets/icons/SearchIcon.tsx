import { FC } from 'react';
import { IIconEntity } from '../../types/entity/icon';

type SearchIconPropsType = IIconEntity;
const SearchIcon: FC<SearchIconPropsType> = ({ width = 10, height = 8 }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none">
            <path
                d="M19.0008 19.0008L13.8038 13.8038M13.8038 13.8038C15.2104 12.3972 16.0006 10.4895 16.0006 8.50028C16.0006 6.51108 15.2104 4.60336 13.8038 3.19678C12.3972 1.79021 10.4895 1 8.50028 1C6.51108 1 4.60336 1.79021 3.19678 3.19678C1.79021 4.60336 1 6.51108 1 8.50028C1 10.4895 1.79021 12.3972 3.19678 13.8038C4.60336 15.2104 6.51108 16.0006 8.50028 16.0006C10.4895 16.0006 12.3972 15.2104 13.8038 13.8038Z"
                stroke="#1B1D21"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
    );
};

export { SearchIcon };
