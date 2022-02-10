import React, {useState} from "react";
import css from "./NotificationsButton.module.css";
import classNames from "classnames";

export default function NotificationsButton() {
	const [hasUnreadNotification, setHasUnreadNotification] = useState(false);
	const unreadNotificationIndicatorClasses = classNames(css.unreadNotificationIndicator, {
		[css.visible]: hasUnreadNotification,
	})
	return (
		<a href="#" className={css.notificationButton} onClick={() => setHasUnreadNotification(!hasUnreadNotification)}>
			<svg
				className={css.notificationButton__icon}
				width="25"
				height="25"
				viewBox="0 0 16 17"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M12.5 6C12.5 4.80653 12.0259 3.66193 11.182 2.81802C10.3381 1.97411 9.19348 1.5 8 1.5C6.80653 1.5 5.66193 1.97411 4.81802 2.81802C3.97411 3.66193 3.5 4.80653 3.5 6C3.5 11.25 1.25 12.75 1.25 12.75H14.75C14.75 12.75 12.5 11.25 12.5 6Z"
					stroke="#DBDFEA"
					strokeWidth="0.8"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M9.29751 15.75C9.16566 15.9773 8.9764 16.166 8.74868 16.2971C8.52097 16.4283 8.2628 16.4973 8.00001 16.4973C7.73723 16.4973 7.47906 16.4283 7.25134 16.2971C7.02363 16.166 6.83437 15.9773 6.70251 15.75"
					stroke="#DBDFEA"
					strokeWidth="0.8"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<circle
					className={unreadNotificationIndicatorClasses}
					cx="11.5"
					cy="2.5"
					r="2.5"
					transform="rotate(-90 11.5 2.5)"
					fill="url(#gradient)"
				/>
				<defs>
					<linearGradient
						id="gradient"
						x1="9"
						y1="2.49941"
						x2="13.9997"
						y2="2.49941"
						gradientUnits="userSpaceOnUse">
						<stop stopColor="#DC2430" />
						<stop offset="1" stopColor="#7B4397" />
					</linearGradient>
				</defs>
			</svg>
		</a>
	);
}
