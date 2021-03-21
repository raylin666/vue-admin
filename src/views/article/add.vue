<template>
  <PageWrapper
    title="新增文章"
    contentBackground
    content=" 篇幅不很长而独立成篇的文字 , 主题是作者在文章中通过一系列精心选择、剪裁、并编织起来的具体材料所表达的最主要的思想和倾向。"
    contentClass="p-8"
  >
    <BasicForm @register="register">

      <template #cover>
        <BasicUpload
          :maxSize="2"
          :maxNumber="1"
          @change="handleUploadChange"
          :emptyHidePreview="true"
          :api="uploadApi"
          :accept="imageUploadAccept"
          :multiple="false"
          :uploadParams="{}"
        />
      </template>

      <template #attachment_path>
        <BasicUpload
          :maxSize="20"
          :maxNumber="5"
          @change="handleUploadChange"
          :emptyHidePreview="true"
          :api="uploadApi"
          :multiple="true"
          :uploadParams="{}"
        />
      </template>

      <template #keyword>
        <a-select
          v-model:value="selectValue"
          mode="tags"
          style="width: 100%"
          @change="handleSelectChange"
        >
          <a-select-option
            v-for="i in defaultSelectOption"
            :key="i"
          >
            {{ i }}
          </a-select-option>
        </a-select>
      </template>

    </BasicForm>

  </PageWrapper>
</template>

<script lang="ts">
import { BasicForm, useForm } from '/@/components/Form';
import { defineComponent, ref } from 'vue';
import { schemas } from './articleFormData';
import { useMessage } from '/@/hooks/web/useMessage';
import { PageWrapper } from '/@/components/Page';
import { BasicUpload } from '/@/components/Upload';
import { uploadApi } from '/@/api/sys/upload';
import { Select } from 'ant-design-vue';

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
    const [register, { validate, setProps }] = useForm({
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
    });

    const handleSelectChange = (value: string) => {
      console.log(`selected ${value}`);
    };

    function handleUploadChange(list: string[]) {}

    async function customSubmitFunc() {
      try {
        await validate();
        setProps({
          submitButtonOptions: {
            loading: true,
          },
        });
        setTimeout(() => {
          setProps({
            submitButtonOptions: {
              loading: true,
            },
          });
          createMessage.success('提交成功！');
        }, 2000);
      } catch (error) {}
    }

    return {
      selectValue: ref([]),
      register,
      handleUploadChange,
      uploadApi,
      handleSelectChange,
      defaultSelectOption,
      imageUploadAccept,
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
