<script setup lang="ts">
import { computed, ref } from 'vue'
import { useClipboard, useToggle } from '@vueuse/core'
import { ElTooltip, ElDivider, ElMessage, ElIcon, ElCollapseTransition } from 'element-plus'
import { CaretTop } from '@element-plus/icons-vue'

import Example from './demo/vp-example.vue'
import SourceCode from './demo/vp-source-code.vue'

const props = defineProps<{
  demos: object
  source: string
  path: string
  rawSource: string
  description?: string
}>()

const { copy, isSupported } = useClipboard({
  source: decodeURIComponent(props.rawSource),
  read: false,
})

const decodedDescription = computed(() =>
  decodeURIComponent(props.description!)
)

const [sourceVisible, toggleSourceVisible] = useToggle()
const sourceCodeRef = ref()
const formatPathDemos = computed(() => {
  const demos = {}
  Object.keys(props.demos).forEach((key) => {
    demos[key.replace('../components/', '').replace('.vue', '')] =
      props.demos[key].default
  })
  return demos
})


const onSourceVisibleKeydown = (e) => {
  if (['Enter', 'Space'].includes(e.code)) {
    e.preventDefault()
    toggleSourceVisible(false)
    sourceCodeRef.value?.focus()
  }
}

const copyCode = async () => {
  if (!isSupported) {
    ElMessage.error('This browser does not support automatic copy！')
  }
  try {
    await copy()
    ElMessage.success('Copied!')
  } catch (e: any) {
    ElMessage.error(e.message)
  }
}
</script>

<template>
  <ClientOnly>
    <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
    <p text="sm" v-html="decodedDescription" />

    <div class="example">
      <Example :file="path" :demo="formatPathDemos[path]" />

      <ElDivider class="m-0" style="margin: 0;" />

      <div class="op-btns">
        <ElTooltip :content="'Copy code'" :show-arrow="false" :trigger="['hover', 'focus']" :trigger-keys="[]">
          <ElIcon :size="16" :aria-label="'Copy code'" class="op-btn" tabindex="0" role="button" @click="copyCode"
            @keydown.prevent.enter="copyCode" @keydown.prevent.space="copyCode">
            <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" data-v-707a7f8d="">
              <path fill="currentColor"
                d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z">
              </path>
            </svg>
          </ElIcon>
        </ElTooltip>
        <ElTooltip :content="'View source'" :show-arrow="false" :trigger="['hover', 'focus']" :trigger-keys="[]">
          <button ref="sourceCodeRef" :aria-label="
            sourceVisible ? 'Hide source' : 'View source'
          " class="reset-btn el-icon op-btn" @click="toggleSourceVisible()">
            <ElIcon :size="16">
              <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em"
                data-v-707a7f8d="">
                <path fill="currentColor"
                  d="m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414L23 12zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12z">
                </path>
              </svg>
            </ElIcon>
          </button>
        </ElTooltip>
      </div>

      <ElCollapseTransition>
        <SourceCode v-show="sourceVisible" :source="source" />
      </ElCollapseTransition>

      <Transition name="el-fade-in-linear">
        <div v-show="sourceVisible" class="example-float-control" tabindex="0" role="button"
          @click="toggleSourceVisible(false)" @keydown="onSourceVisibleKeydown">
          <ElIcon :size="16">
            <CaretTop />
          </ElIcon>
          <span>{{ 'Hide source' }}</span>
        </div>
      </Transition>
    </div>
  </ClientOnly>
</template>

<style scoped lang="scss">
.example {
  border: 1px solid var(--el-border-color);
  border-radius: var(--el-border-radius-base);

  .op-btns {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 2.5rem;

    .el-icon {
      &:hover {
        color: var(--text-color);
      }
    }

    .op-btn {
      margin: 0 0.5rem;
      cursor: pointer;
      color: var(--text-color-lighter);
      transition: 0.2s;

      &.github a {
        transition: 0.2s;
        color: var(--text-color-lighter);

        &:hover {
          color: var(--text-color);
        }
      }
    }
  }

  &-float-control {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--border-color);
    height: 44px;
    box-sizing: border-box;
    background-color: var(--vp-c-bg);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -1px;
    color: var(--el-text-color-secondary);
    cursor: pointer;
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;

    span {
      font-size: 14px;
      margin-left: 10px;
    }

    &:hover {
      color: var(--el-color-primary);
    }
  }
}
</style>
