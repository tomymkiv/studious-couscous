// Datos centrales del sitio.
// Los valores marcados con REEMPLAZAR son de demostración para el MVP:
// deben sustituirse por la información real del estudio antes de publicar.

export const site = {
	name: 'Abogados Papus',
	tagline: 'Estudio jurídico en Buenos Aires',
	description:
		'Estudio jurídico en Buenos Aires. Atendemos accidentes de tránsito, divorcio, cuidado personal y cuota alimenticia con atención directa del abogado responsable.',
	city: 'Buenos Aires',
	province: 'Ciudad Autónoma de Buenos Aires',
	country: 'Argentina',
	url: 'https://tomymkiv.github.io/studious-couscous/',

	// REEMPLAZAR: teléfono real del estudio.
	phone: '123123312',
	phoneDisplay: '123 123 312',

	// REEMPLAZAR: correo con dominio propio.
	email: 'nene@gmail.com',

	// REEMPLAZAR: dirección real.
	address: 'Av. Corrientes 1840, piso 6',
	addressCity: 'Ciudad Autónoma de Buenos Aires',

	// REEMPLAZAR: horario real de atención.
	hours: 'Lunes a viernes, de 9:00 a 18:00',

	// REEMPLAZAR: años reales de ejercicio.
	years: 12,

	// Dato provisto por el estudio.
	cases: 50,
};

export const navLinks = [
	{ label: 'Inicio', href: '#inicio', section: 'inicio' },
	{ label: 'Accidentes de tránsito', href: '#accidentes', section: 'accidentes' },
	{ label: 'Derecho de familia', href: '#familia', section: 'familia' },
	{ label: 'El bufete', href: '#bufete', section: 'bufete' },
	{ label: 'Preguntas frecuentes', href: '#preguntas', section: 'preguntas' },
];

export const practiceAreas = [
	{
		id: 'accidentes',
		eyebrow: 'Área de práctica',
		title: 'Accidentes de tránsito',
		lead: 'Después de un choque, la aseguradora suele apurar un acuerdo antes de que se conozca el alcance real de las lesiones. Revisamos el caso antes de que firme cualquier cosa.',
		items: [
			'Reclamos por lesiones y daños materiales',
			'Negociación con compañías de seguros',
			'Accidentes de auto, moto y peatones',
			'Indemnización por incapacidad y gastos médicos',
		],
		panelTitle: 'Qué revisamos primero',
		panelItems: [
			'Los plazos que tiene para reclamar',
			'Las pruebas del hecho y de la atención médica',
			'El alcance de las lesiones y su relación con el siniestro',
		],
		ctaLabel: 'Consultar por un accidente',
	},
	{
		id: 'familia',
		eyebrow: 'Área de práctica',
		title: 'Derecho de familia',
		lead: 'Las decisiones sobre hijos, bienes y convivencia tienen efectos que duran años. Le explicamos qué puede acordar, qué decide el juez y qué conviene dejar por escrito.',
		items: [
			'Divorcio de mutuo acuerdo y unilateral',
			'Cuidado personal y régimen de comunicación',
			'Cuota alimenticia',
			'División de bienes',
		],
		panelTitle: 'Qué definimos con usted',
		panelItems: [
			'Qué acuerdos son posibles antes del juicio',
			'Cómo se organiza el cuidado de los hijos',
			'Qué documentación respalda cada pedido',
		],
		ctaLabel: 'Consultar por un tema de familia',
	},
];

export const processSteps = [
	{
		number: '01',
		title: 'Solicita una consulta',
		body: 'Nos cuenta qué pasó y qué necesita resolver. Le indicamos qué documentación conviene reunir antes de la primera reunión.',
	},
	{
		number: '02',
		title: 'Estudiamos su caso',
		body: 'Revisamos plazos, pruebas y antecedentes. Le entregamos un presupuesto por escrito con las etapas y los honorarios.',
	},
	{
		number: '03',
		title: 'Defendemos su posición',
		body: 'Negociamos o litigamos según convenga a su caso, con actualizaciones en cada avance y respuesta directa del abogado responsable.',
	},
];

export const benefits = [
	{
		title: 'Un abogado responsable por su caso',
		body: 'Lo atiende la persona que estudia el expediente, desde la primera reunión hasta la resolución.',
	},
	{
		title: 'Honorarios por escrito',
		body: 'Antes de empezar sabe qué paga, cuándo y por qué. Sin cargos que aparezcan después.',
	},
	{
		title: 'Plazos explicados',
		body: 'Le contamos qué etapas existen y cuánto suelen demorar, sin prometer fechas que no dependen del estudio.',
	},
	{
		title: 'Confidencialidad',
		body: 'Los datos de su caso quedan bajo secreto profesional desde la primera conversación.',
	},
	{
		title: 'Atención después de un accidente',
		body: 'Si el siniestro fue reciente, revisamos primero los pasos que no admiten demora.',
	},
];

