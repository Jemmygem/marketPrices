const foodArray = [
    {
        id: "1",
        name: "Rice",
        img: "1.jpg",
        description: "Rice aroso",
        prices: {
            abuja: "300",
            benin: "350",
            lagos: "380",
            average: Math.round((300 + 350 + 380) / 3),
        },

    },

    {
        id: "2",
        name: "Beans",
        img: "2.jpg",
        description: "Beans oloyin",
        prices: {
            abuja: "400",
            benin: "450",
            lagos: "480",
            average: Math.round((400 + 450 + 480) / 3),
        },

    },

    {
        id: "3",
        name: "Garri",
        img: "3.jpg",
        description: "Garri Ijebu",
        prices: {
            abuja: "500",
            benin: "550",
            lagos: "580",
            average: Math.round((500 + 550 + 580) / 3),
        },

    },
]