export const buildCell = size => (graph, pos) => {
	const [gx, gy] = pos;
	const half = size / 2;
	const x = (gx * size) + half;
	const y = (gy * size) + half;

	return {
		center : [x, y],
		size   : size,
		data   : graph[gx][gy]
	}
}

const returnPoint = cell => {
	const half = cell.size / 2;
	const pointDeltas = {
		topLeft     : [ -half, -half ],
		top         : [     0, -half ],
		topRight    : [  half, -half ],
		left        : [ -half,     0 ],
		center      : [     0,     0 ],
		right       : [  half,     0 ],
		bottomLeft  : [ -half,  half ],
		bottom      : [     0,  half ],
		bottomRight : [  half,  half ]
	}

	return point => {
		const [dx, dy] = pointDeltas[point];
		const [cx, cy] = cell.center;
		return [cx + dx, cy + dy];
	}
}

export const renderCell = context => {
	const lines = {
		upWall    : [ 'topLeft', 'topRight' ],
		rightWall : [ 'topRight', 'bottomRight' ],
		downWall  : [ 'bottomRight', 'bottomLeft' ],
		leftWall  : [ 'bottomLeft', 'topLeft' ],
		upPath    : [ 'center', 'top' ],
		rightPath : [ 'center', 'right' ],
		downPath  : [ 'center', 'bottom' ],
		leftPath  : [ 'center', 'left' ]
	}

	const drawLine = (to, from, color = 'black') => {
		context.beginPath();
		context.moveTo(...to);
		context.lineTo(...from);
		context.strokeStyle = color;
		context.stroke();
	}

	const fill = (color, topLeft, size) => {
		context.fillStyle = color;
		context.fillRect(...topLeft, size, size);
	}

	return cell => {
		const { size } = cell;
		const { walls, paths, color } = cell.data;
		const points = returnPoint(cell);

		fill(color, points('topLeft'), size);

		walls.forEach(dir => {
			const line = lines[dir + "Wall"].map(points);
			drawLine(...line);
		});

		paths.forEach(dir => {
			const line = lines[dir + "Path"].map(points);
			drawLine(...line, 'red');
		});
	}
}