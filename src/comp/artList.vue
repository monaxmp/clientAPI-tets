<template>

    <div>

        <paggin></paggin>

        <div class="col-12  p-3 ">
            <div class="row  border p-2 m-2"
                 v-for="art_item of art"
                 :key="art_item.id"
            >
                <div class="col-3">
                    <a href="http://crm.mocx.su/uploads/profile/17251/avatar-17251-5a21d3064fd83.jpg"
                       data-fancybox="fancybox-2" data-caption="Абрамов Вячеслав Васильевич">
                        <img class="img-responsive" v-bind:src="$root.current_host + art_item.avatar.image"
                             style="width: 150px">
                    </a>
                </div>
                <div class="col-3">
                    <h4>
                        <a class="art-item" >
                            {{ art_item.profile.second_name}} <br>{{ art_item.profile.first_name}} {{
                            art_item.profile.middle_name}}
                        </a>
                    </h4>
                    <p><span v-for="prof of art_item.profession" :key="prof.id"> {{prof.caption}} </span></p>
                    <p>Год рождения {{art_item.profile.birthday }}</p>
                    <p v-for="regalia of art_item.regalia" :key="regalia.id"> {{regalia.title}} </p>
                </div>
                <div class="col-6">
                    <div class="">
                        <a v-for="ptem of art_item.portfolioItems.slice(0,3)"
                           href="http://crm.mocx.su/uploads/profile/761/album/index _2_-5a21d348486c0.jpeg"
                           data-fancybox="fancybox-2" data-caption="Работа">
                            <img class="img-responsive" width="150"
                                 height="150"
                                 v-bind:src="$root.current_host + ptem.thumb"
                                 alt="Работа">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import paggin from './pagination';
    export default {

        props: ['art'],
        name: "artlist",
        data(){
            return {

            }
        },
        methods:{
            log(){
                console.log(this.$root);
            }
        },components: {
            paggin
        }

    }
</script>

<style scoped>

</style>
