<script setup lang="ts">
import { computed, ref } from 'vue';
import {  useClipboard, useToggle } from '@vueuse/core'
import { ElTooltip, ElIcon, ElCollapseTransition, ElMessage,ElDivider } from 'element-plus';
import { CaretTop } from '@element-plus/icons-vue'
import Example from './demo/vp-example.vue'
import SourceCode from './demo/vp-source-code.vue'

const props = defineProps<{
    demo: object
    source: string
    path: string
    rawSource: string
    description?: string
}>();
const sourceCodeRef = ref();
const { copy, isSupported } = useClipboard({
    source: decodeURIComponent(props.rawSource),
    read: false,
})
const decodedDescription = computed(() =>
    decodeURIComponent(props.description!)
)
decodeURIComponent(props.rawSource)
const [sourceVisible, toggleSourceVisible] = useToggle()

const copyCode = async () => {
    if (!isSupported) {
        ElMessage.error('复制失败')
    }
    try {
        await copy()
        ElMessage.success('已复制')
    } catch (e: any) {
        ElMessage.error(e.message)
    }
}
const onSourceVisibleKeydown = (e) => {
    if (['Enter', 'Space'].includes(e.code)) {
        e.preventDefault()
        toggleSourceVisible(false)
        sourceCodeRef.value?.focus()
    }
}

</script>
<template>
    <ClientOnly>
        <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
        <p text="sm" v-html="decodedDescription" />

        <div class="example">
            <Example  :demo="demo" />

            <ElDivider class="m-0" />

            <div class="op-btns">
                <!-- <ElTooltip :content="locale['edit-in-editor']" :show-arrow="false" :trigger="['hover', 'focus']"
                        :trigger-keys="[]">
                        <ElIcon :size="16" :aria-label="locale['edit-in-editor']" tabindex="0" role="link" class="op-btn"
                            @click="onPlaygroundClick" @keydown.prevent.enter="onPlaygroundClick"
                            @keydown.prevent.space="onPlaygroundClick">
                            <i-ri-flask-line />
                        </ElIcon>
                    </ElTooltip> -->
                <!-- <ElTooltip :content="locale['edit-on-github']" :show-arrow="false" :trigger="['hover', 'focus']"
                        :trigger-keys="[]">
                        <ElIcon :size="16" class="op-btn github" style="color: var(--text-color-light)">
                            <a :href="demoSourceUrl" :aria-label="locale['edit-on-github']" rel="noreferrer noopener"
                                target="_blank">
                                <i-ri-github-line />
                            </a>
                        </ElIcon>
                    </ElTooltip> -->
                <ElTooltip :content="'复制代码'" :show-arrow="false" :trigger="['hover', 'focus']" :trigger-keys="[]">
                    <ElIcon :size="16" :aria-label="'复制代码'" class="op-btn" tabindex="0" role="button" @click="copyCode"
                        @keydown.prevent.enter="copyCode" @keydown.prevent.space="copyCode">
                        <i-ri-file-copy-line />
                    </ElIcon>
                </ElTooltip>
                <ElTooltip :content="'查看源代码'" :show-arrow="false" :trigger="['hover', 'focus']" :trigger-keys="[]">
                    <button ref="sourceCodeRef" :aria-label="
                        sourceVisible ? '隐藏源代码' : '查看源代码'
                    " class="reset-btn el-icon op-btn" @click="toggleSourceVisible()">
                        <ElIcon :size="16">
                            <i-ri-code-line />
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
                    <span>隐藏源代码</span>
                </div>
            </Transition>
        </div>
    </ClientOnly>
</template>

<style scoped lang="scss">
.example {
    border: 1px solid var(--border-color);
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
        background-color: var(--bg-color, #fff);
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
