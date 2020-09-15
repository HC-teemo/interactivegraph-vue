<template>
  <div>
    <Card :padding="0" shadow style="width: 54px;">
        <CellGroup class="toolbar-group">
            <Cell>
                <Icon type='ios-add-circle-outline' size="22" slot="icon" color="primary"/> 
            </Cell>
            <Cell>
                <Icon type='ios-remove-circle-outline' size="22" slot="icon" color="primary"/> 
            </Cell>
            <Cell>
                <Icon type='ios-expand' size="22" slot="icon" color="info"/> 
            </Cell>
            <Cell>
                <Tooltip content="设置" placement="right" slot="icon"  theme="light">
                <Icon type="ios-color-palette" size="22" color="primary"/>
                </Tooltip>
            </Cell>
            <Tooltip content="设置" placement="right" theme="light">
            <Cell>
                <Icon type="ios-information-circle" size="22" slot="icon" color="primary"/>
            </Cell>
            </Tooltip>
            <Tooltip content="设置" placement="right" theme="light">
            <Cell>                
                    <Icon type='ios-cog' size="22" slot="icon" color="primary"/> 
            </Cell>
            </Tooltip>
        </CellGroup>
    </Card>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
export default class ToolBar extends Vue {
}
</script>

<style>
</style>