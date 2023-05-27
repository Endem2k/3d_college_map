import { Link } from "react-router-dom";
import { CloseIcon } from "./Icons/CloseIcon";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/info-popup.css";

type Props = {
	opened: boolean;
	selectedRoomId: number | null;
	rooms: Room[];
	onClose: () => void;
};

export function InfoPopup({ opened, selectedRoomId, rooms, onClose }: Props) {
	const room = rooms.find((room) => room.id === selectedRoomId);

	return (
		<div className={opened ? "info-popup opened" : "info-popup"}>
			{room?.id! && (
				<>
					<div className="info-popup__title">
						<h2>{room?.content?.title}</h2>
						<button
							className="info-popup__close"
							onClick={onClose}>
							<CloseIcon />
						</button>
					</div>

					{room.content?.images?.length && (
						<div className="info-popup__images">
							<Swiper
								modules={[Pagination]}
								pagination={{ clickable: true }}
								slidesPerView={1}
								spaceBetween={16}>
								{room.content?.images.map((img) => (
									<SwiperSlide>
										<img
											src={img}
											className="info-popup__image"
										/>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					)}

					<p>{room?.content?.text}</p>

					<ul className="info-popup__subjects-list">
						{room?.content?.subjects?.map((subject, index) => (
							<li key={index}>
								<p>{subject.title}</p>
								<span className="info-popup__subjects-list--light">
									{subject.teacher.name}
								</span>
							</li>
						))}
					</ul>

					{room?.content?.main && (
						<Link
							to={`/room/${room?.id}`}
							className="info-popup__link">
							Подробнее
						</Link>
					)}
				</>
			)}
		</div>
	);
}
