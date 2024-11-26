<template>
  <div class="create_post">
    <div>
      <h1>Create post</h1>
    </div>
    <div>
      <st-select
        v-model="payload.tag" 
        :options="selectOptions" 
        @change="handleSelectChange"
        selectedLabel="选择分类"
      />
    </div>
    <div>
      <st-input v-model="payload.title" placeholder="Enter title here" />
    </div>
    <div>
        <st-uploader-img />
    </div>
    <div id="editor" />
    <p class="editorHandler">
      <st-button @click="onSave">save</st-button>
      <st-button @click="onSubmit">submit</st-button>
    </p>
  </div>
</template>

<script setup>
import Quill from 'quill';
import { onMounted } from 'vue';
import "quill/dist/quill.snow.css";
definePageMeta({
  middleware: 'auth',
  name: 'create',
  keepalive: true
});
let quill = null
const tagList = ref([
  {
    label:"A",
    value:'A'
  },
  {
    label:"B",
    value:'B'
  },
  {
    label:"C",
    value:'C'
  },
])
const payload= reactive({
  tag:"",
  title:"",
  content:""
}) 



const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],
  ['link', 'image', 'video'],              // custom button values
  [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
  [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
  //   [{ 'direction': 'rtl' }],                         // text direction
  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];
const options = {
  debug: 'info',
  modules: {
    toolbar: toolbarOptions,
  },
  placeholder: 'Compose an epic...',
  theme: 'snow'
};
onMounted(() => {
  quill = new Quill('#editor', options);
  quill.getModule('toolbar').addHandler('image', () => {
    selectLocalImage(quill);
  });
})

const  selectLocalImage = (quill)=> {
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');
  input.click();

  input.onchange = async () => {
    const file = input.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      // 上传图片到服务器
      const response = await useApi.upload(formData);
      const url = 'http://localhost:3000/' + response.data.path; // 假设返回的响应中包含图片的URL
      insertToEditor(quill, url);
    }
  };
}
const insertToEditor = (quill, url)=> {
  const range = quill.getSelection();
  quill.insertEmbed(range.index, 'image', url);
  quill.setSelection(range.index + 1);
}
const submit = () => {
  const data = quill.getSemanticHTML();
}


const selectedOption = ref('');
const selectOptions = ref([
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
]);

const handleSelectChange = (value) => {
  console.log('Selected:', value);
};
const onSave = ()=>{
  
}
const onSubmit = ()=>{
  payload.content =  quill.getSemanticHTML();
  useApi.createPost(payload).then(res=>{
    console.log(res);
  })
}
</script>

<style lang="scss">
.create_post {
  .editorHandler {
    border: 1px solid #ccc;
    border-top: none;
    display: flex;
    justify-content: end;

    span {
      margin: 5px;
    }
  }

  .ql-container.ql-snow {
    border-bottom: none;
  }

  .title_input {
    display: inline-block;
    height: 35px;
    line-height: 35px;
    width: 100%;
    margin: 10px 0;
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 18px;
    font-weight: 600;

  }
}
</style>