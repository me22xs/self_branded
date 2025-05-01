// landmarks.js- based on landmark index definitions from MediaPipe Hands and FaceMesh by Google.
// where vertex indices and triangulation are defined
//

//------------------------------------------
// HAND:
//
const WRIST = 0; 
const THUMB_CMC = 1; 
const THUMB_MCP = 2; 
const THUMB_IP = 3; 
const THUMB_TIP = 4; 
const INDEX_FINGER_MCP = 5; 
const INDEX_FINGER_PIP = 6; 
const INDEX_FINGER_DIP = 7; 
const INDEX_FINGER_TIP = 8; 
const MIDDLE_FINGER_MCP = 9; 
const MIDDLE_FINGER_PIP = 10; 
const MIDDLE_FINGER_DIP = 11; 
const MIDDLE_FINGER_TIP = 12; 
const RING_FINGER_MCP = 13; 
const RING_FINGER_PIP = 14; 
const RING_FINGER_DIP = 15; 
const RING_FINGER_TIP = 16; 
const PINKY_MCP = 17; 
const PINKY_PIP = 18; 
const PINKY_DIP = 19; 
const PINKY_TIP = 20; 

const HAND_VERTEX_INDICES = [
  [PINKY_MCP,WRIST,THUMB_CMC,INDEX_FINGER_MCP,MIDDLE_FINGER_MCP,RING_FINGER_MCP,PINKY_MCP],
  [THUMB_CMC,THUMB_MCP,THUMB_IP,THUMB_TIP],
  [INDEX_FINGER_MCP,INDEX_FINGER_PIP,INDEX_FINGER_DIP,INDEX_FINGER_TIP],
  [MIDDLE_FINGER_MCP,MIDDLE_FINGER_PIP,MIDDLE_FINGER_DIP,MIDDLE_FINGER_TIP],
  [RING_FINGER_MCP,RING_FINGER_PIP,RING_FINGER_DIP,RING_FINGER_TIP],
  [PINKY_MCP,PINKY_PIP,PINKY_DIP,PINKY_TIP],
  ];

const FACELANDMARKER_NOSE = [{start:168,end:6},{start:6,end:195},{start:195,end:4},{start:98,end:97},{start:97,end:2},{start:2,end:326},{start:326,end:327}];

const HANDLANDMARKER_PALM = [
  {start:PINKY_MCP,end:WRIST}, 
  {start:WRIST,end:THUMB_CMC}, 
  {start:THUMB_CMC,end:INDEX_FINGER_MCP},
  {start:INDEX_FINGER_MCP,end:MIDDLE_FINGER_MCP},
  {start:MIDDLE_FINGER_MCP,end:RING_FINGER_MCP},
  {start:RING_FINGER_MCP,end:PINKY_MCP}];
const HANDLANDMARKER_THUMB = [
  {start:THUMB_CMC,end:THUMB_MCP},
  {start:THUMB_MCP,end:THUMB_IP},
  {start:THUMB_IP,end:THUMB_TIP}];
const HANDLANDMARKER_INDEX_FINGER = [
  {start:INDEX_FINGER_MCP,end:INDEX_FINGER_PIP},
  {start:INDEX_FINGER_PIP,end:INDEX_FINGER_DIP},
  {start:INDEX_FINGER_DIP,end:INDEX_FINGER_TIP}];
const HANDLANDMARKER_MIDDLE_FINGER = [
  {start:MIDDLE_FINGER_MCP,end:MIDDLE_FINGER_PIP},
  {start:MIDDLE_FINGER_PIP,end:MIDDLE_FINGER_DIP},
  {start:MIDDLE_FINGER_DIP,end:MIDDLE_FINGER_TIP}];
const HANDLANDMARKER_RING_FINGER = [
  {start:RING_FINGER_MCP,end:RING_FINGER_PIP},
  {start:RING_FINGER_PIP,end:RING_FINGER_DIP},
  {start:RING_FINGER_DIP,end:RING_FINGER_TIP}];
const HANDLANDMARKER_PINKY = [
  {start:PINKY_MCP,end:PINKY_PIP},
  {start:PINKY_PIP,end:PINKY_DIP},
  {start:PINKY_DIP,end:PINKY_TIP}];


//------------------------------------------
// POSE:
//
/*
// TODO: provide accessors for these points from the POSE vertices
0 - nose
1 - left eye (inner)
2 - left eye
3 - left eye (outer)
4 - right eye (inner)
5 - right eye
6 - right eye (outer)
7 - left ear
8 - right ear
9 - mouth (left)
10 - mouth (right)
11 - left shoulder
12 - right shoulder
13 - left elbow
14 - right elbow
15 - left wrist
16 - right wrist
17 - left pinky
18 - right pinky
19 - left index
20 - right index
21 - left thumb
22 - right thumb
23 - left hip
24 - right hip
25 - left knee
26 - right knee
27 - left ankle
28 - right ankle
29 - left heel
30 - right heel
31 - left foot index
32 - right foot index
*/


//------------------------------------------
// FACE: vertices for:
// 7-POINT-FACEMESH, 33-POINT-FACEMESH, 68-POINT-FACEMESH, 468-POINT-FACEMESH
//
var VTX7 = [33,133,362,263,1,78,308];
var VTX33 = [33,133,362,263,1,62,308,159,145,386,374,6,102,331,2,13,14,70,105,107,336,334,300,54,10,284,50,280,234,454,58,288,152]
var VTX68 = [
  /* contour  */127,234,132, 58,172,150,149,148,152,377,378,379,397,288,361,454,356,
  /* brows    */ 70, 63,105, 66,107,336,296,334,293,300,
  /* nose     */168,  6,195,  4, 98, 97,  2,326,327,
  /* eyes     */ 33,160,158,133,153,144,362,385,387,263,373,380,
  /* lip      */ 57, 40, 37,  0,267,270,287,321,314, 17, 84, 91,
  /* mouth    */ 78, 81, 13,311,308,402, 14,178,
]
var VTX468 = new Array(468).fill(0).map((x,i)=>i);

var TRI7 = [0,1,4,2,3,4,4,6,5]
var TRI33 = [
  /*  eyes  */ 0, 7 ,8 ,   7, 1, 8,   2, 9,10,   9, 3,10, 
  /*  brows */ 17,18,0 ,  18, 7, 0,  18,19, 7,  19, 1, 7,  19,11, 1,  19,20,11,  21,22, 3,  21, 3, 9,  20,21, 9,  20, 9, 2,  20, 2,11,
  /*  4head */ 23,18,17,  25,22,21,  24,19,20,  24,19,18,  24,21,20,  24,18,23,  24,25,21, 
  /*  nose  */ 11,4 ,12,  11,13, 4,   1,11,12,  11, 2,13,  12, 4,14,   4,13,14, 
  /* up-lip */ 14,15, 5,  14, 6,15,  12,14, 5,  14,13, 6,  
  /* cheeks */ 8 , 1,12,   2,10,13,   8,12,26,  10,27,13,  26,12, 5,  13,27, 6,   0, 8,26,  10,3,27,
  /*  chin  */ 5, 16,32,  16, 6,32,   5,32,30,   6,31,32,  
  /*  cont  */ 26, 5,30,  27,31, 6,   0,26,28,   3,29,27,  17, 0,28,   3,22,29,  23,17,28,  22,25,29,  28,26,30,  27,29,31,
]