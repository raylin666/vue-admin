<template>
  <CollapseContainer class="todo-list" title="项目运行环境与服务器信息" :canExpan="false">
    <template #title>
      <span> 项目运行环境与服务器信息 <span class="todo-list__total">30</span> </span>
    </template>

    <hr />

    <List>
      <ListItem class="todo-list__item">
        <ListItemMeta>
          <template #title>
            <div style="color: rgb(109 109 109)"> 项目名称 </div>
          </template>
        </ListItemMeta>
        <a-button type="link">
          <div style="color: #494971" v-if="isShow">
            {{ sysInfo.system.projectName }}
          </div>
        </a-button>
      </ListItem>

      <ListItem class="todo-list__item">
        <ListItemMeta>
          <template #title>
            <div style="color: rgb(109 109 109)"> PHP运行方式 </div>
          </template>
        </ListItemMeta>
        <a-button type="link">
          <div style="color: #494971" v-if="isShow">
            {{ sysInfo.system.phpSapiName }}
          </div>
        </a-button>
      </ListItem>

      <ListItem class="todo-list__item">
        <ListItemMeta>
          <template #title>
            <div style="color: rgb(109 109 109)"> PHP 版本 </div>
          </template>
        </ListItemMeta>
        <a-button type="link">
          <div style="color: #494971" v-if="isShow">
            {{ sysInfo.system.phpVersion }}
          </div>
        </a-button>
      </ListItem>

      <ListItem class="todo-list__item">
        <ListItemMeta>
          <template #title>
            <div style="color: rgb(109 109 109)"> Swoole 版本 </div>
          </template>
        </ListItemMeta>
        <a-button type="link">
          <div style="color: #494971" v-if="isShow">
            {{ sysInfo.system.swooleVersion }}
          </div>
        </a-button>
      </ListItem>

      <ListItem class="todo-list__item">
        <ListItemMeta>
          <template #title>
            <div style="color: rgb(109 109 109)"> 服务框架 </div>
          </template>
        </ListItemMeta>
        <a-button type="link">
          <div style="color: #494971" v-if="isShow">
            {{ sysInfo.system.serverFramework }}
          </div>
        </a-button>
      </ListItem>

      <ListItem class="todo-list__item">
        <ListItemMeta>
          <template #title>
            <div style="color: rgb(109 109 109)"> UI 框架 </div>
          </template>
        </ListItemMeta>
        <a-button type="link">
          <div style="color: #494971" v-if="isShow">
            {{ sysInfo.system.ui }}
          </div>
        </a-button>
      </ListItem>

      <ListItem class="todo-list__item">
        <ListItemMeta>
          <template #title>
            <div style="color: rgb(109 109 109)"> 服务器时间 </div>
          </template>
        </ListItemMeta>
        <a-button type="link">
          <div style="color: #494971" v-if="isShow">
            {{ sysInfo.system.serverTime }}
          </div>
        </a-button>
      </ListItem>

      <ListItem class="todo-list__item">
        <ListItemMeta>
          <template #title>
            <div style="color: rgb(109 109 109)"> 当前程序的所有者名称 </div>
          </template>
        </ListItemMeta>
        <a-button type="link">
          <div style="color: #494971" v-if="isShow">
            {{ sysInfo.system.user }}
          </div>
        </a-button>
      </ListItem>

      <ListItem class="todo-list__item">
        <ListItemMeta>
          <template #title>
            <div style="color: rgb(109 109 109)"> 系统类型及版本号 </div>
          </template>
        </ListItemMeta>
        <a-button type="link">
          <div style="color: #494971" v-if="isShow">
            {{ sysInfo.system.phpUname }}
          </div>
        </a-button>
      </ListItem>
    </List>
    <div class="todo-list__all">
      <Tooltip placement="topRight">
        <template #title> 查看更多 </template>
        <EllipsisOutlined />
      </Tooltip>
    </div>
  </CollapseContainer>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { List, Tag, Tooltip } from 'ant-design-vue';
  import { CollapseContainer } from '/@/components/Container/index';

  import { EllipsisOutlined } from '@ant-design/icons-vue';

  export default defineComponent({
    name: 'TodoList',
    components: {
      CollapseContainer,
      List,
      ListItem: List.Item,
      ListItemMeta: List.Item.Meta,
      Tag,
      Tooltip,
      EllipsisOutlined,
    },
    props: {
      datas: {
        type: Object,
        default: null,
      },
    },
    watch: {
      datas: {
        deep: true, // 深度监听
        handler(newVal) {
          this.sysInfo = newVal;
          this.isShow = true;
        },
      },
    },
    setup() {
      const isShow = ref(false);

      const sysInfo = ref<any>({});

      return {
        sysInfo,
        isShow,
      };
    },
  });
</script>
<style lang="less" scoped>
  .todo-list {
    position: relative;

    &__total {
      display: inline-block;
      width: 20px;
      height: 20px;
      font-size: 12px;
      line-height: 20px;
      color: #fff;
      text-align: center;
      background: rgba(255, 0, 0, 0.7);
      border-radius: 50%;
    }

    &__all {
      position: absolute;
      top: 0;
      right: 10px;
      height: 56px;
      font-size: 24px;
      line-height: 56px;
      text-align: center;
      cursor: pointer;
    }

    &__item {
      padding: 8px;

      &-title {
        font-size: 14px;
        font-weight: normal;
        line-height: 22px;
        color: #1c1d21;
      }

      &-memo {
        font-size: 12px;
        font-weight: normal;
        line-height: 22px;
        color: #7c8087;
      }

      &-desc {
        font-size: 12px;
        line-height: 22px;
        color: #7c8087;
      }
    }
  }
</style>
