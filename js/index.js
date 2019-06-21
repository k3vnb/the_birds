const STORE = [
    {
        image: 'img/hummingbird1.gif',
        class: 'bird-1'
    },
    {
        image: 'img/hummingbird1.gif',
        class: 'bird-2'
    },
    {
        image: 'img/hummingbird1.gif',
        class: 'bird-3'
    },
    {
        image: 'img/hummingbird1.gif',
        class: 'bird-4'
    },
    {
        image: 'img/hummingbird1.gif',
        class: 'bird-5'
    },
]



function getBirds(){
    STORE.forEach(bird => {
        
        $('.tile-container').append(`
            <div class="${bird.class} tile">
                <img src='${bird.image}' alt="hummingbird in flight" />
            </div>
        `)
    })
}

$(getBirds);