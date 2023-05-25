import "../App.css";

import { Scene } from "../components/Scene";
import { InfoPopup } from "../components/InfoPopup";
import { useState } from "react";
import { FLOORS } from "../constants";
import { Outlet } from "react-router-dom";
import { FloorContext } from "../contexts/FloorContext";
import { FloorSelect } from "../components/FloorSelect";
import { Search } from "../components/Search";

export function Root() {
	const [floor, setFloor] = useState(1);
	const rooms = FLOORS.find((_floor) => _floor.floor === floor)!.rooms;
	const [showGrid, setShowGrid] = useState(false);
	const [infoOpened, setInfoOpened] = useState(false);
	const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);

	const onRoomSelected = (_evt: any, id: number) => {
		if (selectedRoomId === id) {
			setInfoOpened(false);
			setSelectedRoomId(null);
		} else {
			setInfoOpened(true);
			setSelectedRoomId(id);
		}
	};

	const onCloseInfo = () => {
		setInfoOpened(false);
		setSelectedRoomId(null);
	};

	const onFloorChange = (_floor: number) => {
		setFloor(_floor);
		setSelectedRoomId(null);
		setInfoOpened(false);
	};

	const onSearchChange = (roomId: number, floorId: number) => {
		setFloor(floorId);
		setInfoOpened(true);
		setSelectedRoomId(roomId);
	};

	return (
		<FloorContext.Provider value={3}>
			<div className="room-details">
				<Outlet></Outlet>
			</div>
			<div
				id="canvas-container"
				className="canvas-container">
				<div className="ui-layer">
					<div className="info">
						<InfoPopup
							opened={infoOpened}
							selectedRoomId={selectedRoomId}
							rooms={rooms}
							onClose={onCloseInfo}
						/>
					</div>

					<div className="ui-layer__container search">
						<Search onChange={onSearchChange} />
					</div>

					<div className="ui-layer__container controls">
						<label className="flex align-items-center gap margin-bottom">
							<input
								type="checkbox"
								checked={showGrid}
								onChange={() => setShowGrid(!showGrid)}
							/>
							Сетка
						</label>

						<FloorSelect
							onChange={onFloorChange}
							floor={floor}
						/>
					</div>
				</div>
				<Scene
					onRoomSelected={onRoomSelected}
					rooms={rooms}
					selectedRoomId={selectedRoomId}
					showGrid={showGrid}
				/>
			</div>
		</FloorContext.Provider>
	);
}
