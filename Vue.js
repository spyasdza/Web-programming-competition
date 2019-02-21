<script src="https://cdn.jsdelivr.net/npm/vue@2.5.22/dist/vue.js"></script>

const app = new Vue ({
    el: '#app',
    data: {
        search: '',
        postList : [
        {
            title: "Vue.js",
            link: "https://vuejs.org/",
            author: "Chris",
            img: "https://vuejs.org//images/logo.png", 
        },
        {
            title: "React.js",
            link: "https://facebook.github.io/react/",
            author: "Tim",
            img: "https://daynin.github.io/clojurescript-presentation/img/react-logo.png", 
        },
        {
            title: "Angular.js",
            link: "https://angularjs.org/",
            author: "Sam",
            img: "https://angularjs.org/img/ng-logo.png",
        },
        {
            title: "Ember.js",
            link: "http://emberjs.com/",
            author: "Rachel",
            img: "http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200",
        },
        {
            title: "Meteor.js",
            link: "https://www.meteor.com/",
            author: "Chris",
            img: "http://hacktivist.in/introduction-to-nodejs-mongodb-meteor/img/meteor.png",
        },
        {
            title: "Aurelia",
            link: "http://aurelia.io/",
            author: "Tim",
            img: "https://cdn.auth0.com/blog/aurelia-logo.png",
        },
        {
            title: "Node.js",
            link: "https://nodejs.org/en/",
            author: "A. A. Ron",
            img: "https://code-maven.com/img/node.png",
        },
        {
            title: "Pusher",
            link: "https://pusher.com/",
            author: "Alex",
            img: "https://avatars1.githubusercontent.com/u/739550?v=3&s=400",
        },
        ]
    },

    computed: {
        filteredList() {
        return this.postList.filter(post => {
            return post.title.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }
})