import { createRef, useEffect, useRef, useState } from "react";
import { halfPi, wallWidth } from "../constants";
import { Text } from "@react-three/drei";
import { ShapeRoom } from "./ShapeRoom";
import { ThreeEvent } from "@react-three/fiber";
import { Color, Material, BufferGeometry, Mesh } from "three";

import Roboto from "../assets/fonts/Roboto-Regular.ttf";

type Props = {
	room: Room;
	selected?: boolean;
	onClick?: (evt: ThreeEvent<MouseEvent>, id: number) => void;
};

function RoomMaterial({ color }: { color: Color | number | undefined }) {
	return (
		<meshPhongMaterial
			color={color}
			specular={color}
			emissive={0x2a8ffb}
			shininess={10}
			opacity={0.9}
		/>
	);
}

export function Room({ room, selected, onClick }: Props) {
	const [hovering, setHovering] = useState(false);
	const meshRef = createRef<Mesh<BufferGeometry, Material | Material[]>>();

	const positionX = room.floor
		? room.floor.x * 10 + room.floor.width * 5
		: room.x! * 10;
	const positionY = room.floor
		? room.floor.y * 10 + room.floor.height * 5
		: room.y! * 10;

	useEffect(() => {
		if (hovering) document.body.style.cursor = "pointer";

		return () => {
			document.body.style.cursor = "auto";
		};
	}, [hovering]);

	return (
		<>
			<mesh
				ref={meshRef}
				castShadow
				receiveShadow
				position={[positionX, room.floor ? -1.5 : -4, positionY]}
				rotation={[room.floor ? 0 : -halfPi, 0, 0]}
				onPointerEnter={() => setHovering(true)}
				onPointerLeave={() => setHovering(false)}
				onClick={onClick ? (evt) => onClick(evt, room.id) : () => {}}>
				{room.floor && (
					<>
						<boxGeometry
							attach="geometry"
							args={[room.floor.width * 10, 5, room.floor.height * 10]}
						/>
						<Text
							font={Roboto}
							color="black"
							fontSize={room?.fontSize || 10}
							position={[0, 5, 0]}
							rotation={[-halfPi, 0, 0]}>
							{room.content?.title}
						</Text>
					</>
				)}

				{room.points && (
					<>
						<ShapeRoom
							x={room.x!}
							y={room.y!}
							points={room.points}
						/>
						<Text
							font={Roboto}
							color="black"
							fontSize={room?.fontSize || 10}
							anchorY={16}
							anchorX={0}
							position={[5, 5, 6]}
							rotation={[0, 0, 0]}>
							{room.content?.title}
						</Text>
					</>
				)}

				<RoomMaterial color={selected || hovering ? 0x000000 : 0x2a8fff} />
			</mesh>

			{room.walls && (
				<group>
					{room.walls.map((item, index) => (
						<mesh
							castShadow
							receiveShadow
							key={index}
							position={[
								item.x * 5 + item.x1 * 5,
								0,
								item.y * 5 + item.y1 * 5,
							]}>
							<boxGeometry
								attach="geometry"
								args={[
									item.horizontal
										? (item.x1 - item.x) * 10 + wallWidth
										: wallWidth,
									wallWidth,
									item.horizontal
										? wallWidth
										: (item.y1 - item.y) * 10 + wallWidth,
								]}
							/>
							<meshPhongMaterial
								color={selected || hovering ? 0xfff00 : 0xffffff}
								flatShading={true}
							/>
						</mesh>
					))}
				</group>
			)}
		</>
	);
}
