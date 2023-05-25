import { FLOORS } from "../constants";

type Props = {
	room: Room;
	onClick: (roomId: number, floorId: number) => void;
};

export const SearchItem = ({ room, onClick }: Props) => {
	const floor = FLOORS.find((_floor) =>
		_floor.rooms.find((_room) => _room.id === room.id)
	);

	return (
		<li
			className="search__item"
			onClick={() => onClick(room.id, floor?.floor!)}>
			{room.content?.title}
			<div>Этаж: {floor?.floor}</div>
			<span className="search__item-light">
				{room.content?.subjects?.[0]?.teacher.name}
			</span>
		</li>
	);
};
