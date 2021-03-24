<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    height="60%"
    placement="bottom"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" />
  </BasicDrawer>
</template>
<script lang="ts">
import { defineComponent, ref, computed, unref } from 'vue';
import { BasicForm, useForm } from '/@/components/Form/index';
import { formSchema, updateFormSchema } from './categoryForm.data';
import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
import { ArticleCategoryAdd, ArticleCategoryEdit } from '/@/api/admin/article';
import { useMessage } from '/@/hooks/web/useMessage';

const { createMessage } = useMessage();

export default defineComponent({
  name: 'CategoryDrawer',
  components: { BasicDrawer, BasicForm },
  emits: ['success', 'register'],
  setup(_, { emit }) {
    const isUpdate = ref(true);

    let id = 0;

    const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
      schemas: computed(() => (!unref(isUpdate) ? formSchema : updateFormSchema)),
      showActionButtonGroup: false,
    });

    const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
      resetFields();
      setDrawerProps({ confirmLoading: false });
      isUpdate.value = !!data?.isUpdate;

      if (isUpdate.value) {
        data.record.status = !!data.record.status;
        id = data.record.id;
      }

      if (unref(isUpdate)) {
        setFieldsValue({
          ...data.record,
        });
      }
    });

    const getTitle = computed(() => (!unref(isUpdate) ? '新增分类' : '编辑分类'));

    async function handleSubmit() {
      try {
        const values = await validate();
        setDrawerProps({ confirmLoading: true });
        // TODO custom api
        values.status = values.status ? 1 : 0;

        let isSuccess = false;

        if (id) {
          values.id = id;
          await ArticleCategoryEdit(values).then(function () {
            createMessage.success('编辑分类完成');
            isSuccess = true;
          });
          id = 0;
        } else {
          await ArticleCategoryAdd(values).then(function () {
            createMessage.success('新增分类完成');
            isSuccess = true;
          });
        }

        if (isSuccess) {
          closeDrawer();
          emit('success');
        }
      } finally {
        setDrawerProps({ confirmLoading: false });
      }
    }

    return {
      registerDrawer,
      registerForm,
      getTitle,
      handleSubmit,
    };
  },
});
</script>
