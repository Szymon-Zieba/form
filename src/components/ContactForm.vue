<template>
    <div class="ContactForm">
        <div class="language-code">
            <select v-model="LanguageCode">
                <option v-for="key in getAcceptedLanguages()" :key="key" :value="key"> {{ key  }} </option>
            </select>
        </div>
        <div class="all-form">
            <form>
                <div class="form">
                    <VLabel label="name" />
                    <VInput required type="text" />
                </div>

                <div class="form">    
                    <VLabel label="lastName"/>
                    <VInput required type="text" />
                </div>    

                <div class="form">
                    <VLabel label="email" />
                    <VInput required type="email" />
                </div>

                <div class="form">
                    <VLabel label="description" />
                    <VTextArea required/>
                </div>

                <div class="form">
                    <div class="button1">
                        <VButton  @click="reset" button="buttonClear"/>
                    </div>
                    <div class="button2">
                        <VButton  @click="reset" button="buttonSend"/>
                    </div>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
   import VLabel from './VLabel.vue'
   import VInput from './VInput.vue'
   import VTextArea from './VTextArea.vue'
   import VButton from './VButton.vue'
    import { reactive, toRefs, ref } from 'vue';
    import {LanguageCode, getAcceptedLanguages} from "../i18n";
    export default{
        nam: 'ContactForm',
        components: {
            VLabel,
            VInput,
            VTextArea,
            VButton,
        },
        setup(){
            let reset = reactive ({
                name: '',
                lastName: '',
                message: '',
                email: ''
            })
            
            const types = ref([
                { variable: 'text', label: 'name'},
                { variable: 'text', label: 'lastName'},
                { variable: 'email', label: 'email'},
                { variable: 'textarea', label: 'description'},
                { variable: 'button', label: 'buttonClear'},
                { variable: 'button', label: 'buttonSend'}
            ])



            return {
                ...toRefs(reset),
                types,
                LanguageCode,
                getAcceptedLanguages,   
            }  
        }        
    };
</script>

<style scoped>
    .ContactForm{
        width:20%;
        background:#e6e6e6;
        border-radius:8px;
        box-shadow:0 0 40px -10px #000;
        margin:calc(50vh - 220px) auto;
        padding:20px 30px;
        box-sizing:border-box;
        font-family:'Montserrat',sans-serif;
    }
    .language-code{
        margin: 1rem 0;
        background-color: #e6e6e6;
        max-width: 100%;
        border-radius: 2px;
    }
    select{
        width: 40%;
        padding: 12px;
        border: 0;
        background-color: #bebed2;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        text-align: center;
    }
    .all-form{
        padding: 2rem 0.5rem;
        margin-bottom: 1rem;
    }
    .form{
        margin-bottom: 1rem;
    }
    .button1{
        float: left;
        margin-left: 2rem;
    }
    .button2{
        float: right;
        margin-right: 2rem;
    }
</style>



