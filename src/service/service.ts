import {
    GraphEdge,
    GraphNode,
    QUERY_RESULTS,
    LoadGraphOption,
    CommunityData,
    InitData, LoadGraphOptionCallback,
} from '../types';

export interface GraphService {
    /**
     * establishs a new connection
     * @param callback
     */
    requestConnect(callback: (data: InitData) => void): any;
    /**
     * get data of communities
     */
    requestGetCommunityData(callback: (data: CommunityData) => void): any;
    /**
     * retrieves description info in HTML format of given nodes
     * @param nodeIds
     * @param callback
     */
    requestGetNodeInfos(nodeIds: string[], callback: (descriptions: string[]) => void): any;
    /**
     * loads graph data to render
     * @param option
     * @param callback
     */
    requestLoadGraph(option: LoadGraphOption,
                     callback: (nodes: GraphNode[], edges: GraphEdge[],
                                optionBack: LoadGraphOptionCallback) => void): any;
    /**
     * performs a search on the graph, by giving a keyword
     * @param expr
     * @param limit
     * @param callback
     */
    requestSearch(expr: any, limit: number, callback: (nodes: GraphNode[]) => void): any;
    /**
     * performs a search on the graph, by giving a image
     * @param img
     * @param limit
     * @param callback
     */
    requestImageSearch(img: any, limit: number, callback: (nodes: GraphNode[]) => void): any;
    /**
     * gets neighbour nodes and edges of given nodes
     * @param nodeId
     * @param callback
     */
    requestGetNeighbours(nodeId: string, callback: (neighbourNodes: object[], neighbourEdges: object[]) => void): any;
    /**
     * gets categories and labels of all nodes
     */
    requestGetNodeCategories(callback: (catagoryMap: object) => void): any;
    /**
     * get nodes be kind of given catagory
     * @param catagory
     * @param nodeIds
     * @param showOrNot
     * @param callback
     */
    requestFilterNodesByCategory(catagory: string, nodeIds: any[],
                                 callback: (filteredNodeIds: any[]) => void): any;
    /**
     * starts a query to find relations of two nodes
     * @param startNodeId
     * @param endNodeId
     * @param maxDepth
     * @param callback
     */
    requestFindRelations(startNodeId: string, endNodeId: string, maxDepth: number,
                         callback: (queryId: string) => void): any;
    /**
     * get next relations as results in a relation path query
     * @param queryId
     * @param callback
     */
    requestGetMoreRelations(queryId: string, callback: (queryResults: QUERY_RESULTS) => void): any;
    /**
     * stops a relation path query
     * @param queryId
     */
    requestStopFindRelations(queryId: string): any;
}
