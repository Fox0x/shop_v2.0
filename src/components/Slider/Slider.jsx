import React, { useEffect, useRef } from "react";
import css from "./Slider.module.css";

export const Slider = () => {
	const slider = useRef(null);
	const [sliderWidth, setSliderWidth] = React.useState(0);
	const [sliderOffset, setSliderOffset] = React.useState(0);
	const maxSliderWidth = sliderWidth * 7;

	useEffect(() => {
		setSliderWidth(slider.current.offsetWidth);
		document.querySelectorAll(".slide").forEach((item) => {
			item.style.width = sliderWidth + "px";
		});
	}, [sliderWidth]);

	const moveLeft = () => {
		sliderOffset < 0
			? setSliderOffset(sliderOffset + sliderWidth)
			: setSliderOffset(0);
	};

	const moveRight = () => {
		sliderOffset > -maxSliderWidth + sliderWidth
			? setSliderOffset(sliderOffset - sliderWidth)
			: setSliderOffset(-maxSliderWidth + sliderWidth);
	};

	return (
		<div className={css.slider__wrapper}>
			<div className={css.slider} ref={slider}>
				<button
					className={css.slider__buttonLeft}
					onClick={() => moveLeft()}>
					<img src="/img/svg/chevron.svg" alt="left" />
				</button>
				<div
					className={css.slider__line}
					style={{
						transform: `translateX(${sliderOffset}px)`,
					}}>
					<img
						className="slide"
						src="/img/slider/slide1.jpg"
						alt="slide1"
					/>
					<img
						className="slide"
						src="/img/slider/slide2.jpg"
						alt="slide2"
					/>
					<img
						className="slide"
						src="/img/slider/slide3.jpg"
						alt="slide3"
					/>
					<img
						className="slide"
						src="/img/slider/slide4.jpg"
						alt="slide4"
					/>
					<img
						className="slide"
						src="/img/slider/slide5.jpg"
						alt="slide5"
					/>
					<img
						className="slide"
						src="/img/slider/slide6.jpg"
						alt="slide6"
					/>
					<img
						className="slide"
						src="/img/slider/slide7.jpg"
						alt="slide7"
					/>
				</div>
				<button
					className={css.slider__buttonRight}
					onClick={() => moveRight()}>
					<img src="/img/svg/chevron.svg" alt="left" />
				</button>
			</div>
		</div>
	);
};
