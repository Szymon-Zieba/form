<template>
    <div class="ContactForm">
        <form>
            <VForm v-for="type in types" :key="type.id"
                    :type="type" />
            <VButton v-for="button in buttons" :key="button.id"
                    :buttons="button"/>
        </form>
    </div>
</template>

<script>
    import VForm from './VForm.vue' 
    import VButton from './VButton.vue' 
    import { reactive, toRefs, ref } from 'vue';
    export default{
        nam: 'ContactForm',
        components: {
             VButton,
             VForm,
        },
        setup(){
            let reset = reactive ({
                name: '',
                lastName: '',
                message: '',
                email: ''
            })
            
            const types = ref([
                { variable: 'text', label: 'Imie'},
                { variable: 'text', label: 'Nazwisko'},
                { variable: 'email', label: 'Email'},
                { variable: 'textarea', label: 'Opinia'},
            ])

            const buttons = ref(['Wyczyść', 'Wyślij'])
            
            return {
                ...toRefs(reset),
                types,
                buttons                
            }  
        }        
    };
</script>

<style scoped>
    .ContactForm{
        font-size: 16px;
        text-align: center;
        margin:4rem 15rem;
        padding: 3rem;
        background: rgb(192, 191, 191)
    }
</style>



