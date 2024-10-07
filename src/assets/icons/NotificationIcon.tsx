import { FC } from 'react';
import { IIconEntity } from '../../types/entity/icon';

type NotificationIconPropsType = IIconEntity;
const NotificationIcon: FC<NotificationIconPropsType> = ({ width = 10, height = 8 }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none">
            <path
                d="M12.3585 15.084C14.2217 14.8634 16.0523 14.4236 17.8125 13.774C16.3218 12.1228 15.4982 9.97645 15.5015 7.75195V7.00195C15.5015 5.41065 14.8693 3.88453 13.7441 2.75931C12.6189 1.63409 11.0928 1.00195 9.50145 1.00195C7.91015 1.00195 6.38403 1.63409 5.25881 2.75931C4.13359 3.88453 3.50145 5.41065 3.50145 7.00195V7.75195C3.50447 9.97658 2.68044 12.1229 1.18945 13.774C2.92245 14.414 4.74945 14.859 6.64445 15.084M12.3585 15.084C10.4604 15.3091 8.54247 15.3091 6.64445 15.084M12.3585 15.084C12.5026 15.5338 12.5384 16.0113 12.463 16.4777C12.3877 16.944 12.2033 17.3859 11.9248 17.7675C11.6464 18.1491 11.2818 18.4595 10.8606 18.6736C10.4395 18.8876 9.97383 18.9991 9.50145 18.9991C9.02908 18.9991 8.56338 18.8876 8.14226 18.6736C7.72115 18.4595 7.35652 18.1491 7.07807 17.7675C6.79962 17.3859 6.61522 16.944 6.53987 16.4777C6.46452 16.0113 6.50035 15.5338 6.64445 15.084"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
    );
};

export { NotificationIcon };
