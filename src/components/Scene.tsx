import { Room } from "./Room";
import { SceneWrapper } from "./SceneWrapper";

type Props = {
	onRoomSelected: (e: Event, id: number) => void;
	rooms: Room[];
	selectedRoomId: number | null;
	showGrid: boolean;
};

export function Scene({
	onRoomSelected,
	rooms,
	selectedRoomId,
	showGrid,
}: Props) {
	const onRoomClick = (evt: any, id: number) => {
		onRoomSelected(evt, id);
	};

	return (
		<SceneWrapper>
			{showGrid && (
				<gridHelper
					args={[100000, 10000]}
					position={[0, -4, 0]}
				/>
			)}

			{rooms.map((room, index) => (
				<Room
					key={index}
					room={room}
					selected={selectedRoomId === room.id}
					onClick={onRoomClick}
				/>
			))}
		</SceneWrapper>
	);
}