export const team = [
	{
		name: 'Dra. Valentina Rossi',
		initials: 'VR',
		role: 'Socia',
		focus: 'Accidentes de tránsito y reclamos por lesiones',
	},
	{
		name: 'Dr. Martín Aguirre',
		initials: 'MA',
		role: 'Socio',
		focus: 'Derecho de familia y acuerdos',
	},
	{
		name: 'Dra. Lucía Fernández',
		initials: 'LF',
		role: 'Asociada',
		focus: 'Negociación con aseguradoras y documentación',
	},
];

// Testimonios de demostración para el MVP. No son reseñas verificadas.
// REEMPLAZAR por valoraciones reales, con autorización de cada cliente.
export const testimonials = [
	{
		name: 'Carla Benítez',
		initials: 'CB',
		area: 'Accidente de tránsito',
		rating: 5,
		quote:
			'El estudio se ocupó de todo con la aseguradora. Me explicaron cada paso en palabras claras y nunca tuve que llamar para preguntar cómo iba el caso.',
	},
	{
		name: 'Diego Sosa',
		initials: 'DS',
		area: 'Divorcio',
		rating: 5,
		quote:
			'Llegué con miedo de que el divorcio se convirtiera en una pelea larga. Cerramos un acuerdo en pocas reuniones y todo quedó por escrito.',
	},
	{
		name: 'Mariela Quiroga',
		initials: 'MQ',
		area: 'Cuidado personal',
		rating: 5,
		quote:
			'Me acompañaron en un momento difícil y siempre respondieron mis dudas. El régimen de visitas quedó claro para las dos partes.',
	},
	{
		name: 'Rubén Alcaraz',
		initials: 'RA',
		area: 'Accidente de tránsito',
		rating: 3,
		quote:
			'El resultado fue el que esperaba, aunque el trámite se estiró varios meses más de lo que me habían dicho al principio. La comunicación mejoró cuando pedí hablar con la socia.',
	},
];

export const faqs = [
	{
		question: '¿Cómo se cobran los honorarios?',
		answer:
			'La primera consulta tiene un arancel que se informa antes de agendar. Si el caso avanza, recibe un presupuesto por escrito con las etapas y la forma de pago. En accidentes de tránsito trabajamos con honorarios por resultado, además de los gastos del expediente.',
	},
	{
		question: '¿Qué documentos conviene llevar a la primera reunión?',
		answer:
			'En un accidente, la denuncia policial, la constancia de atención médica, las fotos del siniestro y los datos del otro vehículo y de su aseguradora. En familia, las partidas de matrimonio y nacimiento, los comprobantes de ingresos y cualquier acuerdo anterior entre las partes.',
	},
	{
		question: '¿Qué hago en las primeras horas después de un accidente?',
		answer:
			'Priorice la atención médica y guarde toda la documentación. Anote cómo ocurrió el hecho, los datos de los testigos y del otro conductor. No firme documentos de la aseguradora ni acepte un pago sin revisar antes el alcance de las lesiones con un abogado.',
	},
	{
		question: '¿Debo aceptar la oferta del seguro?',
		answer:
			'No conviene aceptarla sin revisar el caso. La primera oferta suele calcularse antes de conocer la incapacidad definitiva. Si firma un acuerdo, en general cierra la posibilidad de reclamar diferencias más adelante.',
	},
	{
		question: '¿Qué pasa si el otro conductor no tiene seguro?',
		answer:
			'Existen otras vías: la cobertura del propio vehículo, si la contrató, y el reclamo contra el patrimonio del responsable. Analizamos qué opción permite recuperar el daño con menos demora.',
	},
	{
		question: '¿Cuánto tarda un reclamo por lesiones?',
		answer:
			'Depende de la negociación y de la instancia judicial. Muchos casos se cierran en la etapa previa al juicio, sobre todo cuando la prueba médica está completa. No prometemos plazos exactos porque buena parte del trámite no depende del estudio.',
	},
	{
		question: '¿Cuánto tarda un divorcio?',
		answer:
			'El divorcio de mutuo acuerdo suele resolverse más rápido que el unilateral con conflicto. En Argentina no hace falta invocar una causa, pero sí presentar una propuesta sobre bienes e hijos cuando corresponde.',
	},
	{
		question: '¿Cómo se define el cuidado personal de los hijos?',
		answer:
			'Puede ser compartido o unilateral. El criterio central es el interés superior del niño. Si los padres no llegan a un acuerdo, el juez resuelve después de escuchar a las partes y de conocer la organización familiar.',
	},
	{
		question: '¿Cómo se calcula la cuota alimenticia?',
		answer:
			'No hay un porcentaje fijo. Se consideran los ingresos de quien la paga, las necesidades de los hijos y el nivel de vida que tenían. Las cuotas se actualizan y pueden revisarse si cambian las circunstancias.',
	},
	{
		question: '¿Puedo cambiar de abogado con el caso ya iniciado?',
		answer:
			'Sí. Puede cambiar de abogado en cualquier etapa. Lo primero es ordenar el expediente y revisar qué actuaciones ya se hicieron para no perder plazos.',
	},
];
