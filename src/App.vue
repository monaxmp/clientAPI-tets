<template>
    <div id="art-app">
        <div class="container border ">


            <button @click="response">btn</button>
            <div class="row  ">
                <art-list
                        :art="art"
                >
                </art-list>

            </div>

        </div>
    </div>
</template>

<script>

    import artList from './comp/artList';

    export default {
        name: 'app',
        data() {
            return {
                art: [],
                Pagination: [],
                listitem: this.loadArt,
            }
        },
        methods: {
            // getSrc(src) {
            //     return this.current_host + src;
            // },
            response(){
                console.log(this.Pagination.headers.get('X-Pagination-Current-Page'));
            },
            loadArt() {
                this.$http.get(this.$root.api_url)
                    .then(response => {
                        // console.log(response.headers.get('X-Pagination-Total-Count'));
                        // console.log(response.headers.get('X-Pagination-Page-Count'));
                        // console.log(response.headers.get('X-Pagination-Current-Page'));
                        // console.log(response.headers.get('X-Pagination-Per-Page'));
                        // console.log(response.json());
                        this.Pagination = response;
                        return response.json()
                    })
                    .then(art => {
                        // console.log(art);
                        this.art = art
                    })

            }
        }, beforeMount() {
            this.loadArt()
        },
        components: {
            'art-list': artList
        }
    }
</script>

