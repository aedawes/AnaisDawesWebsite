function listOfProjects() {
    const projects = [
        {
            image: '/AvengineersThumbnail.png',
            path: '/projects/avengineers',
            name: 'Disney Studio LAB',
            description: 'Sponsered capstone project where we built a prototype for a telepresence robot system that allows directors to remotely visit a movie set.'
        },
        {
            image: '/BlazziThumbnail.png',
            path: '/projects/blazzi',
            name: 'Blazzi',
            description: 'A app designed and built for new estiticians to be able to build a client base and for clients to filter for individual estiticians.'
        },
        {
            image: '/SetThumbnail.png',
            path: '/projects/set',
            name: 'Game of Set',
            description: 'A mobile Swift app that implements the card game of Set. Players will match cards based on color, shape, and number.'
        },
        {
            image: '/ColorThumbnail.png',
            path: '/projects/colorpalette',
            name: 'Color Palette Generator',
            description: 'A React app that mimicks some of coolers.com\'s features. Focused on vanilla JavaScript,CSS, and responsiveness.'
        },
        {
            image: '/recipeThumbnail.png',
            path: '/projects/recipe',
            name: 'Recipe App',
            description: 'A mobile Swift app that allows a user to store and read recipes. Focused on implementing MVVM and the basic CRUD operations.'
        },
    ]

    return projects;
};

export { listOfProjects };