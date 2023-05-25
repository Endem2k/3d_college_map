import { useState } from "react";
import { FLOORS } from "../constants";
import { SearchItem } from "./SearchItem";

import "../styles/search.css";
import { CloseIcon } from "./Icons/CloseIcon";

type Props = {
	onChange: (roomId: number, floorId: number) => void;
};

export const Search = ({ onChange }: Props) => {
	const [query, setQuery] = useState("");

	const rooms = FLOORS.map((_floor) => _floor.rooms).flat();

	const lowerQuery = query.toLowerCase();
	const options = rooms.filter((room) => {
		if (!query.length) {
			return false;
		}

		if (
			room.content?.title &&
			room.content?.title.toLowerCase().indexOf(lowerQuery) > -1
		) {
			return true;
		}

		if (
			room.content?.text &&
			room.content?.text.toLowerCase().indexOf(lowerQuery) > -1
		) {
			return true;
		}

		if (
			room.content?.number &&
			room.content?.number.toLowerCase().indexOf(lowerQuery) > -1
		) {
			return true;
		}

		if (
			room.content?.subjects?.find(
				(item) =>
					item.title.toLowerCase().indexOf(lowerQuery) > -1 ||
					item.teacher.name.toLowerCase().indexOf(lowerQuery) > -1
			)
		) {
			return true;
		}

		return false;
	});

	const onClick = (roomId: number, floor: number) => {
		setQuery("");
		onChange(roomId, floor);
	};

	return (
		<div className="search">
			<label className="search__container">
				<span className="search__label">Поиск</span>
				<div className="search__field">
					<input
						className="search__input"
						value={query}
						onInput={(e: any) => setQuery(e.target.value)}></input>
					{!!query.length && (
						<button
							className="search__close"
							onClick={() => setQuery("")}>
							<CloseIcon />
						</button>
					)}
				</div>
			</label>

			{!!options.length && (
				<ul className="search__options">
					{options.map((room) => (
						<SearchItem
							room={room}
							key={room.id}
							onClick={onClick}
						/>
					))}
				</ul>
			)}
		</div>
	);
};
