const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

video.play();

video.stop = function() {
    console.log(this);
};

video.stop()

// this for global window

function Video(title) {
    this.title = title;
    console.log(this)
}

const v = new Video('b');

// for array

const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this); 
    }
};

video2.showTags();