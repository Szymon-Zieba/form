<template>
    <button class="VButton"> {{ i18n.getMessage(button) }} </button>
</template>

<script>
    import * as i18n from "../i18n";
    export default{
        nam: 'VButton',
        props: {
            button: String
        },
        setup(){
            return{
                i18n
            }
        }
    };
</script>

<style scoped>
    .VButton{
        padding:8px 12px;
        margin:8px 0 0;
        font-family:'Montserrat',sans-serif;
        border:2px solid #78788c;
        background:0;color:#5a5a6e;
        cursor:pointer;
        transition:all .3s;
    }
    .VButton:hover{
        background:#78788c;color:#fff
    }

</style>
