<template>
    <network
      :nodes="nodes"
      :edges="edges"
      :options="options"
      ref="network"
    ></network>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {GraphEdgeSet, GraphNetwork, GraphNodeSet, NodeEdgeSet, NETWORK_OPTIONS} from '../types';
import { Network } from 'vue2vis';

@Component({
  components: {
    Network,
  },
})

export default class VisArea extends Vue {

    private relationChart: any;
    private nodes: object[] = [
            { id: 1, label: 'Node 1' },
            { id: 2, label: 'Node 2' },
            { id: 3, label: 'Node 3' },
            { id: 4, label: 'Node 4' },
            { id: 5, label: 'Node 5' },
            ];
    private edges: object[] = [
        {from: 1, to: 0, label: 'hahah'},
        {from: 2, to: 0},
        {from: 4, to: 3},
        {from: 5, to: 4},
    ];
    private options: NETWORK_OPTIONS;

    public constructor() {
        super();
        this.options = this.defaultNetworkOptions();
    }

    public mounted() {
        // console.log(this.id);
        // console.log(document.getElementById(this.id));
        // let ele:HTMLElement = document.getElementById(this.id)||new HTMLElement;
        // let _screenData: NodeEdgeSet = {
        //     nodes: new GraphNodeSet([
        //     { id: 1, label: "Node 1" },
        //     { id: 2, label: "Node 2" },
        //     { id: 3, label: "Node 3" },
        //     { id: 4, label: "Node 4" },
        //     { id: 5, label: "Node 5" }
        //     ]),
        //     edges: new GraphEdgeSet()
        // };
        // let network = new GraphNetwork(ele,_screenData,{});
    }

    private defaultNetworkOptions(): NETWORK_OPTIONS {
        const defaultOption =  {
            layout: {
                improvedLayout: false,
            },
            physics: {
                enabled: true,
                barnesHut: {
                    gravitationalConstant: -80000,
                    springConstant: 0.001,
                    springLength: 200,
                },
                solver: 'barnesHut',
                stabilization: false,
                forceAtlas2Based: {
                    gravitationalConstant: -26,
                    centralGravity: 0.005,
                    springLength: 230,
                    springConstant: 0.18,
                },
            },
            interaction: {
                tooltipDelay: 200,
                hover: true,
                hideEdgesOnDrag: true,
                selectable: true,
                navigationButtons: true,
                // selectConnectedEdges: false,
            },
            nodes: {
                borderWidth: 0,
                shape: 'dot',
                scaling: {
                    min: 10,
                    max: 30,
                },
                font: {
                    size: 14,
                    strokeWidth: 7,
                },
            },
            edges: {
                width: 0.02,
                font: {
                    size: 0,
                    color: '3cc5e7',
                },
                color: {
                    inherit: 'to',
                    opacity: 1,
                    color: '#cccccc',
                    highlight: '#3cc5e7',
                    hover: '#3cc5e7',
                },
                selectionWidth: 1,
                hoverWidth: 1,
                arrows: {
                    to: {
                        enabled: true,
                        scaleFactor: 0.5,
                    },
                },
                smooth: {
                    enabled: true,
                    type: 'continuous',
                    roundness: 0.5,
                },
            },
            // groups: {
            //     useSeqColors: true,
            //     SeqColors:[
            //         {border: "#FFFFFF", background: "#3cc5e7", highlight: {border: "#FFFFFF", background: "#4DD8FB"}, hover: {border: "#FFFFFF", background: "#4DD8FB"}},
            //         {border: "#FFFFFF", background: "#fedb67", highlight: {border: "#FFFFFF", background: "#fae96e"}, hover: {border: "#FFFFFF", background: "#fae96e"}},
            //         {border: "#FFFFFF", background: "#a2e5b9", highlight: {border: "#FFFFFF", background: "#a7f0c1"}, hover: {border: "#FFFFFF", background: "#a7f0c1"}},
            //         {border: "#FFFFFF", background: "#6de0e3", highlight: {border: "#FFFFFF", background: "#7afcff"}, hover: {border: "#FFFFFF", background: "#7afcff"}},
            //         {border: "#FFFFFF", background: "#3ea3d9", highlight: {border: "#FFFFFF", background: "#49c0ff"}, hover: {border: "#FFFFFF", background: "#49c0ff"}},
            //         {border: "#FFFFFF", background: "#fd9f83", highlight: {border: "#FFFFFF", background: "#fcad8c"}, hover: {border: "#FFFFFF", background: "#fcad8c"}},
            //         {border: "#FFFFFF", background: "#f97394", highlight: {border: "#FFFFFF", background: "#fd80a2"}, hover: {border: "#FFFFFF", background: "#fd80a2"}},
            //         {border: "#FFFFFF", background: "#de64ad", highlight: {border: "#FFFFFF", background: "#f36ebd"}, hover: {border: "#FFFFFF", background: "#f36ebd"}},
            //         {border: "#FFFFFF", background: "#d186be", highlight: {border: "#FFFFFF", background: "#fba0e5"}, hover: {border: "#FFFFFF", background: "#fba0e5"}},
            //         {border: "#FFFFFF", background: "#e5bdf2", highlight: {border: "#FFFFFF", background: "#f2c7ff"}, hover: {border: "#FFFFFF", background: "#f2c7ff"}},
            //         {border: "#FFFFFF", background: "#9d98f2", highlight: {border: "#FFFFFF", background: "#a6a1ff"}, hover: {border: "#FFFFFF", background: "#a6a1ff"}},
            //         {border: "#FFFFFF", background: "#837be8", highlight: {border: "#FFFFFF", background: "#8f87ff"}, hover: {border: "#FFFFFF", background: "#8f87ff"}},
            //         {border: "#FFFFFF", background: "#94bbf8", highlight: {border: "#FFFFFF", background: "#9ac2ff"}, hover: {border: "#FFFFFF", background: "#9ac2ff"}},
            //     ]
            // }
        };
        return defaultOption;
    }
}
</script>
<style>
.graph{
    width: 100%;
    height: 100%;
}
</style>