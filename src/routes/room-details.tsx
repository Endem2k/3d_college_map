import "../styles/room.css";

import { Link, useParams } from "react-router-dom";
import { FLOORS } from "../constants";
import { useContext, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { FloorContext } from "../contexts/FloorContext";

export function RoomDetails() {
	const currentFloor = useContext(FloorContext);
	const [rooms] = useState(
		FLOORS.find((floor) => floor.floor === currentFloor)?.rooms
	);

	const params = useParams();
	const id = +params.id!;
	const room = rooms!.find((room) => room.id === id)!;

	return (
		<div className="room-details__container">
			<div className="room-details__inner">
				<Link
					className="room-details__link"
					to="/">
					Назад
				</Link>
				<ReactMarkdown children={room.content?.main!}></ReactMarkdown>
			</div>
		</div>
	);
}
