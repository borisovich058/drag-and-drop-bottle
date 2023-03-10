enum BottlesEnum {
    blue,
    brown,
    green,
    red,
    white
}

const bottles: Record<BottlesEnum, BottlesType> = {
    [BottlesEnum.blue]: {
        id: BottlesEnum.blue,
        image: require('./img/blue.png')
    },
    [BottlesEnum.brown]: {
        id: BottlesEnum.brown,
        image: require('./img/brow.png')
    },
    [BottlesEnum.green]: {
        id: BottlesEnum.green,
        image: require('./img/green.png')
    },
    [BottlesEnum.red]: {
        id: BottlesEnum.red,
        image: require('./img/red.png')
    },
    [BottlesEnum.white]: {
        id: BottlesEnum.white,
        image: require('./img/white.png')
    }
}

/** Выигрышная комбинация */
const correctPosition = [
    BottlesEnum.green,
	BottlesEnum.white,
	BottlesEnum.brown,
	BottlesEnum.red,
	BottlesEnum.blue,
];

/*Позиция*/
enum ShelvesEnum {
	top,
	bottom,
}

/**Правила */
const rules = [
    'По краям стоят круглые бутылки',
	'Голубая бутылка стоит рядом с красной',
	'В центре стоит бутылка без пробки',
	'Красная бутылка стоит правее зеленой и белой',
	'Зеленая бутылка не стоит рядом с бутылками без пробки',
];