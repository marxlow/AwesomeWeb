//@flow
import React from 'react';
import moment from 'moment-timezone';
import { VictoryChart, VictoryArea, VictoryAxis, VictoryVoronoiContainer} from 'victory';

const SingleGraph = ({ data }) => {
    console.log('> This is your data:', data);
    return (
        // <div>
            <VictoryChart
                containerComponent={<VictoryVoronoiContainer
                    labels={(point) => `$${point.y}, ${moment(point.x).format('MMM D').toString()}`}
                />}
                // domainPadding={10} // Padding of datas with respect to axis
            >
                <VictoryAxis
                    dependentAxis={true} // Y-axis component
                    orientation="right"
                    tickFormat={(price) => `$${price}`}
                />
                <VictoryArea
                    data={data.map(({ price, timestamp }) => {
                        return { x: timestamp, y: price };
                    })}
                />
            </VictoryChart>
        // </div>
    )
};

export default SingleGraph;

// // @flow weak
// import { compact } from 'underscore';
// import React, { PropTypes } from 'react';
// import ReactTooltip from 'react-tooltip';
// import { feedGraphStyles } from '../styles';
// import Axis from '../../shared/components/Axis';
// import LoadingContainer from '../../shared/components/Loading';
// import PointTooltip from './PointTooltip';
// import Point from './Point';
// import YLabel from './YLabel';
// import Grid from './Grid';
// import { findDateRange, findX, findY, findZ, findXAxis, findYAxis, findYGrid } from '../utilities';
// import { VictoryAxis, VictoryChart, VictoryScatter, VictoryTooltip } from 'victory';
// import orderBy from 'lodash/orderBy';
// import first from 'lodash/first';
// import last from 'lodash/last';
// import moment from 'moment';
// import ClusterFlyout from './ClusterFlyout';
// import CustomPointer from './CustomPointer';

// const MULTILINE: boolean = true;
// const styles = feedGraphStyles;

// const Graph = (props) => {
//   const {
//     maxScore,
//     clusters,
//     openSummary,
//     selectedClusterId,
//     graphClustersLoading,
//     topResults,
//   } = props;
//   const { dateScale, graphClusters } = findDateRange(clusters, maxScore);
//   const x = findX(dateScale);
//   const scores = graphClusters.map(g => (g.y));
//   const y = findY(scores);
//   const z = findZ();
//   const yAxis = findYAxis(y);
//   const xAxis = findXAxis(x);
//   const yGrid = findYGrid(y);
//   //  Find start and end date for graphClusters
//   console.log('> Graph clusters:', graphClusters);
//   // console.log('> Test:', graphClusters[0].x.toString());
//   console.log('> Flyout:', ClusterFlyout);
//   console.log('> x scale:', x);
//   return (
//     <div >
//       <header>
//         <h4 className="h5 text-uppercase small fw6">
//           Newsfeed test
//         </h4>
//         {
//           (!graphClustersLoading) && <p className="text-center">{topResults}</p>
//         }
//       </header>
//       <VictoryChart 
//         width={800}
//         domainPadding={10} // Padding of datas with respect to axis
//       >
//         <VictoryAxis // X-axis component
//           // animate={{
//           //   duration: 700,
//           //   onLoad: { duration: 700 }
//           // }}
//           tickFormat={(date) => `${moment(date).format('MMM D YYYY').toString()}`}
//           fixLabelOverlap={true}
//           label="Dates"
//         />
//         <VictoryAxis 
//           dependentAxis // Y-axis component
//           label="Relevancy"
//         />
//         <VictoryScatter // Data component
//           // labelComponent={<VictoryTooltip />}
//           // labelComponent={<CustomPointer />}
//           // <VictoryTooltip // Cursor in data component
//           //   renderInPortal={false}
//           //   flyoutComponent={<ClusterFlyout/>}
//           // />}
//           animate={{
//             duration: 700,
//             onLoad: { duration: 700 }
//           }}
//           style={{ data: { fill: "#faa202", width: 500, height: 500 } }}
//           bubbleProperty="articleSize"
//           maxBubbleSize={20}
//           minBubbleSize={5}
//           data={graphClusters.map(({ x, y, z, cluster }) => {
//             return ({
//               x,
//               y,
//               articleSize: z,
//               // label: cluster.title,
//               // cluster, // Add data of cluster into each data "bubble"
//             })
//           })}
//           // events={[{
//           //   target: "data",
//           //   eventHandlers: {
//           //     onMouseOver: () => {
//           //       return [
//           //         {
//           //           target: "data",
//           //           mutation: () => ({style: {fill: "gold", width: 30}})
//           //         }, {
//           //           target: "labels",
//           //           mutation: () => ({ active: true })
//           //         }
//           //       ];
//           //     },
//           //     onMouseOut: () => {
//           //       return [
//           //         {
//           //           target: "data",
//           //           mutation: () => {}
//           //         }, {
//           //           target: "labels",
//           //           mutation: () => ({ active: false })
//           //         }
//           //       ];
//           //     }
//           //   }
//           // }]}
//         />
//       </VictoryChart>
//     </div>
//   );


//   // return (
//   //   <div style={styles.graphContainer} id="graph-container">
//   //     <header>
//   //       <h4 className="h5 text-uppercase small fw6">
//   //         Newsfeed
//   //       </h4>
//   //       {
//   //         (!graphClustersLoading) && <p className="text-center">{topResults}</p>
//   //       }
//   //     </header>
//   //     <div style={styles.graphContentContainer}>
//   //       {graphClustersLoading && (
//   //         <span style={{ position: 'absolute' }}>
//   //           <LoadingContainer />
//   //         </span>
//   //       )}
//   //       {!graphClustersLoading && (<YLabel />)}
//   //       <svg className="d3" width={800} height={250} style={styles.container}>
//   //         {!graphClustersLoading && (
//   //           <g className="d3-points" transform="translate(50, 10)">
//   //             <Grid h={200} grid={yGrid} gridType="y" />
//   //             <Grid h={200} grid={yAxis} gridType="y" />
//   //             <Axis h={200} w={0} axis={xAxis} axisType="x" />
//   //             {compact(graphClusters).map((cluster, idx) => (
//   //               <Point
//   //                 key={idx}
//   //                 cluster={cluster}
//   //                 selectedClusterId={selectedClusterId}
//   //                 openSummary={openSummary}
//   //                 x={x} y={y} z={z}
//   //               />
//   //             ))}
//   //           </g>
//   //         )}
//   //       </svg>
//   //     </div>
//   //     {!graphClustersLoading && compact(graphClusters).map((d, idx) => (
//   //       <ReactTooltip
//   //         key={idx}
//   //         place="bottom"
//   //         x={x}
//   //         y={y}
//   //         type="dark"
//   //         effect="solid"
//   //         multiline={MULTILINE}
//   //         id={d.cluster._id._str}
//   //       >
//   //         <PointTooltip cluster={d.cluster} />
//   //       </ReactTooltip>
//   //     ))}
//   //   </div>
//   // );
// };

// Graph.propTypes = {
//   userId: PropTypes.string,
//   clusters: PropTypes.array,
//   maxScore: PropTypes.number,
//   openSummary: PropTypes.func,
//   selectedClusterId: PropTypes.string,
//   graphSort: PropTypes.string,
//   changeGraphSort: PropTypes.func,
//   graphClustersLoading: PropTypes.bool,
//   topResults: PropTypes.string,
// };

// export default Graph