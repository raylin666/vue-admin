<template>
  <PageWrapper
    title="编辑文章"
    contentBackground
    content=" 篇幅不很长而独立成篇的文字 , 主题是作者在文章中通过一系列精心选择、剪裁、并编织起来的具体材料所表达的最主要的思想和倾向。"
    contentClass="p-8"
  >
    <BasicForm @register="register">
      <template #cover>
        <BasicUpload
          :maxSize="2"
          :maxNumber="1"
          @change="handleUploadCoverChange"
          :emptyHidePreview="true"
          :api="uploadApi"
          :accept="imageUploadAccept"
          :multiple="false"
          :uploadParams="{}"
          :value="cover"
        />
      </template>

      <template #attachment_path>
        <BasicUpload
          :maxSize="20"
          :maxNumber="5"
          @change="handleUploadAttachmentPathChange"
          :emptyHidePreview="true"
          :api="uploadApi"
          :multiple="true"
          :uploadParams="{}"
          :value="uploadAttachmentPath"
        />
      </template>

      <template #keyword>
        <a-select
          v-model:value="selectValue"
          mode="tags"
          style="width: 100%"
          @change="handleSelectChange"
        >
          <a-select-option v-for="i in defaultSelectOption" :key="i">
            {{ i }}
          </a-select-option>
        </a-select>
      </template>
    </BasicForm>
  </PageWrapper>
</template>

<script lang="ts">
  import { BasicForm, useForm } from '/@/components/Form';
  import { defineComponent, onMounted, ref } from 'vue';
  import { schemas } from './articleFormData';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { PageWrapper } from '/@/components/Page';
  import { BasicUpload } from '/@/components/Upload';
  import { uploadApi } from '/@/api/sys/upload';
  import { Select } from 'ant-design-vue';
  import { ArticleEdit, ArticleInfo } from '/@/api/admin/article';
  import router from '/@/router';

  export default defineComponent({
    components: {
      BasicForm,
      PageWrapper,
      BasicUpload,
      [Select.name]: Select,
      ASelectOption: Select.Option,
    },
    setup() {
      const defaultSelectOption = ['php', 'java', 'javascript'];

      const imageUploadAccept = ['png', 'jpg', 'jpeg', 'gif'];

      const { createMessage } = useMessage();
      const [register, { validate, setProps, setFieldsValue }] = useForm({
        labelCol: {
          span: 3,
        },
        wrapperCol: {
          span: 10,
          offset: 1,
        },
        schemas: schemas,
        actionColOptions: {
          offset: 8,
        },
        submitButtonOptions: {
          text: '保存文章',
        },
        submitFunc: customSubmitFunc,
        resetButtonOptions: {
          text: '重置文章',
        },
        resetFunc: customResetFunc,
      });

      let selectValue: any = ref([]);
      let uploadCover = '';
      let cover: any = ref([]);
      let attachmentPath: any = ref([]);
      let uploadAttachmentPath: string[] = [];
      let keyword: string[] = [];

      onMounted(async () => {
        let a: any = router.currentRoute.value.query.id;
        const data = await ArticleInfo(parseInt(a));
        data.recommend_flag = data.recommend_flag ? '1' : '0';
        data.comment_flag = data.comment_flag ? '1' : '0';
        let category: number[] = [];
        if (data.category) {
          for (var i = 0; i < data.category.length; i++) {
            category[i] = data.category[i].id;
          }
          data.category = category;
        }
        if (data.keyword) {
          selectValue.value = ref(data.keyword).value;
          for (let i = 0; i < data.keyword.length; i++) {
            keyword.push(data.keyword[i]);
          }
        }
        uploadCover = data.cover;
        cover.value = ref([data.cover]).value;
        for (let i = 0; i < data.attachment_path.length; i++) {
          uploadAttachmentPath.push(data.attachment_path[i]);
        }
        attachmentPath.value = ref(uploadAttachmentPath).value;

        setFieldsValue(data);
      });

      const handleSelectChange = (value: string) => {
        if (value) {
          for (let i = 0; i < value.length; i++) {
            keyword.push(value[i]);
          }
        } else {
          keyword = [];
        }
      };

      function handleUploadCoverChange(list: string[]) {
        if (list.length) {
          uploadCover = list[0];
          createMessage.success('文件已上传完成');
        } else {
          uploadCover = '';
          createMessage.info('文件已删除完成');
        }
      }

      function handleUploadAttachmentPathChange(list: string[]) {
        if (list.length) {
          for (let i = 0; i < list.length; i++) {
            uploadAttachmentPath.push(list[i]);
          }
          createMessage.success('文件已上传完成');
        } else {
          uploadAttachmentPath = [];
          createMessage.info('文件已删除完成');
        }
      }

      async function customResetFunc() {}

      async function customSubmitFunc() {
        try {
          const values = await validate();
          if (uploadCover) {
            values.cover = uploadCover;
          } else {
            return createMessage.error('请选择上传文章封面');
          }

          if (uploadAttachmentPath) {
            values.attachment_path = uploadAttachmentPath;
          }

          if (keyword) {
            values.keyword = keyword;
          }

          setProps({
            submitButtonOptions: {
              loading: true,
            },
          });
          setTimeout(() => {
            setProps({
              submitButtonOptions: {
                loading: false,
              },
            });

            return ArticleEdit(values).then(function () {
              createMessage.success('文章保存成功！');
              router.push('/article/list');
            });
          }, 2000);
        } catch (error) {}
      }

      return {
        selectValue,
        register,
        handleUploadCoverChange,
        uploadApi,
        handleSelectChange,
        defaultSelectOption,
        imageUploadAccept,
        uploadCover,
        uploadAttachmentPath,
        handleUploadAttachmentPathChange,
        keyword,
        cover,
        attachmentPath,
      };
    },
  });
</script>
<style lang="less" scoped>
  .form-wrap {
    padding: 24px;
    background: #fff;
  }
</style>
