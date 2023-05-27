type Room = {
    id: number,
    x?: number,
    y?: number,
    points?: Array<{
        x: number;
        y: number;
    }>,
    walls?: {
        x: number;
        y: number;
        x1: number;
        y1: number;
        horizontal: boolean;
    }[];
    floor?: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    content?: Content,
    selected?: boolean,
    fontSize?: number,
}

type Subject = {
    teacher: AssignedPerson,
    title: string
}

type Content = {
    number?: string,
    subjects?: Subject[],
    title?: string,
    text?: string,
    main?: string,
    images?: string[],
}

type Floor = {
    rooms: Room[]
    title: string
    floor: number
}

type AssignedPerson = {
    name: string,
    email?: string
}