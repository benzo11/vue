<template>
    <div class="counter">
        <p>Counter</p>
        <div>
            <p class="counter">{{counter}}</p>
            <div class="actions">
                <div class="actions-inner">
                    <button @click="increment">+</button>
                    <button @click="decrement">-</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                posts: [],
                errors: []
            }
        },
        computed: {
            counter: function() {
                return this.$store.getters.counter;
            }
        },
        methods: {
            increment: function () {
                axios.get(`http://jsonplaceholder.typicode.com/posts`)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.posts = response.data
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
                this.$store.commit('increment')
            },
            decrement: function () {
                this.$store.commit('decrement');
            }
        },
        mounted: function() {
            console.log(this.$store);
        }
    }
</script>