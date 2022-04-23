import React from 'react';
import { Link } from 'react-router-dom';
import {scroller} from "react-scroll";

function Footer() {

  const scrollToEl = (elId) => {
    scroller.scrollTo(elId, {
      duration: 600,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              <Link to="/" className="inline-block" aria-label="Cruip">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="679.556" height="176.866" viewBox="0 0 679.556 176.866"><g transform="translate(-288.444 -514.533)"><path d="M669.315,619.5h-9.287V572.223H604.486v47.11h-9.522V517.724h9.073v44.9h55.732V517.665h9.546Z"/><path d="M503.249,528.885c-.152-10.019-2.275-8.346,8.416-11.476,14.694-4.3,29.395-4.344,42.9,3.788,18.066,10.876,23.844,28.181,23.222,48.19-.715,23-13.454,41.261-33.763,48.4-12.484,4.386-25.126,3.629-37.741.053-2.629-.745-3.48-2.035-3.261-4.59.169-1.976.033-3.979.033-5.507,7.508,1.343,14.844,3.589,22.239,3.8,22.333.654,38.036-12.66,41.593-34.721,2.035-12.623,1.025-25.022-5.977-36.112-9.173-14.529-23.113-18.77-39.309-16.557C515.462,524.994,509.507,527.228,503.249,528.885Z"/><path d="M715.3,526.334H686.046v-8.643h68.18v8.592H725v93.035h-9.7Z"/><path d="M378.359,665.047a4.846,4.846,0,0,0-.316.643q-3.768,11.575-7.526,23.155c-.075.233-.143.469-.229.7A1.543,1.543,0,0,1,368.5,690.8q-1.3.016-2.6,0c-1.281-.014-1.64-.28-2.034-1.491q-1.148-3.52-2.292-7.041-2.7-8.242-5.406-16.48a6.456,6.456,0,0,0-.406-.827l-.249.054c-.028.286-.081.572-.081.857q-.008,11.753,0,23.506a7.163,7.163,0,0,1-.015.733.661.661,0,0,1-.685.676q-1.268.016-2.537,0a.647.647,0,0,1-.688-.665c-.023-.243-.023-.489-.023-.733q0-14.524,0-29.048c0-.222,0-.446.02-.667a.721.721,0,0,1,.8-.713q2.67,0,5.342,0c.61,0,.895.373,1.07.916,1,3.089,2.011,6.173,3.018,9.259q2.627,8.055,5.252,16.109a1.406,1.406,0,0,0,.132.376c.1.134.266.35.351.328a.647.647,0,0,0,.389-.364c.42-1.243.812-2.495,1.212-3.744q3.459-10.8,6.919-21.6c.4-1.25.456-1.287,1.789-1.287,1.446,0,2.893-.005,4.34,0,.793,0,.992.2,1.03.973.011.222.005.445.005.667v28.647c0,.2,0,.4,0,.6-.024.795-.161.94-.944.949q-1.3.015-2.605,0c-.8-.008-.934-.138-.936-.94q-.007-3.906,0-7.812,0-8.047,0-16.094c0-.289-.052-.578-.08-.866Z"/><path d="M605.046,665.046a3.608,3.608,0,0,0-.329.6q-2.841,8.719-5.668,17.443-1.008,3.108-2.014,6.218c-.4,1.231-.742,1.485-2.019,1.493-.89.005-1.78.013-2.67-.007-1.039-.024-1.4-.278-1.744-1.317-.758-2.254-1.489-4.518-2.228-6.779q-2.759-8.43-5.521-16.859a6.551,6.551,0,0,0-.439-.884l-.251.057c-.027.288-.079.576-.079.864q-.006,11.751,0,23.5c0,.244.005.49-.011.734a.641.641,0,0,1-.676.675c-.845.014-1.691.013-2.536,0a.632.632,0,0,1-.683-.663c-.015-.244-.013-.489-.013-.734q0-14.52,0-29.041c0-.2,0-.4.005-.6a.714.714,0,0,1,.794-.784c1.781-.006,3.561,0,5.341,0,.691,0,.938.467,1.122,1.035q2,6.186,4.024,12.367,2.11,6.466,4.227,12.932a1.459,1.459,0,0,0,.135.374c.081.118.224.3.313.282a.555.555,0,0,0,.372-.293c.226-.6.415-1.22.611-1.834q3.717-11.625,7.43-23.251c.515-1.616.51-1.618,2.224-1.618,1.29,0,2.581,0,3.872,0,.994,0,1.2.205,1.2,1.223.005,1.424,0,2.849,0,4.273q0,12.484,0,24.969c0,.222.009.446-.011.667a.67.67,0,0,1-.724.7c-1.024,0-2.048,0-3.071,0-.5,0-.712-.284-.709-.768.005-.8,0-1.6,0-2.4V665.149Z"/><path d="M783.286,685.248c.022-.3.064-.595.063-.892q-.048-11.886-.1-23.771c0-.223,0-.446.005-.668a.7.7,0,0,1,.791-.776h2.4a.7.7,0,0,1,.789.777c0,.178,0,.356,0,.534v28.98c0,.2,0,.4-.009.6-.027.467-.247.759-.744.76q-2.4,0-4.807-.01a1.334,1.334,0,0,1-1.173-.765c-.3-.52-.571-1.057-.84-1.593Q773.935,677,768.2,665.584a4.928,4.928,0,0,0-.675-.832,4.433,4.433,0,0,0-.244,1.018q.008,11.818.045,23.638c0,.245.005.49-.01.734a.614.614,0,0,1-.679.655c-.868,0-1.736,0-2.6,0a.638.638,0,0,1-.7-.712c0-.156,0-.312,0-.468V660.368c0-1.11.117-1.228,1.216-1.229,1.424,0,2.85.035,4.273-.013a1.754,1.754,0,0,1,1.82,1.139q5.884,12.088,11.816,24.155c.156.318.367.609.552.913Z"/><path d="M345.005,675.36a19.128,19.128,0,0,1-2.317,9.436,12.614,12.614,0,0,1-9.583,6.384,17.214,17.214,0,0,1-7.729-.505,12.113,12.113,0,0,1-8.211-7.958,21.791,21.791,0,0,1,.481-16.285c1.995-4.585,5.674-7.055,10.6-7.7a16.447,16.447,0,0,1,7.9.764c4.218,1.547,6.7,4.685,7.978,8.882A23.4,23.4,0,0,1,345.005,675.36Zm-24.173.4a18,18,0,0,0,.7,4.9,9.536,9.536,0,0,0,4.036,5.845,9.051,9.051,0,0,0,12.995-3.939,19.715,19.715,0,0,0,.723-13.521,9,9,0,0,0-17.12-1.362A19.51,19.51,0,0,0,320.832,675.757Z"/><path d="M847.872,675.193a22.951,22.951,0,0,1,1.96-9.25,12.765,12.765,0,0,1,10.257-7.194,16.541,16.541,0,0,1,7.966.724,12.32,12.32,0,0,1,7.76,8.087,22.268,22.268,0,0,1-.008,14.683c-1.918,5.552-5.962,8.521-11.786,9.06a15.756,15.756,0,0,1-8.65-1.416,12.788,12.788,0,0,1-6.8-9.013A22.242,22.242,0,0,1,847.872,675.193Zm24.176-.745a18.9,18.9,0,0,0-.682-5.139c-1.616-5.867-6.985-8.657-12.458-6.454a9.034,9.034,0,0,0-5.284,6.245,21.379,21.379,0,0,0-.325,10.7,10.306,10.306,0,0,0,3.316,6.03,9.128,9.128,0,0,0,14.08-3.539A18.932,18.932,0,0,0,872.048,674.448Z"/><path d="M793.492,675.193a22.95,22.95,0,0,1,1.96-9.25,12.762,12.762,0,0,1,10.256-7.194,16.545,16.545,0,0,1,7.967.724,12.322,12.322,0,0,1,7.76,8.087,22.281,22.281,0,0,1-.008,14.683c-1.919,5.552-5.962,8.521-11.786,9.06a15.754,15.754,0,0,1-8.65-1.416,12.789,12.789,0,0,1-6.8-9.013A22.241,22.241,0,0,1,793.492,675.193Zm24.176-.745a18.941,18.941,0,0,0-.682-5.139c-1.616-5.867-6.986-8.657-12.459-6.454a9.034,9.034,0,0,0-5.284,6.245,21.4,21.4,0,0,0-.325,10.7,10.311,10.311,0,0,0,3.316,6.03,9.129,9.129,0,0,0,14.081-3.539A18.949,18.949,0,0,0,817.668,674.448Z"/><path d="M731.014,674.963q0-7.309,0-14.619c0-1.029.171-1.2,1.2-1.2.846,0,1.692-.009,2.537,0s1.06.225,1.062,1.082q.008,5.574,0,11.149c0,1.029.031,1.06,1.04,1.06q6.309,0,12.617,0c.923,0,.982-.059.982-.986q0-5.508,0-11.015c0-1.106.182-1.288,1.269-1.291.823,0,1.646-.008,2.47,0,.849.011,1.044.217,1.063,1.081,0,.134,0,.267,0,.4q0,14.352,0,28.705a6.658,6.658,0,0,1-.029.8.668.668,0,0,1-.7.661q-1.668.013-3.337,0a.677.677,0,0,1-.718-.714c-.02-.243-.016-.489-.016-.734q0-6.075,0-12.149c0-.983-.083-1.063-1.068-1.063q-6.307,0-12.617,0c-.887,0-.954.064-.954.946q0,6.242,0,12.483c0,1.1-.14,1.238-1.223,1.242q-1.169.006-2.336,0c-1.108,0-1.239-.131-1.239-1.22Q731.013,682.274,731.014,674.963Z"/><path d="M521.912,675.007q0-7.277,0-14.553c0-1.187.125-1.312,1.284-1.315q1.136,0,2.27,0c1.071,0,1.22.154,1.221,1.249q0,5.442,0,10.882c0,1.14.022,1.162,1.151,1.162q6.241,0,12.484,0c.981,0,1.021-.04,1.021-1.013q0-5.508,0-11.016c0-1.083.184-1.26,1.291-1.263.8,0,1.6-.006,2.4,0,.9.008,1.1.2,1.1,1.1q.008,4.707,0,9.413,0,9.915,0,19.828c0,1.188-.126,1.316-1.284,1.32q-1.134,0-2.27,0c-1.135,0-1.243-.112-1.243-1.28q0-6.174,0-12.35c0-.951-.087-1.041-1.019-1.042q-6.342,0-12.684,0c-.856,0-.951.092-.952.962q0,6.208,0,12.417c0,1.2-.091,1.29-1.294,1.293-.778,0-1.557,0-2.336,0-1.01-.006-1.144-.139-1.145-1.175Q521.91,682.317,521.912,675.007Z"/><path d="M907.255,682.445q0,2.8,0,5.609c0,1.189-.188,1.585-1.34,1.918a34.008,34.008,0,0,1-4.862,1.117,21,21,0,0,1-9.5-.782,13.013,13.013,0,0,1-9.084-9.964,21.312,21.312,0,0,1,.47-11.787,13.467,13.467,0,0,1,9.621-9.181,21.213,21.213,0,0,1,13.063.392,6.977,6.977,0,0,1,.793.35,1.063,1.063,0,0,1,.645,1.068c-.024.756,0,1.513-.011,2.27-.013.723-.283.91-.98.649-.6-.226-1.184-.511-1.778-.76a14.434,14.434,0,0,0-8.829-.832,9.949,9.949,0,0,0-7.643,6.744,17.62,17.62,0,0,0-.555,10.063c1.194,5.184,4.867,8.17,10.188,8.321a17.586,17.586,0,0,0,3.829-.382c1.1-.214,1.271-.583,1.271-1.689q0-4.44,0-8.881c0-.955.132-1.092,1.069-1.1.912-.009,1.825-.013,2.738,0,.76.013.888.143.891.913C907.26,678.483,907.255,680.464,907.255,682.445Z"/><path d="M617.9,675.039q0-7.309,0-14.617c0-1.128.152-1.292,1.254-1.282,3.359.03,6.72,0,10.074.138a14.12,14.12,0,0,1,3.771.763,6.819,6.819,0,0,1,4.731,5.246,12.688,12.688,0,0,1-.253,6.853,8.181,8.181,0,0,1-6.434,5.575,24.067,24.067,0,0,1-3.82.494c-1.218.082-2.446.018-3.67.022-.754,0-.849.088-.853.838-.008,1.446,0,2.893,0,4.339,0,2.136,0,4.272,0,6.407,0,.824-.16.979-.975.987-.935.008-1.869.006-2.8,0-.869-.005-1.013-.146-1.014-1.012Q617.894,682.414,617.9,675.039Zm4.8-6.391q0,2.8,0,5.6c0,.363-.005.756.527.739a45.627,45.627,0,0,0,5.051-.2,5.139,5.139,0,0,0,4.624-4.183,12.07,12.07,0,0,0,.2-3.11,4.672,4.672,0,0,0-4.054-4.821,41.946,41.946,0,0,0-5.5-.34c-.749-.032-.844.084-.846.841C622.69,665,622.694,666.825,622.7,668.648Z"/><path d="M391.232,674.984q0-7.275,0-14.551c0-1.152.146-1.3,1.313-1.293,3.336.03,6.675,0,10.007.139a14.11,14.11,0,0,1,3.9.807,6.805,6.805,0,0,1,4.609,5.2,12.842,12.842,0,0,1-.111,6.4,8.2,8.2,0,0,1-6.563,6.028,23.964,23.964,0,0,1-3.82.495c-1.174.082-2.358.02-3.537.022-.97,0-.995.026-.995,1.027q0,5.073,0,10.145c0,.178-.006.357,0,.534.022.578-.236.871-.831.867-1.068-.009-2.136-.007-3.2,0a.678.678,0,0,1-.758-.734c-.01-.2-.006-.4-.006-.6Zm4.8-6.325v5.6c0,.373.005.745.533.729,1.663-.052,3.338-.005,4.988-.184a5.141,5.141,0,0,0,4.666-4.213,11.284,11.284,0,0,0,.17-3.5,4.546,4.546,0,0,0-4.082-4.436,41.874,41.874,0,0,0-5.442-.32c-.745-.03-.83.082-.832.85C396.028,665.012,396.031,666.836,396.031,668.659Z"/><path d="M554.233,674.991q0-7.28,0-14.558c0-1.165.132-1.294,1.31-1.294h15.025c1.129,0,1.249.126,1.251,1.271,0,.512-.014,1.025,0,1.536a.753.753,0,0,1-.847.872c-.735.012-1.469.005-2.2.005q-4.407,0-8.814,0c-.861,0-.941.065-.943.889q-.012,3.973,0,7.946c0,.736.1.829.872.83q4.273.006,8.548,0c1.169,0,1.246.079,1.247,1.246,0,.512.009,1.024,0,1.536-.015.713-.151.853-.881.854-2.916.006-5.832,0-8.748,0-.965,0-1.036.065-1.037,1.008q0,4.473,0,8.948c0,1.009.061,1.067,1.045,1.067h11.553c.977,0,1.1.13,1.109,1.123q0,.734,0,1.469c-.007.969-.092,1.054-1.088,1.056q-2.7,0-5.409,0-5.409,0-10.818,0c-1.1,0-1.169-.077-1.169-1.188Q554.232,682.3,554.233,674.991Z"/><path d="M679.376,674.98q0-7.243,0-14.486c0-1.219.135-1.355,1.326-1.355h14.953c1.229,0,1.307.082,1.307,1.336,0,.445,0,.89,0,1.335-.007.821-.188,1-1.032,1.011-.667.008-1.335,0-2,0q-4.44,0-8.879,0c-.788,0-.883.089-.885.88q-.009,3.972,0,7.944c0,.739.1.839.865.84,2.871.005,5.741,0,8.612,0,1.1,0,1.187.089,1.19,1.16,0,.512,0,1.023,0,1.535-.007.81-.127.939-.924.942-1.714.006-3.427,0-5.14,0-1.269,0-2.537.016-3.8-.007-.573-.01-.8.222-.8.788.01,3.138,0,6.275.008,9.413,0,.716.131.828.88.828q5.843,0,11.683,0c1.027,0,1.147.122,1.151,1.15,0,.534.007,1.068,0,1.6-.013.746-.151.877-.914.9-.155,0-.311,0-.467,0H680.742c-1.311,0-1.365-.054-1.365-1.338Q679.375,682.223,679.376,674.98Z"/><path d="M437.856,675.007q0-7.31,0-14.619c0-1.073.171-1.249,1.226-1.249h15.153c1.081,0,1.222.146,1.224,1.236,0,.534-.008,1.068,0,1.6a.748.748,0,0,1-.814.841c-.2.011-.4.005-.6.005q-5.24,0-10.48,0c-.845,0-.907.059-.908.914q-.008,3.938,0,7.877c0,.794.082.873.887.874,2.87,0,5.741,0,8.611,0,1.062,0,1.172.118,1.174,1.2,0,.512.008,1.024,0,1.536-.013.743-.165.9-.908.9-2.76.006-5.519,0-8.278,0-1.49,0-1.492-.19-1.488,1.482.008,2.849,0,5.7,0,8.545,0,.935.062.995.972.995h11.616c.972,0,1.1.13,1.108,1.125q.006.934-.016,1.868a.593.593,0,0,1-.673.65c-.155,0-.311.006-.467.006H439.108c-1.182,0-1.252-.072-1.252-1.244Z"/><path d="M495.882,690.8q-4.105,0-8.211,0c-.955,0-1.077-.128-1.078-1.085q0-14.686,0-29.373c0-1.024.181-1.2,1.205-1.205q7.611,0,15.221,0c1.016,0,1.16.147,1.165,1.152,0,.534.008,1.068,0,1.6-.015.71-.205.913-.923.924-1.09.017-2.181.005-3.271.005q-3.871,0-7.744,0c-.78,0-.849.065-.851.83q-.008,4,0,8.011c0,.734.091.822.867.823,2.849.005,5.7,0,8.545,0,1.168,0,1.255.09,1.257,1.244,0,.423,0,.846,0,1.269,0,1.042-.084,1.125-1.156,1.125q-4.24,0-8.479,0c-1.009,0-1.034.027-1.035,1.061q0,4.506,0,9.012c0,.893.057.949.947.949h11.616c1,0,1.138.143,1.145,1.165,0,.49.005.98,0,1.469-.011.876-.138,1.011-1.006,1.013C501.356,690.807,498.619,690.8,495.882,690.8Z"/><path d="M927.183,675.005q0-7.278,0-14.556c0-1.186.123-1.31,1.291-1.31H943.5c1.156,0,1.252.1,1.254,1.258,0,.512.009,1.024,0,1.536-.017.67-.2.862-.888.885-.511.018-1.023.005-1.535.005q-4.742,0-9.481,0c-.808,0-.872.061-.873.877q-.008,3.973,0,7.946c0,.754.086.84.851.841,2.871.005,5.742,0,8.613,0,1.1,0,1.182.087,1.185,1.169,0,.512.006,1.024,0,1.536-.01.808-.126.93-.936.932q-4.306.007-8.613,0c-1.083,0-1.1.016-1.1,1.065q0,4.508,0,9.014c0,.88.069.944.954.944h11.618c.991,0,1.114.125,1.119,1.111,0,.578-.011,1.157,0,1.736.013.564-.25.808-.808.8-1.157-.01-2.314,0-3.472,0q-6.51,0-13.02,0c-1.1,0-1.179-.081-1.18-1.176Q927.182,682.316,927.183,675.005Z"/><path d="M303.563,691.176a16.919,16.919,0,0,1-5.667-.7,12.106,12.106,0,0,1-8.525-8.63,22.283,22.283,0,0,1,.3-13.665c1.942-5.682,6.1-8.675,11.958-9.437a19.449,19.449,0,0,1,9.455,1.056c1.057.4,1.177.589,1.181,1.726,0,.557.009,1.113,0,1.67-.019.984-.3,1.179-1.189.772a16.953,16.953,0,0,0-4.661-1.569c-3.209-.458-6.226-.045-8.82,2.071a10.786,10.786,0,0,0-3.621,6.231,18.573,18.573,0,0,0,.45,10.718,8.937,8.937,0,0,0,7.852,6.043,13.49,13.49,0,0,0,8.443-1.58c1.338-.745,1.548-.6,1.549.908,0,.445-.023.892,0,1.335a1.6,1.6,0,0,1-1.089,1.708,16.775,16.775,0,0,1-5.82,1.333C304.767,691.211,304.164,691.176,303.563,691.176Z"/><path d="M716.124,691.231a17.161,17.161,0,0,1-4.982-.748,12.1,12.1,0,0,1-8.535-8.619A22.29,22.29,0,0,1,702.9,668.2c1.936-5.683,6.09-8.683,11.947-9.451a19.444,19.444,0,0,1,9.457,1.05c1.071.4,1.192.591,1.2,1.716,0,.623.017,1.247-.011,1.869-.034.763-.329.93-1.049.657a30.892,30.892,0,0,0-3.932-1.442c-3.467-.794-6.782-.444-9.668,1.866a10.278,10.278,0,0,0-3.386,5.324,19.387,19.387,0,0,0-.182,10.481c1.191,4.575,4.57,7.138,9.484,7.3a13.446,13.446,0,0,0,7.064-1.619c1.536-.84,1.68-.737,1.68,1.023,0,.423-.015.847,0,1.269a1.51,1.51,0,0,1-1.013,1.552C722.047,690.928,719.454,691.2,716.124,691.231Z"/><path d="M957.879,691.306a19.967,19.967,0,0,1-7.668-1.282,1.581,1.581,0,0,1-1.113-1.688c.032-.622-.007-1.247.011-1.87.022-.774.431-1.057,1.146-.751.57.245,1.1.589,1.657.86a10.883,10.883,0,0,0,8.051.717,4.484,4.484,0,0,0,1.916-7.792,26.039,26.039,0,0,0-3.732-2.666c-1.319-.867-2.695-1.646-4.03-2.489a8.694,8.694,0,0,1-4.219-9.469,7.044,7.044,0,0,1,5.558-5.75,16.028,16.028,0,0,1,10.279.6c1.156.453,1.28.675,1.28,1.884,0,.512.012,1.025-.006,1.536-.023.634-.289.853-.907.685a6.422,6.422,0,0,1-1.228-.507,10.926,10.926,0,0,0-5.92-1.291,7.91,7.91,0,0,0-1.446.222,4.23,4.23,0,0,0-2.306,6.785,12.556,12.556,0,0,0,2.911,2.4c2,1.33,4.126,2.468,6.089,3.842,3.85,2.7,4.421,6.812,3.267,10.424-.9,2.828-3.085,4.349-5.855,5.023A35.1,35.1,0,0,1,957.879,691.306Z"/><path d="M660.53,676.744q0-6.311,0-12.62c0-1.274,0-1.275-1.3-1.275q-3.538,0-7.078,0c-.8,0-.938-.136-.951-.926-.01-.667.006-1.335,0-2a.675.675,0,0,1,.771-.779c.156,0,.312,0,.467,0h20.9c1.136,0,1.213.077,1.217,1.214,0,.556-.01,1.113,0,1.669.011.587-.25.837-.849.833-2.471-.016-4.941-.007-7.412-.005-.926,0-.982.053-.982.983q0,12.786,0,25.573a1.72,1.72,0,0,1-.03.725c-.132.256-.391.617-.612.629-1.154.064-2.313.035-3.47.03a.6.6,0,0,1-.64-.626c-.021-.243-.025-.489-.025-.733Q660.528,683.088,660.53,676.744Z"/><path d="M472.6,676.767q0,6.411,0,12.821c0,1.108-.109,1.214-1.233,1.216-.89,0-1.781.009-2.671-.005-.673-.011-.858-.205-.893-.884-.011-.222,0-.445,0-.667q0-12.654,0-25.309c0-1.08-.01-1.089-1.072-1.09q-3.639,0-7.278,0c-.815,0-.969-.15-.983-.973-.01-.667,0-1.335.013-2a.663.663,0,0,1,.753-.732l.467,0h20.9c1.159,0,1.237.08,1.239,1.259,0,.467,0,.935,0,1.4-.007.936-.114,1.047-1.029,1.048q-3.54,0-7.079,0c-1.129,0-1.13,0-1.13,1.164Z"/><path d="M829.231,674.94q0-7.245,0-14.49c0-1.175.137-1.308,1.3-1.311q1.136,0,2.27,0c1.074,0,1.215.147,1.215,1.245q0,12.62,0,25.24c0,1.5,0,1.5,1.5,1.5q4.574,0,9.147,0c.933,0,1.02.092,1.025,1.039,0,.623-.007,1.246,0,1.869a.662.662,0,0,1-.768.77c-.891-.009-1.781,0-2.671,0H830.564c-1.261,0-1.333-.069-1.333-1.308Q829.229,682.218,829.231,674.94Z"/><path d="M416.455,675.006q0-7.311,0-14.622c0-1.1.142-1.241,1.22-1.245.824,0,1.647-.006,2.47,0,.892.008,1.1.211,1.1,1.11q0,7.344,0,14.689,0,5.575,0,11.15c0,.967.065,1.034,1.013,1.034q4.807,0,9.615,0c.944,0,1.019.081,1.022,1.039,0,.623-.013,1.247,0,1.87.013.541-.25.77-.769.768-.69,0-1.38,0-2.07,0q-6.209,0-12.419,0c-1.1,0-1.186-.085-1.186-1.175Q416.453,682.317,416.455,675.006Z"/><path d="M919.112,675.075q0,7.243,0,14.489c0,1.131-.107,1.236-1.21,1.24-.846,0-1.692.006-2.537,0-.867-.009-1.018-.156-1.02-1.016-.006-2.225,0-4.451,0-6.677q0-11.317,0-22.634c0-1.22.116-1.336,1.331-1.336.756,0,1.513,0,2.27,0,.976.006,1.166.189,1.166,1.18Q919.117,667.7,919.112,675.075Z"/></g></svg>
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              <a href="https://www.completehemptechnologies.eu/polityka-prywatnosci.html" className="text-xs text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Polityka Prywatności</a> · <a href="https://www.completehemptechnologies.eu/polityka-cookies.html" className="text-xs text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Polityka Cookies</a>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">USŁUGI PRZETWÓRSTWA I LABORATORYJNE</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Ekstrakcja</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Filtracja</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Oczyszczanie</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Usuwanie THC</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Konfekcjonowanie</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Uprawy biomasy</Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">WSPÓŁPRACUJ Z NAMI</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">B2B</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">White Label</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Private Label</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Doradztwo</Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">O NAS</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <button onClick={() => scrollToEl("hero-home")} className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Home</button>
              </li>
              <li className="mb-2">
                <button onClick={() => scrollToEl("part-of-eiha-section")} className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">O nas</button>
              </li>
              <li className="mb-2">
                <button onClick={() => scrollToEl("goals")} className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Nasze Cele</button>
              </li>
              <li className="mb-2">
                <a href={'https://www.completehemptechnologies.eu/polityka-prywatnosci.html'} className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Polityka Prywatności</a>
              </li>
              <li className="mb-2">
                <a href={'https://www.completehemptechnologies.eu/polityka-cookies.html'} className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Polityka Cookies</a>
              </li>
            </ul>
          </div>


        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <Link to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </Link>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">Made by <a className="text-blue-600 hover:underline" href="https://kdev-solutions.co.uk/">KDev Solutions</a>. All rights reserved.</div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
