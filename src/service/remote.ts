import { GraphService } from './service';
import {
    QUERY_RESULTS,
    GraphNode,
    GraphEdge,
    LoadGraphOption,
    CommunityData,
    InitData, LoadGraphOptionCallback,
} from '../types';
// import request = require('superagent');
import 'jquery';

export class RemoteGraph implements GraphService {
    private _url: string;

    constructor(url: string) {
        this._url = url;
    }

    public requestConnect(callback: (data: InitData) => void) {
        this._ajaxCommand('init', {}, (data) => {
            callback({
                nodesNum: data.nodesCount,
                edgesNum: data.edgesCount,
                autoLayout: data.autoLayout,
            });
        });
    }

    public requestGetNodeInfos(nodeIds: string[], callback: (infos: string[]) => void) {
        this._ajaxCommand('getNodesInfo', { nodeIds }, function(data) {
            callback(data.infos);
        });
    }

    public requestLoadGraph(option: LoadGraphOption, callback: (nodes: GraphNode[], edges: GraphEdge[], optionBack: LoadGraphOptionCallback) => void) {
        this._ajaxCommand('loadGraph', option, function(data) {
            callback(data.nodes, data.edges, {
                width:  data.width,
                height: data.height,
            });
        });
    }

    public requestSearch(expr: any, limit: number, callback: (nodes: GraphNode[]) => void) {
        this._ajaxCommand('search', { expr, limit }, function(data) {
            callback(data.nodes);
        });
    }

    public requestGetNeighbours(nodeId, callback: (neighbourNodes: object[], neighbourEdges: object[]) => void) {
        this._ajaxCommand('getNeighbours', { nodeId }, function(data) {
            callback(data.neighbourNodes, data.neighbourEdges);
        });
    }

    public requestGetNodeCategories(callback: (catagoryMap: object) => void) {
        let remote = this;
        this._ajaxCommand('init', {}, (data) => {
            callback(data.catagorys);
        });
    }

    public requestGetCommunityData(callback: (data: CommunityData) => void) {
        callback(null);
    }

    public requestFilterNodesByCategory(catagory: string, nodeIds: any[],
                                 callback: (filteredNodeIds: any[]) => void) {
        this._ajaxCommand('filterNodesByCategory', { catagory, nodeIds }, function(data) {
            callback(data.filteredNodeIds);
        });
    }

    public requestFindRelations(startNodeId: string, endNodeId: string, maxDepth: number, callback: (queryId: string) => void) {
        this._ajaxCommand('findRelations', { startNodeId, endNodeId, maxDepth }, function(data) {
            callback(data.queryId);
        });
    }

    public requestGetMoreRelations(queryId: string, callback: (queryResults: QUERY_RESULTS) => void) {
        this._ajaxCommand('getMoreRelations', { queryId }, function(data) {
            callback(data);
        });
    }

    public requestStopFindRelations(queryId: string) {
        this._ajaxCommand('stopFindRelations', { queryId }, function(status) {
            // how to stop?
            return status;
        });
    }

    public requestImageSearch(img: any, limit: number, callback: (nodes: GraphNode[]) => void) {
        this._ajaxCommand('searchImage', { file: img, limit }, function(data) {
            callback(data.nodes);
        });
    }

    private _ajaxCommand(command, params, callback: (data) => void) {
        console.log('command:' + command);
        params = params || {};
        /*
        request.post(this._url + "?command=" + command).send(params)
            .then(function (res) {
                if (!res.error) {
                    callback(JSON.parse(res.text));
                }
            });
        */
        $.ajax({
            type: 'post',
            url: this._url + '?command=' + command,
            async: true,
            data: JSON.stringify(params),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success(data) {
                callback(data);
            },
        });
    }


}
