export const wallWidth = 5;
export const halfPi = Math.PI / 2;

export const FLOORS: Floor[] = [
    {
        floor: 4,
        rooms: [
            {
                id: 169,
                floor: {
                    x: 68.25,
                    y: -2.25,
                    width: 3.25,
                    height: 6.25
                }
            },
            {
                id: 170,
                floor: {
                    x: 72,
                    y: -1.25,
                    width: 9,
                    height: 5.25
                },
                content: {
                    title: '4.2'
                }
            },
            {
                id: 171,
                floor: {
                    x: 81.5,
                    y: -1.25,
                    width: 8.75,
                    height: 5.25
                },
                content: {
                    title: '4.3'
                }
            },
            {
                id: 172,
                floor: {
                    x: 90.75,
                    y: -1.25,
                    width: 3.5,
                    height: 5.25
                },
                fontSize: 3,
                content: {
                    title: 'Препараторская'
                }
            },
            {
                id: 173,
                floor: {
                    x: 94.75,
                    y: -1.25,
                    width: 10,
                    height: 5.25
                },
                content: {
                    title: '4.5',
                    subjects: [
                        {
                            teacher: { name: 'Кирик Ирина Борисовна', },
                            title: 'МДК.09.03 Обеспечение безопасности веб-приложений'
                        }
                    ]
                }
            },
            {
                id: 174,
                floor: {
                    x: 105.25,
                    y: -2,
                    width: 2.75,
                    height: 6
                },
                fontSize: 4,
                content: {
                    title: 'Лестница'
                }
            },
            {
                id: 175,
                floor: {
                    x: 68.25,
                    y: 4.5,
                    width: 39.75,
                    height: 2.5
                },
                content: {
                    title: 'Главный коридор'
                }
            },
            {
                id: 176,
                floor: {
                    x: 68.25,
                    y: 7.5,
                    width: 9,
                    height: 6
                },
                content: {
                    title: '4.6',
                    subjects: [
                        {
                            teacher: { name: 'Юрченко Алексей Михайлович' },
                            title: 'МДК.09.01 Проектирование и разработка веб-приложений'
                        }
                    ]
                }
            },
            {
                id: 177,
                floor: {
                    x: 77.75,
                    y: 7.5,
                    width: 2.75,
                    height: 6
                }
            },
            {
                id: 178,
                floor: {
                    x: 81,
                    y: 7.5,
                    width: 9,
                    height: 6
                },
                content: {
                    title: '4.12',
                    subjects: [
                        {
                            teacher: { name: 'Микитич Петр Алексеевич' },
                            title: 'Безопасность жизнедеятельности'
                        }
                    ]
                }
            },
            {
                id: 179,
                floor: {
                    x: 90.5,
                    y: 7.5,
                    width: 8.5,
                    height: 6
                },
                content: {
                    title: '4.9'
                }
            },
            {
                id: 180,
                floor: {
                    x: 99.5,
                    y: 7.5,
                    width: 8.5,
                    height: 6
                },
                content: {
                    title: '4.8'
                }
            },
        ],
        title: '4'
    },
    {
        floor: 3,
        rooms: [
            {
                id: 116,
                floor: {
                    x: 13,
                    y: 7.5,
                    width: 3.75,
                    height: 7
                }
            },

            {
                id: 117,
                floor: {
                    x: 17.25,
                    y: 7.5,
                    width: 3,
                    height: 7
                }
            },
            {
                id: 118,
                floor: {
                    x: 17.25,
                    y: 18,
                    width: 3,
                    height: 7
                }
            },
            {
                id: 119,
                floor: {
                    x: 13,
                    y: 15,
                    width: 7.5,
                    height: 2.5
                }
            },
            {
                id: 120,
                floor: {
                    x: 20.75,
                    y: 7.5,
                    width: 16,
                    height: 17.5
                },
                content: {
                    title: 'Спортзал',
                    subjects: [
                        {
                            teacher: { name: 'Хомяков Олег Анатольевич' },
                            title: 'Физическая культура'
                        },
                        {
                            teacher: { name: 'Куренкова Светлана Александровна' },
                            title: 'Физическая культура'
                        },
                    ]
                }
            },
            {
                id: 121,
                x: 37.25,
                y: 15,
                points: [
                    {
                        x: 0,
                        y: 2,
                    },
                    {
                        x: 0,
                        y: 3.5,
                    },
                    {
                        x: 15.5,
                        y: 3.5,
                    },
                    {
                        x: 15.5,
                        y: 2.5,
                    },
                    {
                        x: 31,
                        y: 2.5,
                    },
                    {
                        x: 31,
                        y: 3,
                    },
                    {
                        x: 33,
                        y: 3,
                    },
                    {
                        x: 33,
                        y: 5,
                    },
                    {
                        x: 34.25,
                        y: 5,
                    },
                    {
                        x: 34.25,
                        y: -8,
                    },
                    {
                        x: 68,
                        y: -8,
                    },
                    {
                        x: 68,
                        y: 2.5,
                    },
                    {
                        x: 98.25,
                        y: 2.5,
                    },
                    {
                        x: 98.25,
                        y: -0.5,
                    },
                    {
                        x: 70.75,
                        y: -0.5,
                    },
                    {
                        x: 70.75,
                        y: -10.5,
                    },
                    {
                        x: 31,
                        y: -10.5,
                    },
                    {
                        x: 31,
                        y: 0,
                    },
                    {
                        x: 16,
                        y: 0,
                    },
                    {
                        x: 16,
                        y: 1,
                    },
                    {
                        x: 3.75,
                        y: 1,
                    },
                ],
                fontSize: 10,
                content: {
                    title: 'Главный коридор'
                }
            },
            {
                id: 122,
                x: 37.25,
                y: 7.5,
                points: [
                    {
                        x: 8,
                        y: 0
                    },
                    {
                        x: 8,
                        y: 3.5
                    },
                    {
                        x: 4.5,
                        y: 3.5
                    },
                    {
                        x: 4.5,
                        y: 8
                    },
                    {
                        x: 3.5,
                        y: 8
                    },
                    {
                        x: 0,
                        y: 7
                    },
                ],
                content: {
                    title: '3.11'
                }
            },
            {
                id: 123,
                floor: {
                    x: 42.25,
                    y: 11.5,
                    width: 3,
                    height: 1
                }
            },
            {
                id: 124,
                floor: {
                    x: 42.25,
                    y: 13,
                    width: 3,
                    height: 1
                }
            },
            {
                id: 125,
                floor: {
                    x: 42.25,
                    y: 14.5,
                    width: 3,
                    height: 1
                },
                fontSize: 5,
                content: {
                    title: 'Душ'
                }
            },
            {
                id: 126,
                floor: {
                    x: 37.25,
                    y: 19,
                    width: 2.75,
                    height: 6
                },
                fontSize: 5,
                content: {
                    title: '3.14'
                }
            },
            {
                id: 127,
                floor: {
                    x: 40.5,
                    y: 19,
                    width: 4.75,
                    height: 6
                },
                content: {
                    title: '3.15'
                }
            },
            {
                id: 128,
                x: 45.75,
                y: 7.5,
                points: [
                    {
                        x: 7,
                        y: 0
                    },
                    {
                        x: 7,
                        y: 8
                    },
                    {
                        x: 2.75,
                        y: 8
                    },
                    {
                        x: 2.75,
                        y: 3.5
                    },
                    {
                        x: 0,
                        y: 3.5
                    },
                ],
                content: {
                    title: '3.10\n3.12'
                }
            },
            {
                id: 129,
                floor: {
                    x: 45.75,
                    y: 11.5,
                    width: 2.25,
                    height: 1
                }
            },
            {
                id: 130,
                floor: {
                    x: 45.75,
                    y: 13,
                    width: 2.25,
                    height: 1
                }
            },
            {
                id: 131,
                floor: {
                    x: 45.75,
                    y: 14.5,
                    width: 2.25,
                    height: 1
                },
                fontSize: 5,
                content: {
                    title: 'Душ'
                }
            },
            {
                id: 132,
                floor: {
                    x: 45.75,
                    y: 19,
                    width: 7,
                    height: 6
                },
                content: {
                    title: '3.16'
                }
            },
            {
                id: 133,
                floor: {
                    x: 53.25,
                    y: 7.5,
                    width: 8,
                    height: 7
                },
                content: {
                    title: '3.22',
                    subjects: [
                        {
                            teacher: { name: 'Чагин Дмитрий Владимирович' },
                            title: 'МДК.03.01 Схемотехническое проектирование электронных приборов и устройств'
                        }
                    ]
                }
            },
            {
                id: 134,
                floor: {
                    x: 61.75,
                    y: 7.5,
                    width: 2.5,
                    height: 7
                }
            },

            {
                id: 135,
                floor: {
                    x: 64.75,
                    y: 7.5,
                    width: 3,
                    height: 7
                },
                fontSize: 5,
                content: {
                    title: 'Лестница'
                }
            },
            {
                id: 136,
                floor: {
                    x: 13,
                    y: 18,
                    width: 3.75,
                    height: 7
                }
            },
            {
                id: 137,
                x: 53.25,
                y: 18,
                points: [
                    {
                        x: 9,
                        y: 0
                    },
                    {
                        x: 9,
                        y: 3.5
                    },
                    {
                        x: 5,
                        y: 3.5
                    },
                    {
                        x: 5,
                        y: 7
                    },
                    {
                        x: 0,
                        y: 7
                    }
                ],
                content: {
                    title: '3.17'
                }
            },
            {
                id: 138,
                x: 62.75,
                y: 18,
                points: [
                    {
                        x: 2,
                        y: 0
                    },
                    {
                        x: 2,
                        y: 5
                    },
                    {
                        x: 5,
                        y: 5
                    },
                    {
                        x: 5,
                        y: 7
                    },
                    {
                        x: -4,
                        y: 7
                    },
                    {
                        x: -4,
                        y: 4
                    },
                    {
                        x: 0,
                        y: 4
                    },
                ],
                fontSize: 5,
                content: {
                    title: '3.18\n3.19'
                }
            },
            {
                id: 139,
                floor: {
                    x: 65.25,
                    y: 18,
                    width: 2.5,
                    height: 2
                },
                fontSize: 5,
                content: {
                    title: '3.20'
                }
            },
            {
                id: 140,
                floor: {
                    x: 65.25,
                    y: 20.5,
                    width: 2.5,
                    height: 2
                },
                fontSize: 5,
                content: {
                    title: 'Душ'
                }
            },
            {
                id: 141,
                floor: {
                    x: 68.25,
                    y: 20.5,
                    width: 3.25,
                    height: 4.5
                }
            },
            {
                id: 142,
                floor: {
                    x: 68.25,
                    y: 18.5,
                    width: 1.5,
                    height: 1.5
                }
            },
            {
                id: 143,
                floor: {
                    x: 72,
                    y: 18,
                    width: 2.5,
                    height: 7
                },
                fontSize: 5,
                content: {
                    title: 'Туалет'
                }
            },
            {
                id: 144,
                floor: {
                    x: 72,
                    y: 14,
                    width: 2.5,
                    height: 3.5
                }
            },
            {
                id: 145,
                floor: {
                    x: 72,
                    y: 7.5,
                    width: 12.75,
                    height: 6
                },
                content: {
                    title: '3.29',
                    subjects: [
                        {
                            teacher: { name: 'Гордеев Никита Николаевич' },
                            title: 'МДК.09.02 Оптимизация веб-приложений'
                        },
                        {
                            teacher: { name: 'Гордеев Никита Николаевич' },
                            title: 'Стандартизация, сертификация и техническое документоведение'
                        }
                    ]
                }
            },

            {
                id: 146,
                floor: {
                    x: 85.25,
                    y: 7.5,
                    width: 2.25,
                    height: 6
                },
                fontSize: 5,
                content: {
                    title: '3.36'
                }
            },
            {
                id: 147,
                floor: {
                    x: 88,
                    y: 7.5,
                    width: 2.5,
                    height: 6
                },
                fontSize: 5,
                content: {
                    title: '3.37'
                }
            },
            {
                id: 148,
                floor: {
                    x: 91,
                    y: 7.5,
                    width: 2.25,
                    height: 6
                },
                fontSize: 5,
                content: {
                    title: '3.38'
                }
            },
            {
                id: 149,
                floor: {
                    x: 93.75,
                    y: 7.5,
                    width: 2.5,
                    height: 6
                },
                fontSize: 5,
                content: {
                    title: '3.39'
                }
            },
            {
                id: 150,
                floor: {
                    x: 96.75,
                    y: 7.5,
                    width: 8,
                    height: 6
                },
                content: {
                    title: '3.40'
                }
            },
            {
                id: 151,
                floor: {
                    x: 68.25,
                    y: -2.25,
                    width: 3.25,
                    height: 6.25
                },
                fontSize: 6,
                content: {
                    title: '3.54',
                    text: 'Архив'
                }
            },

            {
                id: 152,
                floor: {
                    x: 72,
                    y: -1.25,
                    width: 6,
                    height: 5.25
                },
                content: {
                    title: '3.31',
                    subjects: [{
                        teacher: { name: 'Капинос Светлана Викторовна' },
                        title: 'Иностранный язык'
                    }]
                }
            },
            {
                id: 153,
                floor: {
                    x: 78.5,
                    y: -1.25,
                    width: 6,
                    height: 5.25
                },
                content: {
                    title: '3.32',
                    subjects: [{
                        teacher: { name: 'Аксенова Ирина Викторовна' },
                        title: 'Иностранный язык'
                    }]
                }
            },
            {
                id: 154,
                floor: {
                    x: 85,
                    y: -1.25,
                    width: 8,
                    height: 5.25
                },
                content: {
                    title: '3.33'
                }
            },
            {
                id: 155,
                floor: {
                    x: 93.5,
                    y: -1.25,
                    width: 2.5,
                    height: 5.25
                },
                fontSize: 6,
                content: {
                    title: '3.34'
                }
            },
            {
                id: 156,
                floor: {
                    x: 96.5,
                    y: -1.25,
                    width: 8.25,
                    height: 5.25
                },
                content: {
                    title: '3.35'
                }
            },

            {
                id: 157,
                floor: {
                    x: 105.25,
                    y: -2,
                    width: 2.75,
                    height: 6
                },
                fontSize: 4,
                content: {
                    title: 'Лестница'
                }
            },
            {
                id: 158,
                floor: {
                    x: 105.25,
                    y: 18,
                    width: 6.75,
                    height: 5.5
                }, content: {
                    title: '3.53',
                    subjects: [
                        {
                            title: 'Иностранный язык',
                            teacher: {
                                name: 'Логинова Ирина Евгеньевна'
                            }
                        }
                    ]
                }
            },
            {
                id: 159,
                floor: {
                    x: 112.5,
                    y: 18,
                    width: 10.75,
                    height: 5.5
                },
                content: {
                    title: 'Библиотека'
                }
            },
            {
                id: 160,
                floor: {
                    x: 123.75,
                    y: 18,
                    width: 8.25,
                    height: 5.5
                },
                content: {
                    title: '3.50',
                    subjects: [
                        {
                            teacher: {
                                name: 'Захватошина Эмилия Михайловна',
                            },
                            title: 'Основы философии'
                        }
                    ],

                }
            },
            {
                id: 161,
                x: 108.5,
                y: 9,
                points: [
                    {
                        x: 8,
                        y: 0
                    },
                    {
                        x: 8,
                        y: 3
                    },
                    {
                        x: 8.5,
                        y: 3
                    },
                    {
                        x: 8.5,
                        y: 0
                    },
                    {
                        x: 11.5,
                        y: 0
                    },
                    {
                        x: 11.5,
                        y: 5
                    },
                    {
                        x: 0,
                        y: 5
                    },
                ],
                content: {
                    title: '3.43\n3.55'
                }
            },
            {
                fontSize: 6,
                id: 181,
                floor: {
                    x: 120.5,
                    y: 9,
                    width: 2.75,
                    height: 5
                },
                content: {
                    title: '3.44'
                }
            },
            {
                fontSize: 5,
                id: 162,
                floor: {
                    x: 123.75,
                    y: 9,
                    width: 3,
                    height: 3
                },
                content: {
                    title: '3.45'
                }
            },
            {
                fontSize: 5,
                id: 163,
                floor: {
                    x: 127.25,
                    y: 9,
                    width: 4.75,
                    height: 3
                },
                content: {
                    title: '3.46'
                }
            },
            {
                fontSize: 5,
                id: 164,
                floor: {
                    x: 130.5,
                    y: 12.5,
                    width: 1.5,
                    height: 1.5
                },
                content: {
                    title: '3.47'
                }
            },
            {
                id: 165,
                floor: {
                    x: 128.5,
                    y: 12.5,
                    width: 1.5,
                    height: 1.5
                }
            },
            {
                id: 166,
                floor: {
                    x: 123.75,
                    y: 12.5,
                    width: 4.25,
                    height: 1.5
                }
            },
            {
                id: 167,
                floor: {
                    x: 132.5,
                    y: 9,
                    width: 3,
                    height: 5
                },
                fontSize: 6,
                content: {
                    title: 'Туалет'
                }
            },
            {
                id: 168,
                floor: {
                    x: 132.5,
                    y: 18,
                    width: 3,
                    height: 6.5
                },
                fontSize: 5,
                content: {
                    title: 'Лестница'
                }
            },
        ],
        title: '3'
    },
    {
        floor: 2,
        rooms: [
            {
                id: 63,
                floor: {
                    x: 0,
                    y: 0,
                    width: 6.5,
                    height: 7
                },
                content: {
                    title: '2.03'
                }
            },
            {
                id: 64,
                floor: {
                    x: 7,
                    y: 0,
                    width: 5.5,
                    height: 7
                },
                content: {
                    title: '2.04'
                }
            },
            {
                id: 65,
                x: 0,
                y: 7.5,
                points: [
                    {
                        x: 12.5,
                        y: 0,
                    },
                    {
                        x: 12.5,
                        y: 7,
                    },
                    {
                        x: 10,
                        y: 7,
                    },
                    {
                        x: 10,
                        y: 1.75,
                    },
                    {
                        x: 5,
                        y: 1.75,
                    },
                    {
                        x: 5,
                        y: 7,
                    },
                    {
                        x: 0,
                        y: 7,
                    }
                ],
                content: {
                    title: '2.02'
                }
            },
            {
                id: 66,
                floor: {
                    x: 5.5,
                    y: 9.75,
                    width: 4,
                    height: 4.75
                }
            },
            {
                id: 67,
                floor: {
                    x: 5.5,
                    y: 15,
                    width: 3,
                    height: 2.25
                }
            },
            {
                id: 68,
                floor: {
                    x: 9,
                    y: 18.5,
                    width: 3.5,
                    height: 6.5
                },
                content: {
                    title: '2.10'
                }
            },
            {
                fontSize: 6,
                id: 69,
                floor: {
                    x: 13,
                    y: 18,
                    width: 3.75,
                    height: 7
                },
                content: {
                    title: 'Лестница'
                }
            },
            {
                id: 70,
                floor: {
                    x: 17.25,
                    y: 18,
                    width: 15,
                    height: 7
                },
                content: {
                    title: '2.12'
                }
            },
            {
                id: 71,
                floor: {
                    x: 32.75,
                    y: 18,
                    width: 4,
                    height: 7
                }
            },
            {
                id: 72,
                floor: {
                    x: 37.25,
                    y: 18,
                    width: 15,
                    height: 7
                },
                content: {
                    title: 'Лаборатория'
                }
            },
            {
                id: 73,
                floor: {
                    x: 52.75,
                    y: 18,
                    width: 15,
                    height: 7
                },
                content: {
                    title: '2.20',
                    subjects: [
                        {
                            teacher: { name: 'Дубровин Виталий Александрович' },
                            title: 'Технологии физического уровня передачи данных'
                        },
                        {
                            teacher: { name: 'Дубровин Виталий Александрович' },
                            title: 'МДК.03.01 Эксплуатация объектов сетевой инфраструктуры'
                        }
                    ]
                }
            },
            {
                id: 74,
                floor: {
                    x: 13,
                    y: 7.5,
                    width: 3.75,
                    height: 3.5
                }
            },
            {
                id: 75,
                floor: {
                    x: 13,
                    y: 11.5,
                    width: 3.75,
                    height: 2
                }
            },
            {
                id: 76,
                floor: {
                    x: 17.25,
                    y: 7.5,
                    width: 7.5,
                    height: 7
                },
                content: {
                    title: '2.08'
                }
            },
            {
                id: 77,
                floor: {
                    x: 25.25,
                    y: 7.5,
                    width: 12.5,
                    height: 7
                },
                content: {
                    title: '2.16',
                    subjects: [
                        {
                            teacher: { name: 'Гвоздев Сергей Егорович' },
                            title: 'МДК.03.02 Теоретические основы ремонта различных видов радиоэлектронной техники'
                        },
                        {
                            teacher: { name: 'Гвоздев Сергей Егорович' },
                            title: 'МДК.02.02 Технология обслуживания и ремонта средств информационных систем'
                        },
                    ]
                }
            },
            {
                id: 78,
                floor: {
                    x: 38.25,
                    y: 7.5,
                    width: 3.5,
                    height: 7
                },
                content: {
                    title: '2.41'
                }
            },
            {
                id: 79,
                floor: {
                    x: 42.25,
                    y: 7.5,
                    width: 3.5,
                    height: 7
                },
                content: {
                    title: '2.17'
                }
            },
            {
                id: 80,
                floor: {
                    x: 46.25,
                    y: 7.5,
                    width: 14.5,
                    height: 7
                },
                content: {
                    title: '2.18',
                    subjects: [{
                        teacher: { name: 'Чулков Виктор Александрович' },
                        title: 'МДК.02.01 Технология обслуживания и ремонта радиоэлектронной аппаратуры'
                    }, {
                        teacher: { name: 'Чулков Виктор Александрович' },
                        title: 'МДК.03.01Технология инсталляции, регулировки, технического обслуживания и ремонта аудио и видео техники'
                    }],
                }
            },
            {
                id: 81,
                floor: {
                    x: 61.25,
                    y: 7.5,
                    width: 3,
                    height: 7
                }
            },
            {
                id: 82,
                floor: {
                    x: 64.75,
                    y: 7.5,
                    width: 3,
                    height: 7
                }
            },
            {
                id: 83,
                floor: {
                    x: 68.25,
                    y: 20.5,
                    width: 3.25,
                    height: 4.5
                }
            },
            {
                id: 84,
                floor: {
                    x: 68.25,
                    y: 18.5,
                    width: 1.5,
                    height: 1.5
                }
            },
            {
                id: 85,
                floor: {
                    x: 72,
                    y: 14,
                    width: 2.5,
                    height: 3.5
                }
            },
            {
                id: 86,
                floor: {
                    x: 72,
                    y: 11.25,
                    width: 2.5,
                    height: 2.25
                }
            },
            {
                id: 87,
                floor: {
                    x: 72,
                    y: 7.5,
                    width: 2.5,
                    height: 3.25
                }
            },
            {
                fontSize: 8,
                id: 88,
                floor: {
                    x: 75,
                    y: 7.5,
                    width: 5.5,
                    height: 6
                },
                content: {
                    title: 'Кабинет\nдиректора'
                }
            },
            {
                fontSize: 6,
                id: 89,
                floor: {
                    x: 81,
                    y: 7.5,
                    width: 3,
                    height: 6
                },
                content: {
                    title: 'Зам.\nдиректора'
                }
            },
            {
                fontSize: 7,
                id: 90,
                floor: {
                    x: 84.5,
                    y: 7.5,
                    width: 5.5,
                    height: 6
                },
                content: {
                    title: 'Бухгалтерия'
                }
            },
            {
                id: 91,
                floor: {
                    x: 90.5,
                    y: 7.5,
                    width: 2.5,
                    height: 6
                }
            },
            {
                id: 92,
                floor: {
                    x: 93.5,
                    y: 7.5,
                    width: 3.25,
                    height: 6
                },
                content: {
                    title: '2.33'
                }
            },
            {
                id: 93,
                floor: {
                    x: 97.25,
                    y: 7.5,
                    width: 7.5,
                    height: 6
                },
                content: {
                    title: '2.32'
                }
            },
            {
                id: 94,
                floor: {
                    x: 63.25,
                    y: 4.5,
                    width: 4.5,
                    height: 2.5
                }
            },
            {
                id: 95,
                floor: {
                    x: 63.25,
                    y: 1.5,
                    width: 4.5,
                    height: 2.5
                },
                fontSize: 8,
                content: {
                    title: '2.37'
                }
            },
            {
                id: 96,
                floor: {
                    x: 63.25,
                    y: -2.25,
                    width: 4.5,
                    height: 3.25
                },
                fontSize: 8,
                content: {
                    title: '2.36'
                }
            },
            {
                id: 97,
                floor: {
                    x: 68.25,
                    y: -2.25,
                    width: 3.25,
                    height: 3.75
                },
                fontSize: 8,
                content: {
                    title: '2.35'
                }
            },
            {

                id: 98,
                floor: {
                    x: 68.25,
                    y: 2,
                    width: 3.25,
                    height: 2
                },
                fontSize: 8,
                content: {
                    title: '2.34'
                }
            },
            {
                fontSize: 6,
                id: 99,
                floor: {
                    x: 72,
                    y: -1.25,
                    width: 2.5,
                    height: 5.25
                },
                content: {
                    title: '2.38'
                }
            },
            {
                id: 100,
                floor: {
                    x: 75,
                    y: -1.25,
                    width: 27.25,
                    height: 5.25
                },
                content: {
                    title: 'Актовый зал'
                }
            },
            {
                id: 101,
                floor: {
                    x: 102.75,
                    y: -1.25,
                    width: 2,
                    height: 5.25
                }
            },
            {
                id: 102,
                floor: {
                    x: 105.25,
                    y: -2,
                    width: 2.75,
                    height: 6
                },
                fontSize: 4,
                content: {
                    title: 'Лестница'
                }
            },
            {
                id: 103,
                floor: {
                    x: 108.5,
                    y: 9,
                    width: 9,
                    height: 5
                },
                content: {
                    title: '2.48'
                }
            },
            {
                id: 104,
                floor: {
                    x: 118,
                    y: 9,
                    width: 3,
                    height: 5
                },
                fontSize: 6,
                content: {
                    title: '2.52'
                }
            },
            {
                id: 105,
                floor: {
                    x: 121.5,
                    y: 9,
                    width: 7.5,
                    height: 5
                },
                content: {
                    title: '2.49'
                }
            },
            {
                id: 106,
                floor: {
                    x: 129.5,
                    y: 9,
                    width: 2.5,
                    height: 5
                },
                fontSize: 6,
                content: {
                    title: '2.53'
                }
            },
            {
                id: 107,
                floor: {
                    x: 132.5,
                    y: 9,
                    width: 3,
                    height: 5
                },
                fontSize: 5,
                content: {
                    title: 'Туалет'
                }
            },
            {
                id: 108,
                floor: {
                    x: 105.25,
                    y: 18,
                    width: 2.75,
                    height: 5.5
                },
                fontSize: 6,
                content: {
                    title: '2.45'
                }
            },
            {
                id: 109,
                floor: {
                    x: 108.5,
                    y: 18,
                    width: 9,
                    height: 5.5
                },
                content: {
                    title: '2.46'
                }
            },
            {
                id: 110,
                floor: {
                    x: 118,
                    y: 18,
                    width: 3,
                    height: 5.5
                },
                fontSize: 6,
                content: {
                    title: '2.50'
                }
            },
            {
                id: 111,
                floor: {
                    x: 121.5,
                    y: 18,
                    width: 7.5,
                    height: 5.5
                },
                content: {
                    title: '2.57'
                }
            },
            {
                id: 112,
                floor: {
                    x: 129.5,
                    y: 18,
                    width: 2.5,
                    height: 5.5
                },
                fontSize: 5,
                content: {
                    title: '2.51'
                }
            },
            {
                id: 113,
                floor: {
                    x: 132.5,
                    y: 18,
                    width: 3,
                    height: 6.5
                },
                fontSize: 5,
                content: {
                    title: 'Лестница'
                }
            },
            {
                id: 114,
                x: 9,
                y: 15,
                points: [
                    {
                        x: 0,
                        y: 3,
                    },
                    {
                        x: 3.5,
                        y: 3,
                    },
                    {
                        x: 3.5,
                        y: 2.5,
                    },
                    {
                        x: 59.25,
                        y: 2.5,
                    },
                    {
                        x: 59.25,
                        y: 3,
                    },
                    {
                        x: 61.25,
                        y: 3,
                    },
                    {
                        x: 61.25,
                        y: 5,
                    },
                    {
                        x: 62.5,
                        y: 5,
                    },
                    {
                        x: 62.5,
                        y: -8,
                    },
                    {
                        x: 96.25,
                        y: -8,
                    },
                    {
                        x: 96.25,
                        y: 2.5,
                    },
                    {
                        x: 126.5,
                        y: 2.5,
                    },
                    {
                        x: 126.5,
                        y: -0.5,
                    },
                    {
                        x: 99,
                        y: -0.5,
                    },
                    {
                        x: 99,
                        y: -10.5,
                    },
                    {
                        x: 59.25,
                        y: -10.5,
                    },
                    {
                        x: 59.25,
                        y: 0,
                    },
                    {
                        x: 7.75,
                        y: 0,
                    },
                    {
                        x: 7.75,
                        y: -1,
                    },
                    {
                        x: 4,
                        y: -1,
                    },
                    {
                        x: 4,
                        y: 0,
                    },
                ],
                content: {
                    title: 'Главный коридор'
                }
            },
            {
                id: 115,
                floor: {
                    x: 72,
                    y: 18,
                    width: 2.5,
                    height: 7
                }
            },
        ],
        title: '2'
    },
    {
        floor: 1,
        rooms: [
            {
                id: 0,
                walls: [
                ],
                floor: {
                    x: 0,
                    y: 0,
                    width: 6.25,
                    height: 7,
                },

            },
            {
                id: 1,
                walls: [],
                floor: {
                    x: 6.75,
                    y: 0,
                    width: 5.75,
                    height: 7,
                },
            },
            {
                id: 2,
                walls: [],
                floor: {
                    x: 0,
                    y: 7.5,
                    width: 8.25,
                    height: 7,
                },
            },
            {
                id: 3,
                walls: [],
                floor: {
                    x: 8.75,
                    y: 7.5,
                    width: 3.75,
                    height: 7,
                },
            },
            {
                id: 4,
                walls: [],
                floor: {
                    x: 13,
                    y: 7.5,
                    width: 3.25,
                    height: 3.25,
                },
                content: {
                    title: '1.08'
                }
            },
            {
                id: 5,
                walls: [],
                floor: {
                    x: 13,
                    y: 11.25,
                    width: 3.25,
                    height: 2,
                },
                content: {
                    title: '1.09'
                }
            },
            {
                id: 6,
                walls: [],
                floor: {
                    x: -1,
                    y: 18.5,
                    width: 6,
                    height: 6.5,
                },
            },
            {
                id: 7,
                walls: [],
                floor: {
                    x: 5.5,
                    y: 18.5,
                    width: 3,
                    height: 6.5,
                },

            },
            {
                id: 8,
                walls: [],
                floor: {
                    x: 16.75,
                    y: 7.5,
                    width: 9.25,
                    height: 5.75,
                },
                content: {
                    title: '1.10'
                }
            },
            {
                id: 9,
                walls: [],
                floor: {
                    x: 26.5,
                    y: 7.5,
                    width: 6.25,
                    height: 5.75,
                },
                content: {
                    title: '1.13'
                }
            },
            {
                id: 10,
                walls: [],
                floor: {
                    x: 33.25,
                    y: 7.5,
                    width: 16,
                    height: 5.75,
                },
                content: {
                    title: '1.14',
                    subjects: [
                        {
                            teacher: {
                                name: '	Харин Евгений Николаевич'
                            },
                            title: 'МДК.09.01 Проектирование и разработка веб-приложений'
                        }
                    ]
                }
            },
            {
                id: 11,
                walls: [],
                floor: {
                    x: 49.75,
                    y: 7.5,
                    width: 12,
                    height: 5.75,
                },
                content: {
                    title: '1.16'
                }
            },
            {
                id: 12,
                walls: [],
                floor: {
                    x: 62.25,
                    y: 10,
                    width: 2,
                    height: 3.25,
                },
            },
            {
                id: 13,
                walls: [],
                floor: {
                    x: 62.25,
                    y: 7.5,
                    width: 2,
                    height: 2,
                },
            },
            {
                id: 14,
                walls: [],
                floor: {
                    x: 9,
                    y: 18.5,
                    width: 3.5,
                    height: 6.5,
                },
            },
            {
                id: 15,
                walls: [],
                floor: {
                    x: 13,
                    y: 18,
                    width: 3.75,
                    height: 5.5,
                },
            },
            {
                id: 16,
                walls: [],
                floor: {
                    x: 13,
                    y: 24,
                    width: 3.75,
                    height: 1,
                },
            },
            {
                id: 17,
                walls: [],
                floor: {
                    x: 17.25,
                    y: 17,
                    width: 8.75,
                    height: 8,
                },
                content: {
                    title: '1.11',
                    subjects: [
                        {
                            teacher: { name: 'МДК.01.03 Разработка мобильных приложений' },
                            title: 'Финская Анастасия Константиновна'
                        }
                    ]
                }
            },
            {
                id: 18,
                walls: [],
                floor: {
                    x: 26.5,
                    y: 17,
                    width: 6.25,
                    height: 8,
                },
                content: {
                    title: '1.18',
                    subjects: [
                        {
                            teacher: { name: 'Кондратьев Виталий Сергеевич' },
                            title: 'Оптимизация веб-приложений'
                        }
                    ]
                }
            },
            {
                id: 19,
                walls: [],
                floor: {
                    x: 62.25,
                    y: 18,
                    width: 5.5,
                    height: 7,
                },
                content: {
                    title: '1.19',
                    subjects: [
                        {
                            teacher: { name: 'Фофонова Елена Владимировна' },
                            title: 'Основы философии'
                        },
                        {
                            teacher: { name: 'Фофонова Елена Владимировна' },
                            title: 'Основы предпринимательской деятельности'
                        }
                    ]
                }
            },
            {
                id: 21,
                walls: [],
                floor: {
                    x: 68.25,
                    y: 20.5,
                    width: 3.25,
                    height: 1,
                },
            },
            {
                id: 22,
                walls: [],
                floor: {
                    x: 68.25,
                    y: 22,
                    width: 3.25,
                    height: 3,
                },
            },
            {
                id: 23,
                walls: [],
                floor: {
                    x: 72,
                    y: 18,
                    width: 2.5,
                    height: 7,
                },
            },
            {
                id: 24,
                walls: [],
                floor: {
                    x: 72,
                    y: 14,
                    width: 2.5,
                    height: 3.5,
                },
            },
            {
                id: 25,
                x: 68.25,
                y: 4.5,
                points: [
                    {
                        x: 39.75,
                        y: 0,
                    },
                    {
                        x: 39.75,
                        y: 19,
                    },
                    {
                        x: 36.25,
                        y: 19,
                    },
                    {
                        x: 36.25,
                        y: 9,
                    },
                    {
                        x: 33.75,
                        y: 9,
                    },
                    {
                        x: 33.75,
                        y: 2.5,
                    },
                    {
                        x: 6.25,
                        y: 2.5,
                    },
                    {
                        x: 6.25,
                        y: 9,
                    },
                    {
                        x: 3.25,
                        y: 9,
                    },
                    {
                        x: 3.25,
                        y: 15.5,
                    },
                    {
                        x: 0,
                        y: 15.5,
                    },
                    {
                        x: 0,
                        y: 13,
                    },
                    {
                        x: -6.25,
                        y: 13,
                    },
                    {
                        x: -8.25,
                        y: 12,
                    },
                    {
                        x: -51.5,
                        y: 12,
                    },
                    {
                        x: -51.5,
                        y: 13,
                    },
                    {
                        x: -55.25,
                        y: 13,
                    },
                    {
                        x: -55.25,
                        y: 9.25,
                    },
                    {
                        x: -6,
                        y: 9.25,
                    },
                    {
                        x: -6,
                        y: 11,
                    },
                    {
                        x: 0,
                        y: 11,
                    },
                ],
                content: {
                    title: 'Главный коридор'
                }

            },

            {
                id: 27,
                walls: [],
                floor: {
                    x: 75,
                    y: 7.5,
                    width: 22.75,
                    height: 6,
                },
                content: {
                    title: '1.26',
                    subjects: [
                        {
                            teacher: {
                                name: 'Веснинов Янис Игоревич'
                            },
                            title: 'МДК.03.02 Безопасность компьютерных сетей'
                        },
                        {
                            teacher: {
                                name: 'Веснинов Янис Игоревич'
                            },
                            title: 'МДК.09.03 Обеспечение безопасности веб-приложений'
                        }
                    ]
                }
            },
            {
                id: 28,
                x: 33.25,
                y: 17,
                points: [
                    {
                        x: 26.5,
                        y: 0,
                    },
                    {
                        x: 28.5,
                        y: 1,
                    },
                    {
                        x: 28.5,
                        y: 3,
                    },
                    {
                        x: 25.5,
                        y: 3,
                    },
                    {
                        x: 25.5,
                        y: 8,
                    },
                    {
                        x: 0,
                        y: 8,
                    },
                ],
                content: {
                    title: "1.12",
                },
            },
            {
                fontSize: 4,
                id: 29,
                x: 64.75,
                y: 7.5,
                points: [
                    {
                        x: 3,
                        y: 0
                    },
                    {
                        x: 3,
                        y: 7.5
                    },
                    {
                        x: -2,
                        y: 7.5
                    },
                    {
                        x: -2,
                        y: 6.25
                    },
                    {
                        x: 0,
                        y: 6.25
                    }
                ],
                content: {
                    title: 'Лестница'
                }

            },
            {
                id: 30,
                floor: {
                    x: 64.75,
                    y: 4.5,
                    width: 3,
                    height: 2.5,
                },
            },
            {
                id: 31,
                floor: {
                    x: 63.25,
                    y: -3,
                    width: 4.5,
                    height: 7,
                },
                content: {
                    title: '1.27 \n 1.29'
                }
            },
            {
                fontSize: 3,
                id: 32,
                floor: {
                    x: 68.25,
                    y: -3,
                    width: 3.5,
                    height: 7,
                },
                content: {
                    title: 'Электрощитовая',
                    number: '1.28'
                }
            },
            {
                id: 33,
                floor: {
                    x: 72.25,
                    y: -1.25,
                    width: 5.5,
                    height: 5.25,
                },
                content: {
                    title: '1.31'
                }
            },
            {
                id: 34,
                floor: {
                    x: 78.25,
                    y: -1.25,
                    width: 8,
                    height: 5.25,
                },
                content: {
                    title: '1.32',
                    subjects: [
                        {
                            teacher: { name: 'Маслов Руслан Андреевич' },
                            title: 'МДК.01.01 Разработка программных модулей'
                        }
                    ]
                }
            },
            {
                id: 35,
                floor: {
                    x: 86.75,
                    y: -1.25,
                    width: 9,
                    height: 5.25,
                },
                content: {
                    title: '1.33'
                }
            },
            {
                id: 36,
                floor: {
                    x: 96.25,
                    y: -1.25,
                    width: 7,
                    height: 5.25,
                },
                content: {
                    title: 'Гардероб'
                }
            },
            {
                id: 37,
                walls: [],
                floor: {
                    x: 98.25,
                    y: 7.5,
                    width: 3.25,
                    height: 3,
                },
            },
            {
                id: 38,
                walls: [],
                floor: {
                    x: 98.25,
                    y: 11,
                    width: 3.25,
                    height: 2.5,
                },
            },
            {
                id: 39,
                walls: [],
                floor: {
                    x: 103.75,
                    y: -2.5,
                    width: 4.25,
                    height: 6.5,
                },
            },
            {
                id: 40,
                walls: [],
                floor: {
                    x: 108.5,
                    y: -2.5,
                    width: 3.25,
                    height: 5.5,
                },
            },
            {
                id: 41,
                walls: [],
                floor: {
                    x: 112.25,
                    y: -2.5,
                    width: 3.25,
                    height: 5.5,
                },
            },
            {
                id: 42,
                walls: [],
                floor: {
                    x: 116,
                    y: -2.5,
                    width: 4.75,
                    height: 5.5,
                },
            },
            {
                id: 43,
                x: 108.5,
                y: 8,
                points: [
                    {
                        x: 14.5,
                        y: 0
                    },
                    {
                        x: 14.5,
                        y: 15.5
                    },
                    {
                        x: 3.5,
                        y: 15.5
                    },
                    {
                        x: 3.5,
                        y: 5.5
                    },
                    {
                        x: 0,
                        y: 5.5
                    },
                ],
                content: {
                    title: 'Столовая'
                }
            },
            {
                id: 44,
                floor: {
                    x: 108.5,
                    y: 14,
                    width: 3,
                    height: 3,
                }
            },
            {
                id: 45,
                floor: {
                    x: 108.5,
                    y: 17.5,
                    width: 3,
                    height: 3,
                }
            },
            {
                id: 46,
                floor: {
                    x: 108.5,
                    y: 21,
                    width: 3,
                    height: 2.5,
                }
            },
            {
                id: 47,
                x: 123.5,
                y: 8,
                points: [
                    {
                        x: 6.5,
                        y: 0
                    },
                    {
                        x: 6.5,
                        y: 5.5
                    },
                    {
                        x: 2.5,
                        y: 5.5
                    },
                    {
                        x: 2.5,
                        y: 7
                    },
                    {
                        x: 0,
                        y: 7
                    },
                ],
                content: {
                    title: 'Кухня'
                }
            },
            {
                id: 48,
                floor: {
                    x: 126.5,
                    y: 14,
                    width: 3.5,
                    height: 1
                }
            },
            {
                id: 49,
                floor: {
                    x: 123.5,
                    y: 18,
                    width: 2.5,
                    height: 5.5
                }
            },
            {
                id: 50,
                floor: {
                    x: 126.5,
                    y: 18,
                    width: 2.5,
                    height: 5.5
                }
            },
            {
                id: 51,
                floor: {
                    x: 129.5,
                    y: 18,
                    width: 2.5,
                    height: 5.5
                }
            },
            {
                id: 52,
                floor: {
                    x: 132.5,
                    y: 8,
                    width: 3,
                    height: 2.5
                }
            },
            {
                id: 53,
                floor: {
                    x: 132.5,
                    y: 11,
                    width: 3,
                    height: 1
                }
            },
            {
                id: 54,
                floor: {
                    x: 132.5,
                    y: 12.5,
                    width: 3,
                    height: 1
                }
            },
            {
                id: 55,
                floor: {
                    x: 132.5,
                    y: 18,
                    width: 3,
                    height: 6.5
                }
            },
            {
                id: 59,
                x: 123.5,
                y: 15.5,
                points: [
                    {
                        x: 7,
                        y: 0
                    },
                    {
                        x: 7,
                        y: -7.5
                    },
                    {
                        x: 8.5,
                        y: -7.5
                    },
                    {
                        x: 8.5,
                        y: -1.5
                    },
                    {
                        x: 12,
                        y: -1.5
                    },
                    {
                        x: 12,
                        y: 2
                    },
                    {
                        x: 0,
                        y: 2
                    },
                ]
            },
            {
                id: 60,
                floor: {
                    x: 102,
                    y: 14,
                    width: 2,
                    height: 3.5
                }
            },
            {
                fontSize: 4,
                id: 61,
                floor: {
                    x: 102,
                    y: 18,
                    width: 2,
                    height: 5.5
                },
                content: {
                    title: 'Охрана'
                }
            },
            {
                id: 62,
                floor: {
                    x: 59.25,
                    y: 20.5,
                    width: 2.5,
                    height: 4.5
                },

            }
        ],
        title: '1'
    },
];