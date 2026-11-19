export type Hotel = {
    id: number
    name: string
    prefecture: string
    description: string
    image: string
    experienceIds: string[]
}

export const hotels: Hotel[] = [
    {
        id: 1,
        name: 'ドッグランホテル',
        prefecture: '長野県',
        description: '愛犬と一緒にドッグランを楽しめます。',
        image: 'images/hotels/dog-run-hotel.webp',
        experienceIds: ['dog-run'],
    },

    {
        id: 2,
        name:'森林散策ホテル',
        prefecture: '山梨県',
        description: '愛犬と一緒に森林散策を楽しめます。',
        image: 'images/hotels/walking-hotel.webp',
        experienceIds: ['walking'],
    },

    {
        id: 3,
        name: 'プールホテル',
        prefecture: '静岡県',
        description: '愛犬と一緒にプールで遊べます。',
        image: 'images/hotels/water-hotel.webp',
        experienceIds: ['water'],
    },

    {
        id: 4,
        name: 'グルメホテル',
        prefecture: '東京都',
        description: '愛犬と一緒に特別な食事を楽しめます。',
        image: 'images/hotels/dining-hotel.webp',
        experienceIds: ['dining'],
    },

    {
        id: 5,
        name: '観光地巡りホテル',
        prefecture: '栃木県',
        description: '愛犬と一緒に観光スポットを巡れます。',
        image: 'images/hotels/sightseeing-hotel.webp',
        experienceIds: ['sightseeing'],
    },
]