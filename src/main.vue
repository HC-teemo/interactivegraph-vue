<template>
   <div class="igraph">
        <Layout :style="{minHeight: '100vh', position: 'relative'}">
            <Header class="layout-header">
                <Menu mode="horizontal" :theme="this.theme" active-name="1" class="layout-menu">
                    <div class="layout-logo">
                      <img v-if="this.theme=='light'" src="../assets/logo-light.png" alt="">
                      <img v-else src="../assets/logo-dark.png" alt="">
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            图导航器
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-flower"></Icon>
                            图浏览器
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-git-compare"></Icon>
                            关系查找器
                        </MenuItem>
                    </div>
                    <div class="layout-btns">
                      <ButtonGroup>           
                          <Button icon="logo-github" to="//github.com/grapheco/InteractiveGraph" target="_blank"></Button>
                          <Button v-on:click="toggleTheme()" :icon="theme=='light'?'md-moon':'md-sunny'"></Button>
                          <Button style="line-height:19px">EN</Button>
                      </ButtonGroup>
                    </div>
                </Menu>
            </Header>
            <Content :style="{padding: '0', position: 'relative'}">
              <!-- <VisArea class="vis-area"/> -->
              <Tabs type="card" closable @on-tab-remove="handleTabRemove">
                  <TabPane label="标签一" >标签一的内容</TabPane>
                  <TabPane label="标签二" >标签二的内容</TabPane>
                  <TabPane label="标签三" >标签三的内容</TabPane>
              </Tabs>
              <!-- <div class="vis-area" id="graphArea"></div> -->
              <ToolBar class="toolbar"/>
            </Content>
        </Layout>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ToolBar from './components/ToolBar.vue';
import VisArea from './components/Vis.vue';
import {MainFrame} from './mainframe';

@Component({
  components: {
    VisArea, ToolBar,
  },
})

export default class Igraph extends Vue {
  private name = 'igraph';
  private theme = 'light';
  private mainframe!: MainFrame;

  public mounted() {
    console.log('mouted');
    const graphArea = document.getElementById('graphArea');
    if (graphArea == null) {
      // error
      console.log('error');
    } else {
      this.mainframe = new MainFrame(graphArea, {});
      console.log(this.mainframe);
      this.mainframe.loadGson('honglou.json', {}, () => {});
    }

  }

  // toggle to change theme (light/dark).
  public toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout-logo{
  float: left;
  height: 100%;
  margin-left: 40px;
  margin-right: 40px;
}
.layout-logo img{
  height: 100%;
}
.layout-header{
  padding: 0;
  height: auto;
}
.layout-menu{
  height: 50px;
  line-height: 48px;
}
.layout-btns{
  float: right;
  margin-right: 40px;
}
.vis-area{
  position: absolute;
}
.toolbar{
  position: absolute;
  left: 10px;
  top: 100px;
}
</style>
